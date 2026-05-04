#!/bin/bash
echo "Script starts.."
mkdir -p ../src ../logs
touch .env
if command -v node >/dev/null 2>&1; then
    echo "Node js is installed"
else 
    echo "Node js is not installed"
fi

echo "Task completed so removing everything"
rm -rf ../src 
rm -rf ../logs 
rm .env
echo "Removed everything "