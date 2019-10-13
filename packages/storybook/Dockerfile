# Use our base image
FROM docker.pkg.github.com/kashyaprahul94/portfolio/core:stable


# Add metadata
LABEL author="kashyaprahul94@gmail.com"


# Mark /app as working directory
WORKDIR /app


# Set env variables
ENV NODE_ENV "production"
ENV PORT 7000
ENV PUBLIC_DIR "public"


# Expose the web server port
EXPOSE 7000


# Copy project manifest files
COPY build .npmrc ./


# Install all dependencies ( production only )
RUN yarn install --production --update-checksums && rm -f .npmrc


# Run 'npm start' to start the application
CMD [ "npm", "start" ]