#!/usr/bin/env bash

TAG=$GITHUB_REF;

if [ $TAG = "master" ] || [ $TAG = "refs_heads_master" ]; then 
  TAG="latest"; 
fi;

TAG=$(echo "$TAG" | tr / _)

echo "Will be using TAG ---------> $TAG";

IMAGE_NAME="kashyaprahul94/portfolio"

docker build --tag $IMAGE_NAME .

docker tag $IMAGE_NAME $IMAGE_NAME:$TAG;

docker push $IMAGE_NAME:$TAG;