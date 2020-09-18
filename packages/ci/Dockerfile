# Using slim image, less size
FROM node:12-slim


# Add metadata
LABEL author="kashyaprahul94@gmail.com"


# Necessary env variables
ENV APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE=DontWarn
ENV DEBIAN_FRONTEND=noninteractive


# Update registry && Install necessary common packages
RUN apt-get update && apt-get install -yq --no-install-recommends apt-utils apt-transport-https ca-certificates libgconf-2-4 wget curl gnupg


# Install `yarn`
RUN npm i -g yarn@1.22.5 --force
RUN echo "Yarn version ---> $(yarn -v)"