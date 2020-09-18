#!/bin/bash -e

# Necessary env variables
ENV APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE=DontWarn
ENV DEBIAN_FRONTEND=noninteractive



echo "================= Installing basic packages ================"
apt-get update
apt-get install -yq \
apt-utils \
apt-transport-https \
ca-certificates \
bash \
sudo \
coreutils \
software-properties-common \
wget \
unzip \
curl \
openssh-client \
ftp \
gettext \
smbclient \
mercurial \
libgconf-2-4 \
gnupg \



export JQ_VERSION=1.5*
echo "================= Adding JQ $JQ_VERSION ========================="
apt-get install -y -q jq="$JQ_VERSION"


echo "================= Installing CLIs packages ======================"


export GIT_VERSION=1:2.*
echo "================= Installing Git $GIT_VERSION ===================="
add-apt-repository ppa:git-core/ppa -y
apt-get update -qq
apt-get install -y -q git="$GIT_VERSION"


export JFROG_VERSION=1.38.0
echo "================= Adding jfrog-cli $JFROG_VERSION  ================"
wget -nv https://api.bintray.com/content/jfrog/jfrog-cli-go/"$JFROG_VERSION"/jfrog-cli-linux-amd64/jfrog?bt_package=jfrog-cli-linux-amd64 -O jfrog
sudo chmod +x jfrog
mv jfrog /usr/bin/jfrog


export KUBECTL_VERSION=1.16.11
echo "================= Adding kubectl $KUBECTL_VERSION ================"
curl -sSLO https://storage.googleapis.com/kubernetes-release/release/v"$KUBECTL_VERSION"/bin/linux/amd64/kubectl
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl





export NODE_JS_VERSION=12.x
echo "================= Installing Node.JS $NODE_JS_VERSION ===================="
curl -sL https://deb.nodesource.com/setup_$NODE_JS_VERSION | bash -
apt-get install nodejs


export YARN_VERSION=1.22.5
echo "================= Installing Yarn $YARN_VERSION ===================="
npm i -g yarn@1.22.5 --force