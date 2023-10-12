FROM debian:stable-slim

LABEL name="vala-website"

# Set default locale for the environment
ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

# Update package lists and install dependencies
RUN apt-get update && apt-get install -y wget git

# Install zola
RUN wget -q -O - \
    "https://github.com/getzola/zola/releases/download/v0.17.2/zola-v0.17.2-x86_64-unknown-linux-gnu.tar.gz" \
    | tar xzf - -C /usr/local/bin

# Set the working directory
WORKDIR /app

# Copy the application files to the container
COPY . /app

# Expose any necessary ports
EXPOSE 1111

# Define the command to run the application
CMD ["zola", "serve", "--interface"]