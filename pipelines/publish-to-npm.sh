#!/usr/bin/env bash

BRANCH=$LOCAL_BRANCH;

echo "@$GITHUB_USERNAME:registry=https://$NPM_REGISTRY/" >> ./.npmrc;
echo "//$NPM_REGISTRY/:_authToken=$NPM_TOKEN" >> ./.npmrc;


# sudo git remote rm origin;
sudo remote set-url origin "https://$GITHUB_USERNAME:$GITHUB_TOKEN@github.com/$GITHUB_USERNAME/$GITHUB_REPOISTORY.git";
# sudo git fetch;   

sudo git config --global user.email "kashyaprahul94@gmail.com";
sudo git config --global user.name "Rahul Kashyap";


if [ $BRANCH = "master" ]; then 
  echo "I shall release patch version";
  sudo yarn lerna publish patch --exact --force-publish --yes --registry "https://$NPM_REGISTRY" --message "Bump to - %s [skip ci]";
else
  echo "I shall release prerelease version";
  sudo yarn lerna publish prerelease --preid next --exact --force-publish --yes --registry "https://$NPM_REGISTRY" --message "Bump to - %s [skip ci]";
fi;