#!/usr/bin/env bash

# Branch
BRANCH=$GITHUB_HEAD_REF; if [ -z "$BRANCH" ]; then BRANCH=$GITHUB_REF; fi;

REMOTE_BRANCH=$BRANCH;
ORIGIN_BRANCH=origin/$REMOTE_BRANCH;
LOCAL_BRANCH=$(echo "${BRANCH/'refs/heads/'}");

ESCAPED_BRANCH=$(echo "$LOCAL_BRANCH" | tr / _ | tr -d \[:space:\] | tr -cs \[:alnum:\] -);

# Tag
DOCKER_TAG=$ESCAPED_BRANCH; if [ $DOCKER_TAG = "master" ]; then DOCKER_TAG="stable"; fi;


echo "Remote Branch ---------> $REMOTE_BRANCH";
echo "Origin Branch ---------> $ORIGIN_BRANCH";
echo "Local Branch ---------> $LOCAL_BRANCH";
echo "Escaped Branch ---------> $ESCAPED_BRANCH";

echo "Docker TAG ---------> $DOCKER_TAG";



echo ::set-env name=REMOTE_BRANCH::$REMOTE_BRANCH;
echo ::set-env name=ORIGIN_BRANCH::$ORIGIN_BRANCH;
echo ::set-env name=LOCAL_BRANCH::$LOCAL_BRANCH;
echo ::set-env name=ESCAPED_BRANCH::$ESCAPED_BRANCH;

echo ::set-env name=DOCKER_TAG::$DOCKER_TAG;