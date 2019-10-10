#!/usr/bin/env bash

BRANCH=$GITHUB_REF;

BRANCH=$(echo "$BRANCH" | tr / _ | tr -d \[:space:\] | tr -cs \[:alnum:\] -);
BRANCH=$(echo "${BRANCH/'refs-heads-'}");

echo "@kashyaprahul94:registry=https://$NPM_REGISTRY/" >> ./.npmrc;
echo "//$NPM_REGISTRY/:_authToken=$NPM_TOKEN" >> ./.npmrc;

if [ $BRANCH = "master" ]; then 
  echo "I shall release patch version";
  yarn lerna publish --exact --force-publish --message "Bump to - %s" --yes --registry "https://$NPM_REGISTRY";
else
  echo "I will release canary version";
  yarn lerna publish --exact --force-publish --canary --yes --preid "$BRANCH" --registry "https://$NPM_REGISTRY";
fi