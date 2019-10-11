# Use our base image
FROM docker.pkg.github.com/kashyaprahul94/portfolio/core:stable


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


# Install all related dependencies for Chromium & Puppeteer
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" | tee /etc/apt/sources.list.d/google.list \
  && apt-get update && apt-get install --no-install-recommends -yq google-chrome-unstable \
  && rm -rf /var/lib/apt/lists/* \
  && rm -rf /src/*.deb


# Install dumb-init for google chrome process & add necessary permissions
ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init


# Copy project manifest files
COPY build .npmrc ./


# Install all dependencies ( production only )
RUN yarn install --production --update-checksums && rm -f .npmrc


# Entrypoint
ENTRYPOINT [ "dumb-init", "--" ]


# Run 'npm start' to start the application
CMD [ "npm", "start" ]