#!/usr/bin/env bash

TAG=$GITHUB_REF;

TAG=$(echo "$TAG" | tr / _)
TAG=$(echo "${TAG/'refs_heads_'}")

if [ $TAG = "master" ]; then 
  TAG="latest"; 
fi;

echo "Will be using TAG ---------> $TAG";


IMAGE_NAME="kashyaprahul94/portfolio"

echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin

docker build --tag $IMAGE_NAME .

docker tag $IMAGE_NAME $IMAGE_NAME:$TAG;

docker push $IMAGE_NAME:$TAG;