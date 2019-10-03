#!/usr/bin/env bash

TAG=stable
IMAGE_NAME=kashyaprahul94/portfolio

docker tag $IMAGE_NAME $IMAGE_NAME:$TAG

docker push $IMAGE_NAME:$TAG