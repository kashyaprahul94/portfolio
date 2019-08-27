#!/usr/bin/env bash

TAG=$GITHUB_REF;

if [ $TAG = "master" ]; then 
  TAG="latest"; 
fi;

TAG=$(echo "$TAG" | tr / _)

echo "Will be using TAG ---------> $TAG";

IMAGE_NAME="kashyaprahul94/portfolio"

echo $DOCKER_PASSWORD | sudo docker login --username=$DOCKER_USERNAME --password-stdin

sudo docker build --tag $IMAGE_NAME .

sudo docker tag $IMAGE_NAME $IMAGE_NAME:$TAG;

sudo docker push $IMAGE_NAME:$TAG;