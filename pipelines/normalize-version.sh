#!/bin/bash -e

if [ $# -ne 1 ]; then
  echo "ERROR!!! need an input string to normalize"
  exit 1
fi

readonly RELEASE="$1"

main() {

  readonly local NORMALIZED_RELEASE=$(echo "$RELEASE" | tr / _ | tr -d \[:space:\] | tr -cs \[:alnum:\] -);
  local RELEASE_TAG=$NORMALIZED_RELEASE; 
  
  if [ $NORMALIZED_RELEASE = "master" ]; then RELEASE_TAG="stable"; fi;

  printf "$RELEASE_TAG"
}

main
