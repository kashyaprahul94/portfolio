#!/usr/bin/env bash

TAG=$GITHUB_REF;

if [ $TAG = "master" ] || [ $TAG = "refs/heads/master" ]; then 
  TAG="latest"; 
fi;

TAG=$(echo "$TAG" | tr / _)

echo "Will be using TAG ---------> $TAG";


IMAGE_NAME="kashyaprahul94/portfolio"

echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin

docker build --tag $IMAGE_NAME .

docker tag $IMAGE_NAME $IMAGE_NAME:$TAG;

docker push $IMAGE_NAME:$TAG;