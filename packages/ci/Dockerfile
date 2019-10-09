# Using slim image
FROM node:10-slim


# Add metadata
LABEL author="kashyaprahul94@gmail.com"


# Necessary env variables
ENV APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE=DontWarn
ENV DEBIAN_FRONTEND=noninteractive


# Update registry && Install necessary common packages
RUN apt-get update && apt-get install -yq apt-utils apt-transport-https ca-certificates libgconf-2-4 wget curl gnupg2 software-properties-common


# Install Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list \
  && apt-get update && apt-get install -yq --no-install-recommends yarn

# Install Docker
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add - \
  && add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable" \
  && apt-get update && apt-get -yq install docker-ce