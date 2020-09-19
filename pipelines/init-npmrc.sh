#!/bin/bash -e

readonly NPM_REGISTRY="$1"
readonly NPM_TOKEN="$2"
readonly NPM_USER_NAME="$3"
readonly NPM_USER_EMAIL="$4"
readonly DESTINATION="$5"

main() {

  echo "NPM_REGISTRY ---> $NPM_REGISTRY"
  echo "NPM_TOKEN ---> ${#NPM_TOKEN}"
  echo "NPM_USER_NAME ---> $NPM_USER_NAME"
  echo "NPM_USER_EMAIL ---> $NPM_USER_EMAIL"
  echo "DESTINATION ---> $DESTINATION"

  echo "@kashyaprahul94:registry=https://$NPM_REGISTRY" >> $DESTINATION/.npmrc
  echo "//$NPM_REGISTRY:_password=$NPM_TOKEN" >> $DESTINATION/.npmrc
  echo "//$NPM_REGISTRY:username=$NPM_USER_NAME" >> $DESTINATION/.npmrc
  echo "//$NPM_REGISTRY:email=$NPM_USER_EMAIL" >> $DESTINATION/.npmrc
  echo "//$NPM_REGISTRY:always-auth=true" >> $DESTINATION/.npmrc
}

main