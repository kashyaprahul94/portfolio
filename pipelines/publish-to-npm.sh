#!/usr/bin/env bash

BRANCH=$GITHUB_REF;

BRANCH=$(echo "$BRANCH" | tr / _ | tr -d \[:space:\] | tr -cs \[:alnum:\] -);
BRANCH=$(echo "${BRANCH/'refs-heads-'}");

echo "@kashyaprahul94:registry=https://$NPM_REGISTRY/" >> ./.npmrc;
echo "//$NPM_REGISTRY/:_authToken=$NPM_TOKEN" >> ./.npmrc;

if [ $BRANCH = "master" ]; then 
  echo "I shall release patch version";
  yarn lerna publish patch --exact --force-publish --yes --registry "https://$NPM_REGISTRY" --message "Bump to - %s";
else
  echo "I will release prepatch version";
  yarn lerna publish prepatch --exact --force-publish --yes --registry "https://$NPM_REGISTRY" --message "Bump to - %s";
fi