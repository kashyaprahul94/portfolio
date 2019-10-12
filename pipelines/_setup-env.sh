#!/usr/bin/env bash

# Branch
BRANCH=$GITHUB_HEAD_REF; if [ -z "$BRANCH" ]; then BRANCH=$GITHUB_REF; fi;
ORIGIN_BRANCH=$BRANCH;

BRANCH=$(echo "$BRANCH" | tr / _ | tr -d \[:space:\] | tr -cs \[:alnum:\] -);
BRANCH=$(echo "${BRANCH/'refs-heads-'}");

# Tag
DOCKER_TAG=$BRANCH; if [ $DOCKER_TAG = "master" ]; then DOCKER_TAG="stable"; fi;


echo "Origin Branch ---------> $ORIGIN_BRANCH";
echo "Branch ---------> $BRANCH";
echo "Docker TAG ---------> $DOCKER_TAG";

echo ::set-env name=ORIGIN_BRANCH::$ORIGIN_BRANCH;
echo ::set-env name=BRANCH::$BRANCH;
echo ::set-env name=DOCKER_TAG::$DOCKER_TAG;