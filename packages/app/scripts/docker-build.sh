#!/usr/bin/env bash

yarn install

yarn build

docker build --tag kashyaprahul94/portfolio/app .