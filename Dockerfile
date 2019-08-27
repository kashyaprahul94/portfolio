# Using slim image, less size
FROM node:10-slim


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