#!/bin/bash -e

readonly NPM_REGISTRY="$1"
readonly NPM_AUTH="$2"
readonly NPM_USER_EMAIL="$3"
readonly DESTINATION="$4"

main() {

  echo "NPM_REGISTRY ---> $NPM_REGISTRY"
  echo "NPM_AUTH ---> ${#NPM_AUTH}"
  echo "NPM_USER_EMAIL ---> $NPM_USER_EMAIL"
  echo "DESTINATION ---> $DESTINATION"

  echo "@kashyaprahul94:registry=https://$NPM_REGISTRY" >> $DESTINATION/.npmrc
  echo "//$NPM_REGISTRY:_auth=$NPM_AUTH" >> $DESTINATION/.npmrc
  echo "//$NPM_REGISTRY:email=$NPM_USER_EMAIL" >> $DESTINATION/.npmrc
  echo "//$NPM_REGISTRY:always-auth=true" >> $DESTINATION/.npmrc
}

main