#!/usr/bin/env bash

BRANCH=$GITHUB_REF;

BRANCH=$(echo "$BRANCH" | tr / _ | tr -d \[:space:\] | tr -cs \[:alnum:\] -);
BRANCH=$(echo "${BRANCH/'refs-heads-'}");

if [ $BRANCH = "master" ]; then 
  yarn lerna publish  --exact --force-publish --message "Bump to - %s" --yes minor
else
  yarn lerna publish --exact --force-publish --canary --yes --preid "$BRANCH" minor
fi