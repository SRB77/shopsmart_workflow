# ECS Cluster
resource "aws_ecs_cluster" "cluster" {
  name = "shopsmart-cluster"
}

# ✅ Use EXISTING IAM Role
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
      image = "${aws_ecr_repository.repo.repository_url}:latest"
      portMappings = [
        {
          containerPort = 5001
          protocol      = "tcp"
        }
      ]
    }
  ])
}

# Default VPC
data "aws_vpc" "default" {
  default = true
}

# Subnets
data "aws_subnets" "default" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
}

# ✅ Use EXISTING Security Group
data "aws_security_group" "ecs_sg" {
  name   = "ecs-sg"
  vpc_id = data.aws_vpc.default.id
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
    security_groups  = [data.aws_security_group.ecs_sg.id]
  }
}