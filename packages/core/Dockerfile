# Using slim image, less size
FROM node:10-slim


# Add metadata
LABEL author="kashyaprahul94@gmail.com"


# Necessary env variables
ENV APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE=DontWarn
ENV DEBIAN_FRONTEND=noninteractive


# Update registry && Install necessary common packages
RUN apt-get update && apt-get install -yq --no-install-recommends apt-utils apt-transport-https ca-certificates libgconf-2-4 wget


# Install `yarn`
RUN wget -q -O - https://dl.yarnpkg.com/debian/pubkey.gpg |  apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
  && apt-get update && apt-get install --no-install-recommends -yq yarn