#!/usr/bin/env bash

TAG=$CIRCLE_BRANCH;

if [ $TAG = "master" ]; then 
  TAG="latest"; 
fi;

TAG=$(echo "$TAG" | tr / _)

echo "Will be using TAG ---------> $TAG";

IMAGE_NAME="kashyaprahul94/portfolio"

HEROKU_REGISTRY="registry.heroku.com"
HEROKU_APP_NAME="kashyaprahul94-portfolio"
HEROKU_APP_TYPE="web"

echo $HEROKU_API_KEY | docker login --username=_ --password-stdin $HEROKU_REGISTRY

docker build --tag $IMAGE_NAME .
docker tag $IMAGE_NAME "$HEROKU_REGISTRY/$HEROKU_APP_NAME/$HEROKU_APP_TYPE:$TAG"

docker push "$HEROKU_REGISTRY/$HEROKU_APP_NAME/$HEROKU_APP_TYPE:$TAG"

if [ $TAG = "latest" ]; then 
  HEROKU_DOCKER_IMAGE_ID=$(docker inspect $HEROKU_REGISTRY/$HEROKU_APP_NAME/$HEROKU_APP_TYPE --format={{.Id}})
  HEROKU_PAYLOAD='{"updates":[{"type":"'"$HEROKU_APP_TYPE"'","docker_image":"'"$HEROKU_DOCKER_IMAGE_ID"'"}]}'

  curl -n -X PATCH https://api.heroku.com/apps/$HEROKU_APP_NAME/formation \
  -d "$HEROKU_PAYLOAD" \
  -H "Content-Type: application/json" \
  -H "Accept: application/vnd.heroku+json; version=3.docker-releases" \
  -H "Authorization: Bearer $HEROKU_API_KEY"
fi;