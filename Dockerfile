FROM alpine:latest

# Install zola
RUN apk add zola

# Set the working directory
WORKDIR /app

# Copy the application files to the container
COPY . /app

# Expose 1111 to the host's 1111 port
EXPOSE 1111 

# Define the command to run the application
CMD ["zola", "serve", "--interface", "0.0.0.0", "--base-url", "/"]