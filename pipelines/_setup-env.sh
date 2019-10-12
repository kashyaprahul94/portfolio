#!/usr/bin/env bash

# Branch
BRANCH=$GITHUB_HEAD_REF; if [ -z "$BRANCH" ]; then BRANCH=$GITHUB_REF; fi;
REMOTE_BRANCH=$BRANCH;

BRANCH=$(echo "$BRANCH" | tr / _ | tr -d \[:space:\] | tr -cs \[:alnum:\] -);
BRANCH=$(echo "${BRANCH/'refs-heads-'}");

ORIGIN_BRANCH=origin/$BRANCH;

# Tag
DOCKER_TAG=$BRANCH; if [ $DOCKER_TAG = "master" ]; then DOCKER_TAG="stable"; fi;


echo "Branch ---------> $BRANCH";
echo "Origin Branch ---------> $ORIGIN_BRANCH";
echo "Remote Branch ---------> $REMOTE_BRANCH";
echo "Docker TAG ---------> $DOCKER_TAG";

echo ::set-env name=BRANCH::$BRANCH;
echo ::set-env name=ORIGIN_BRANCH::$ORIGIN_BRANCH;
echo ::set-env name=REMOTE_BRANCH::$REMOTE_BRANCH;
echo ::set-env name=DOCKER_TAG::$DOCKER_TAG;