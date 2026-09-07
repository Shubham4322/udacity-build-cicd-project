#!/usr/bin/env bash
set -e

# Set Git identity
git config --global user.name "Shubham4322"
git config --global user.email "shubhambhingude4846@gmail.com"

# Initialize git repository
git init
git branch -M main

# Stage and commit initial project files
git add .
git commit -m "Initial commit"

# Create a public repository on your GitHub account and push
gh repo create udacity-build-cicd-project --source=. --public --push