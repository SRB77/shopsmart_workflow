#!/bin/bash

# Inputs
read -p "Enter Instance Name: " NAME
read -p "Choose OS (ubuntu / amazon-linux): " OS
read -p "Enter Instance Type (e.g. t2.micro): " TYPE
read -p "Enter Key Pair Name: " KEY

# Get default VPC
VPC_ID=$(aws ec2 describe-vpcs \
  --filters Name=isDefault,Values=true \
  --query "Vpcs[0].VpcId" \
  --output text)

# Get subnet from default VPC
SUBNET=$(aws ec2 describe-subnets \
  --filters Name=vpc-id,Values=$VPC_ID \
  --query "Subnets[0].SubnetId" \
  --output text)

# Create Security Group
SG=$(aws ec2 create-security-group \
  --group-name "$NAME-sg-$(date +%s)" \
  --description "Auto SG" \
  --vpc-id $VPC_ID \
  --query "GroupId" \
  --output text)

# Allow SSH (port 22)
aws ec2 authorize-security-group-ingress \
  --group-id $SG \
  --protocol tcp \
  --port 22 \
  --cidr 0.0.0.0/0

# Select AMI
if [ "$OS" == "ubuntu" ]; then
  AMI=$(aws ec2 describe-images \
    --owners 099720109477 \
    --filters "Name=name,Values=ubuntu/images/hvm-ssd/ubuntu-*-22.04-amd64-server-*" \
    --query 'Images | sort_by(@, &CreationDate) | [-1].ImageId' \
    --output text)
  DISTRO="Ubuntu"

elif [ "$OS" == "amazon-linux" ]; then
  AMI=$(aws ec2 describe-images \
    --owners amazon \
    --filters "Name=name,Values=amzn2-ami-hvm-*-x86_64-gp2" \
    --query 'Images | sort_by(@, &CreationDate) | [-1].ImageId' \
    --output text)
  DISTRO="Amazon Linux"

else
  echo "Invalid OS"
  exit 1
fi

KEY_CHECK=$(aws ec2 describe-key-pairs --key-names "$KEY" --query "KeyPairs[0].KeyName" --output text 2>/dev/null)

if [ "$KEY_CHECK" == "None" ] || [ -z "$KEY_CHECK" ]; then
  echo "Creating key pair..."
  aws ec2 create-key-pair \
    --key-name "$KEY" \
    --query "KeyMaterial" \
    --output text > "$KEY.pem"
  chmod 400 "$KEY.pem"
fi

# Launch instance
INSTANCE_ID=$(aws ec2 run-instances \
  --image-id $AMI \
  --instance-type $TYPE \
  --key-name $KEY \
  --security-group-ids $SG \
  --subnet-id $SUBNET \
  --tag-specifications "ResourceType=instance,Tags=[{Key=Name,Value=$NAME}]" \
  --query 'Instances[0].InstanceId' \
  --output text)

echo "Waiting for instance..."
aws ec2 wait instance-running --instance-ids $INSTANCE_ID

# Get details
read INSTANCE_ID PUBLIC_IP <<< $(aws ec2 describe-instances \
  --instance-ids $INSTANCE_ID \
  --query 'Reservations[0].Instances[0].[InstanceId,PublicIpAddress]' \
  --output text)

# Output table
printf "\n+----------------------+------------------+------------------+------------------+\n"
printf "| %-20s | %-16s | %-16s | %-16s |\n" "Instance ID" "Public IP" "Name" "OS"
printf "+----------------------+------------------+------------------+------------------+\n"
printf "| %-20s | %-16s | %-16s | %-16s |\n" "$INSTANCE_ID" "$PUBLIC_IP" "$NAME" "$DISTRO"
printf "+----------------------+------------------+------------------+------------------+\n"

#Auto SSH into the machine 
echo "Waitiing for ssh ready"
sleep 30

# Determine correct SSH user
if [ "$OS" == "ubuntu" ]; then
  SSH_USER="ubuntu"
elif [ "$OS" == "amazon-linux" ]; then
  SSH_USER="ec2-user"
fi

# Fix permissions (use variable!)
chmod 400 "$KEY.pem"
echo "Connecting to instance via SSH..."

ssh -i "$KEY.pem" $SSH_USER@$PUBLIC_IP

# wrong one by me
# chmod KEY.pem
# ssh -i KEY.pem NAME@$PUBLIC_IP