# Use the official Node.js image as the base
FROM node:18

# Set the working directory
WORKDIR /app

# Copy project files into the container
COPY . .

# Install dependencies
RUN npm install

# Expose the port the app will run on
EXPOSE 50051

# Command to run the server
CMD ["node", "src/server.js"]
