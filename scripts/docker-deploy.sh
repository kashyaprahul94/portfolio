#!/usr/bin/env bash

# build image
yarn docker:build

TAG=$(echo "latest" | tr / _)
IMAGE_NAME=kashyaprahul94/portfolio

docker tag $IMAGE_NAME $IMAGE_NAME:$TAG

docker push $IMAGE_NAME:$TAG