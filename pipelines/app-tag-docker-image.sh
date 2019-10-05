#!/usr/bin/env bash

TAG=$GITHUB_REF;

TAG=$(echo "$TAG" | tr / _ | tr -d \[:space:\] | tr -cs \[:alnum:\] -);
TAG=$(echo "${TAG/'refs-heads-'}");

if [ $TAG = "master" ]; then 
  TAG="stable"; 
fi;

echo "Will be using TAG ---------> $TAG";

LOCAL_IMAGE_NAME=$DOCKER_USERNAME/$REPOSITORY_NAME-$DOCKER_IMAGE_NAME:$TAG;

echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin $DOCKER_REGISTRY;

cd packages/app;

echo -e "@kashyaprahul94:registry=https://npm.pkg.github.com/\n//npm.pkg.github.com/:_authToken=$DOCKER_PASSWORD" > ./.npmrc

sudo yarn;

sudo yarn build;

docker build --tag $LOCAL_IMAGE_NAME .;