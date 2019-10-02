#!/usr/bin/env bash
set -e
set -x

TAG=$GITHUB_REF;

BRANCH=$(echo "$BRANCH" | tr / _ | tr -d \[:space:\] | tr -cs \[:alnum:\] -);
TAG=$(echo "${TAG/'refs_heads_'}");

if [ $TAG = "master" ]; then 
  TAG="stable"; 
fi;

echo "Will be using TAG ---------> $TAG";

REGISTRY=$DOCKER_REGISTRY_GITHUB;
LOCAL_IMAGE_NAME=$DOCKER_USERNAME/$DOCKER_IMAGE_NAME;
FULL_IMAGE_NAME=$REGISTRY/$DOCKER_USERNAME/$REPOSITORY_NAME/$DOCKER_IMAGE_NAME:$TAG;

echo $GITHUB_CI_TOKEN | docker login $REGISTRY -u $DOCKER_USERNAME --password-stdin;

sudo yarn;

sudo yarn build;

docker build --tag $LOCAL_IMAGE_NAME .;

docker tag $LOCAL_IMAGE_NAME $FULL_IMAGE_NAME;

docker push $FULL_IMAGE_NAME;