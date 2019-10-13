#!/usr/bin/env bash

TAG=$DOCKER_TAG;

LOCAL_IMAGE_NAME=$DOCKER_USERNAME/$REPOSITORY_NAME-$DOCKER_IMAGE_NAME:$TAG;

echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin $DOCKER_REGISTRY;

pushd packages/core;

docker build --tag $LOCAL_IMAGE_NAME .;

popd;