#!/usr/bin/env bash
set -e
set -x

BRANCH=$GITHUB_REF;

BRANCH=$(echo "$BRANCH" | tr / _ | tr -d \[:space:\] | tr -cs \[:alnum:\] -);
BRANCH=$(echo "${BRANCH/'refs_heads_'}");

if [ $BRANCH = "master" ]; then 

  TAG=stable
  IMAGE_NAME=$DOCKER_USERNAME/$REPOSITORY_NAME/$DOCKER_IMAGE_NAME;
  DOCKER_IMAGE=$DOCKER_REGISTRY_GITHUB/$IMAGE_NAME:$TAG;

  HEROKU_APP_NAME=kashyaprahul94-portfolio;
  HEROKU_APP_TYPE=web;

  echo $GITHUB_CI_TOKEN | docker login $REGISTRY -u $DOCKER_USERNAME --password-stdin;

  docker pull $DOCKER_IMAGE;

  DOCKER_IMAGE_ID=$(docker inspect $DOCKER_IMAGE --format={{.Id}});
  PAYLOAD='{"updates":[{"type":"'"$HEROKU_APP_TYPE"'","docker_image":"'"$DOCKER_IMAGE_ID"'"}]}';

  curl -n -X PATCH https://api.heroku.com/apps/$HEROKU_APP_NAME/formation \
  -d "$PAYLOAD" \
  -H "Content-Type: application/json" \
  -H "Accept: application/vnd.heroku+json; version=3.docker-releases" \
  -H "Authorization: Bearer $HEROKU_API_KEY";

fi;