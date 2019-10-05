#!/usr/bin/env bash

cd packages/app;

echo -e "@kashyaprahul94:registry=https://$NPM_REGISTRY/\n//$NPM_REGISTRY/:_authToken=$NPM_TOKEN" > ./.npmrc

sudo yarn;