# Using Ubuntu 18 as base image
FROM ubuntu:18.04


# Add metadata
LABEL author="kashyaprahul94@gmail.com"


# Necessary env variables
ENV APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE=DontWarn
ENV DEBIAN_FRONTEND=noninteractive


# Make default shell as `bash` instead of `sh`
SHELL ["/bin/bash", "-c"]


# Install necessary packages
RUN apt-get update && apt-get upgrade -yq && apt-get install -yq \
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
  build-essential \
  libssl-dev



# Install JQ
ARG JQ_VERSION=1.5*
RUN echo "# -------------------------------------------- #" \
  && echo "# Installing JQ $JQ_VERSION ------------------ #" \
  && echo "# -------------------------------------------- #" \
  && apt-get install -yq jq="$JQ_VERSION" \
  && jq --version


# Install Git CLI
ARG GIT_VERSION=1:2.*
RUN echo "# -------------------------------------------- #" \
  && echo "# Installing Git $GIT_VERSION ---------------- #" \
  && echo "# -------------------------------------------- #" \
  && apt-get install -yq git="$GIT_VERSION" \
  && git --version


# Install kubectl CLI
ARG KUBECTL_VERSION=1.16.11
RUN echo "# -------------------------------------------- #" \
  && echo "# Installing kubectl $KUBECTL_VERSION -------- #" \
  && echo "# -------------------------------------------- #" \
  && curl -sSLO "https://storage.googleapis.com/kubernetes-release/release/v$KUBECTL_VERSION/bin/linux/amd64/kubectl" \
  && chmod +x ./kubectl \
  && mv ./kubectl /usr/local/bin/kubectl


# Install JFrog CLI
ARG JFROG_VERSION=1.38.0
RUN echo "# -------------------------------------------- #" \
  && echo "# Installing jfrog-cli $JFROG_VERSION -------- #" \
  && echo "# -------------------------------------------- #" \
  && wget -nv "https://api.bintray.com/content/jfrog/jfrog-cli-go/$JFROG_VERSION/jfrog-cli-linux-amd64/jfrog?bt_package=jfrog-cli-linux-amd64" -O jfrog \
  && chmod +x jfrog \
  && mv jfrog /usr/bin/jfrog \
  && jfrog --version


# Install nodejs
ARG NODE_JS_VERSION=12.x
RUN echo "# -------------------------------------------- #" \
  && echo "# Installing nodejs $NODE_JS_VERSION --------- #" \
  && echo "# -------------------------------------------- #" \
  && curl -sL https://deb.nodesource.com/setup_12.x -o install_nodejs.sh \
  && chmod u+x install_nodejs.sh \
  && bash install_nodejs.sh \
  && apt-get install -yq nodejs \
  && node --version \
  && npm --version


# Install yarn
ARG YARN_VERSION=1.22.5
RUN echo "# -------------------------------------------- #" \
  && echo "# Installing yarn $YARN_VERSION -------------- #" \
  && echo "# -------------------------------------------- #" \
  && npm i -g yarn@1.22.5 --force \
  && yarn --version


# Install Docker
RUN echo "# -------------------------------------------- #" \
  && echo "# Installing Docker -------------- #" \
  && echo "# -------------------------------------------- #" \
  && apt-get install -yq docker.io \
  && docker --version