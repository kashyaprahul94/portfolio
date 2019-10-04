#!/usr/bin/env bash

BRANCH=$GITHUB_REF;

BRANCH=$(echo "$BRANCH" | tr / _ | tr -d \[:space:\] | tr -cs \[:alnum:\] -);
BRANCH=$(echo "${BRANCH/'refs-heads-'}");

echo "//npm.pkg.github.com/:_authToken=$GITHUB_CI_TOKEN" > ./.npmrc

if [ $BRANCH = "master" ]; then 
  yarn lerna publish --exact --force-publish --message "Bump to - %s" --yes minor --registry "https://npm.pkg.github.com" --contents build;
else
  yarn lerna publish --exact --force-publish --canary --yes --preid "$BRANCH" minor --registry "https://npm.pkg.github.com" --contents build;
fi