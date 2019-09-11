# Using slim image, less size
FROM node:10-slim

# Install all related dependencies for Chromium & Puppeteer
RUN  apt-get update \
  # Install latest chrome dev package, which installs the necessary libs to
  # make the bundled version of Chromium that Puppeteer installs work.
  && apt-get install -y wget --no-install-recommends \
  && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
  && apt-get update \
  && apt-get install -y google-chrome-unstable --no-install-recommends \
  && rm -rf /var/lib/apt/lists/* \
  && wget --quiet https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh -O /usr/sbin/wait-for-it.sh \
  && chmod +x /usr/sbin/wait-for-it.sh


# Add metadata
LABEL author="kashyaprahul94@gmail.com"


# Mark /app as working directory
WORKDIR /app


# Set env variables
ENV NODE_ENV "production"
ENV PORT 4000

ENV API_BASE_URL "/api"


# Expose the web server port
EXPOSE 4000


# Copy project manifest files
COPY build .


# Install all dependencies ( production only )
RUN yarn install --production


# Run 'npm start' to start the application
CMD [ "npm", "start" ]