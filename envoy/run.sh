#!/bin/bash

echo "Stopping existing envoy container..."
docker stop envoy && docker rm envoy

echo "Building envoy service..."
docker build -t envoy:v1 .

echo "Starting envoy service..."
docker run -d --network host --name envoy -p 9901:9901 -p 8080:8080 envoy:v1
