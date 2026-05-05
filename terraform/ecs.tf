# ECS Cluster
resource "aws_ecs_cluster" "cluster" {
  name = "shopsmart-cluster"
}

# ✅ Use EXISTING IAM Role (instead of creating)
data "aws_iam_role" "ecs_task_execution_role" {
  name = "ecsTaskExecutionRole"
}

# Task Definition
resource "aws_ecs_task_definition" "task" {
  family                   = "shopsmart-task"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "256"
  memory                   = "512"
  execution_role_arn       = data.aws_iam_role.ecs_task_execution_role.arn

  container_definitions = jsonencode([
    {
      name  = "shopsmart-container"
      image = "020195185462.dkr.ecr.ap-south-1.amazonaws.com/shopsmart:latest"
      portMappings = [
        {
          containerPort = 5001
          protocol      = "tcp"
        }
      ]
    }
  ])
}

# VPC + Subnets
data "aws_vpc" "default" {
  default = true
}

data "aws_subnets" "default" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
}

# Security Group
resource "aws_security_group" "ecs_sg" {
  name   = "ecs-sg"
  vpc_id = data.aws_vpc.default.id

  ingress {
    from_port   = 5001
    to_port     = 5001
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# ECS Service
resource "aws_ecs_service" "service" {
  name            = "shopsmart-service"
  cluster         = aws_ecs_cluster.cluster.id
  task_definition = aws_ecs_task_definition.task.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = data.aws_subnets.default.ids
    assign_public_ip = true
    security_groups  = [aws_security_group.ecs_sg.id]
  }
}