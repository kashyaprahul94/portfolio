#!/usr/bin/env bash

TAG=$BRANCH;

TAG=$(echo "$TAG" | tr / _ | tr -d \[:space:\] | tr -cs \[:alnum:\] -);
TAG=$(echo "${TAG/'refs-heads-'}");

echo "@kashyaprahul94:registry=https://$NPM_REGISTRY/" >> ./.npmrc;
echo "//$NPM_REGISTRY/:_authToken=$NPM_TOKEN" >> ./.npmrc;


git remote rm origin;
git remote add origin "https://kashyaprahul94:$NPM_TOKEN@github.com/kashyaprahul94/portfolio.git";
git fetch;
      
git config --global user.email "kashyaprahul94@gmail.com";
git config --global user.name "Rahul Kashyap";


if [ $TAG = "master" ]; then 
  echo "I shall release patch version";
  sudo yarn lerna publish patch --exact --force-publish --yes --registry "https://$NPM_REGISTRY" --message "Bump to - %s";
else
  echo "I shall release prepatch version";
  sudo yarn lerna publish prepatch --preid next --exact --force-publish --yes --registry "https://$NPM_REGISTRY" --message "Bump to - %s";
fi;