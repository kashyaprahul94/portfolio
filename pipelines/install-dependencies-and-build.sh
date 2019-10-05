#!/usr/bin/env bash

echo -e "@kashyaprahul94:registry=https://$NPM_REGISTRY/\n//$NPM_REGISTRY/:_authToken=$NPM_TOKEN" > ./.npmrc;

sudo yarn;

sudo yarn build;