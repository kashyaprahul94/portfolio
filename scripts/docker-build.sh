#!/usr/bin/env bash
set -x
set -e

yarn install

yarn build

docker build --tag kashyaprahul94/portfolio .