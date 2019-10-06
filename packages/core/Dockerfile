# Using slim image, less size
FROM node:10-slim


# Add metadata
LABEL author="kashyaprahul94@gmail.com"


# Use dumb-init
ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64 /usr/local/bin/dumb-init

# Add permission to run dumb-init process
RUN chmod +x /usr/local/bin/dumb-init


# Install all related dependencies for Chromium & Puppeteer
RUN apt update && apt install -qy --no-install-recommends wget \
  && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
  && apt update \
  && apt install -qy --no-install-recommends google-chrome-unstable \
  && rm -rf /var/lib/apt/lists/* \
  && apt-get purge --auto-remove -y curl \
  && rm -rf /src/*.deb

# Install `yarn`
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list \
  && apt update && apt install -y yarn