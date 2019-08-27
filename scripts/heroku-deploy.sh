#!/usr/bin/env bash
set -x
set -e

heroku container:login

heroku container:push web

heroku container:release web