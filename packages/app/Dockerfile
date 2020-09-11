# ------------------------------- #
# Build phase --------------------#
# ------------------------------- #

# Use our base image
FROM docker.pkg.github.com/kashyaprahul94/portfolio/core:stable AS builder

# Add metadata
LABEL author="kashyaprahul94@gmail.com"

# Mark /app as working directory
WORKDIR /app

# Copy everything
COPY . .

# Disable strict ssl check for yarn packages
RUN yarn config set "strict-ssl" false -g

# Install all dependencies
RUN yarn --update-checksums

# Build the application
RUN rm -rf build || true \
  && ./node_modules/.bin/next build src \
  && ./node_modules/.bin/tsc

# Copy built contents
RUN cp -a package.json *.lock next.config.js node_modules build \
  && cp -ap src/static/. build/src/static

# ------------------------------- #
# Runtime phase ----------------- #
# ------------------------------- #

FROM node:12-slim

# Mark /app as working directory
WORKDIR /app

# Install all related dependencies for Chromium & Puppeteer
RUN apt-get update \
    && apt-get install -yq wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -yq google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*


# Set env variables
ENV NODE_ENV "production"
ENV PORT 5091
ENV API_BASE_URL "/api"

# Expose the web server port
EXPOSE 5091

# Copy build contents from builder
COPY --from=builder /app/build .

# Run 'npm start' to start the application
CMD [ "npm", "start" ]