#!/usr/bin/env bash

TAG=$BRANCH;

TAG=$(echo "$TAG" | tr / _ | tr -d \[:space:\] | tr -cs \[:alnum:\] -);
TAG=$(echo "${TAG/'refs-heads-'}");

if [ $TAG = "master" ]; then 
  TAG="stable"; 
fi;

echo "Will be using TAG ---------> $TAG";

LOCAL_IMAGE_NAME=$DOCKER_USERNAME/$REPOSITORY_NAME-$DOCKER_IMAGE_NAME:$TAG;
REMOTE_IMAGE_NAME=$DOCKER_USERNAME/$REPOSITORY_NAME-$DOCKER_IMAGE_NAME:$TAG;

echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin;

docker tag $LOCAL_IMAGE_NAME $REMOTE_IMAGE_NAME;

docker push $REMOTE_IMAGE_NAME;