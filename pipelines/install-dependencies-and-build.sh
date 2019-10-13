#!/usr/bin/env bash

echo "@kashyaprahul94:registry=https://$NPM_REGISTRY/" >> ./.npmrc;
echo "//$NPM_REGISTRY/:_authToken=$NPM_TOKEN" >> ./.npmrc;

cp .npmrc packages/app/.npmrc
cp yarn.lock packages/app/yarn.lock

cp .npmrc packages/style/.npmrc
cp yarn.lock packages/style/yarn.lock

cp .npmrc packages/storybook/.npmrc
cp yarn.lock packages/storybook/yarn.lock

sudo yarn;

sudo yarn build;