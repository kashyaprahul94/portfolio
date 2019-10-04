#!/usr/bin/env bash

TAG=$GITHUB_REF;

TAG=$(echo "$TAG" | tr / _ | tr -d \[:space:\] | tr -cs \[:alnum:\] -);
TAG=$(echo "${TAG/'refs-heads-'}");

if [ $TAG = "master" ]; then 
  TAG="stable"; 
fi;

echo "Will be using TAG ---------> $TAG";

HEROKU_APP_NAME=kashyaprahul94-portfolio;
HEROKU_APP_TYPE=web;

LOCAL_IMAGE_NAME=$DOCKER_USERNAME/$REPOSITORY_NAME-$DOCKER_IMAGE_NAME:$TAG;
REMOTE_IMAGE_NAME=$DOCKER_REGISTRY/$HEROKU_APP_NAME/$HEROKU_APP_TYPE:$TAG;

echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin $DOCKER_REGISTRY;

docker tag $LOCAL_IMAGE_NAME $REMOTE_IMAGE_NAME;

docker push $REMOTE_IMAGE_NAME;


# Deploy to Heroku

if [ $TAG = "stable" ]; then 

  DOCKER_IMAGE_ID=$(docker inspect $REMOTE_IMAGE_NAME --format={{.Id}});
  PAYLOAD='{"updates":[{"type":"'"$HEROKU_APP_TYPE"'","docker_image":"'"$DOCKER_IMAGE_ID"'"}]}';

  curl -n -X PATCH https://api.heroku.com/apps/$HEROKU_APP_NAME/formation \
  -d "$PAYLOAD" \
  -H "Content-Type: application/json" \
  -H "Accept: application/vnd.heroku+json; version=3.docker-releases" \
  -H "Authorization: Bearer $HEROKU_API_KEY";

fi;