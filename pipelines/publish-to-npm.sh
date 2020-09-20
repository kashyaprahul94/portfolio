#!/bin/bash -e

if [ $# -ne 1 ]; then
  echo "ERROR!!! need the branch name to generate release script"
  exit 1
fi

readonly BRANCH="$1"

main() {
  local yarn_publish_cmd="yarn publish --verbose --message 'Bump to - %s [skip ci]'"
  local release_version="--prerelease"

  if [ $BRANCH = "master" ]; then 
    release_version="--patch"
  fi;

  yarn_publish_cmd="$yarn_publish_cmd $release_version"

  printf "$yarn_publish_cmd"
}

main