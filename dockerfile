# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY package.json package-lock.json ./

RUN npm install

COPY next.config.js ./next.config.js

COPY pages /app/pages

COPY public ./public

COPY styles /app/styles

# Install any needed packages
#RUN npm install

# Expose port 3000 for the app to run on
#EXPOSE 3000

# Define the command to run the app
CMD ["npm", "run", "dev"]

