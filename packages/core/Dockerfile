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

# Install all related dependencies for Chromium & Puppeteer
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" | tee /etc/apt/sources.list.d/google.list \
  && apt-get update && apt-get install --no-install-recommends -yq google-chrome-unstable \
  && rm -rf /var/lib/apt/lists/* \
  && rm -rf /src/*.deb

# Install dumb-init for google chrome process & add necessary permissions
ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init