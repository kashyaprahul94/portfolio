# Using Ubuntu 18 as base image
FROM ubuntu:18.04


# Add metadata
LABEL author="kashyaprahul94@gmail.com"


# Add everything to working directory
ADD . /ci


# Run the installer script
RUN chmod +x /ci/install.sh
RUN /ci/install.sh && rm -rf /tmp && mkdir /tmp && chmod 1777 /tmp