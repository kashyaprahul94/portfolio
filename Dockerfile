# Using slim image, less size
FROM node:10-slim


# Install all related dependencies for Chromium & Puppeteer
RUN apt update && apt install -qy --no-install-recommends wget \
  && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
  && apt update \
  && apt install -qy --no-install-recommends google-chrome-unstable \
  && rm -rf /var/lib/apt/lists/* \
  && apt-get purge --auto-remove -y curl \
  && rm -rf /src/*.deb

# Use dumb-init
ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init


# Add metadata
LABEL author="kashyaprahul94@gmail.com"


# Mark /app as working directory
WORKDIR /app


# Set env variables
ENV NODE_ENV "production"
ENV PORT 5091

ENV API_BASE_URL "/api"


# Expose the web server port
EXPOSE 5091


# Copy project manifest files
COPY build .


# Install all dependencies ( production only )
RUN yarn install --production


# Entrypoint
ENTRYPOINT ["dumb-init", "--"]


# Run 'npm start' to start the application
CMD [ "npm", "start" ]