#!/usr/bin/env bash

TAG=$GITHUB_REF;

TAG=$(echo "$TAG" | tr / _)
TAG=$(echo "${TAG/'refs_heads_'}")

if [ $TAG = "master" ]; then 
  TAG="stable"; 
fi;

echo "Will be using TAG ---------> $TAG";

IMAGE_NAME=$DOCKER_USERNAME/$DOCKER_IMAGE_NAME
REGISTRY=$DOCKER_REGISTRY_GITHUB

echo $GITHUB_CI_TOKEN | docker login $REGISTRY -u $DOCKER_USERNAME --password-stdin

sudo yarn

sudo yarn build

docker build --tag $DOCKER_USERNAME/$DOCKER_IMAGE_NAME .

docker tag $IMAGE_NAME $REGISTRY/$IMAGE_NAME:$TAG;

docker push $REGISTRY/$IMAGE_NAME:$TAG;