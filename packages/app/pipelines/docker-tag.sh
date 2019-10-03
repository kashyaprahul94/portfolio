#!/usr/bin/env bash

TAG=$GITHUB_REF;

TAG=$(echo "$TAG" | tr / _ | tr -d \[:space:\] | tr -cs \[:alnum:\] -);
TAG=$(echo "${TAG/'refs-heads-'}");

if [ $TAG = "master" ]; then 
  TAG="stable"; 
fi;

echo "Will be using TAG ---------> $TAG";

REGISTRY=$DOCKER_REGISTRY_GITHUB;
FULL_IMAGE_NAME=$REGISTRY/$DOCKER_USERNAME/$REPOSITORY_NAME/$DOCKER_IMAGE_NAME:$TAG;

echo $GITHUB_CI_TOKEN | docker login $REGISTRY -u $DOCKER_USERNAME --password-stdin;

sudo yarn;

sudo yarn build;

docker build --tag $FULL_IMAGE_NAME .;

docker push $FULL_IMAGE_NAME;