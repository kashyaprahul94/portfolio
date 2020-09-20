#!/bin/bash -e

if [ $# -ne 1 ]; then
  echo "ERROR!!! need the branch name to work"
  exit 1
fi

readonly BRANCH="$1"

main() {
  if [ $BRANCH = "master" ]; then 
    echo "I shall release patch version";
    yarn publish --verbose --patch --message "Bump to - %s [skip ci]";
  else
    echo "I shall release prerelease version";
    yarn publish --verbose --prerelease --message "Bump to - %s [skip ci]";
  fi;
}

main