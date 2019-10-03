# specify a base image
FROM node:alpine

# specify a working dir
WORKDIR /app

# install application dependencies
COPY package*.json ./
RUN npm install

# copy build files
# relative to build context
# COPY source destination
COPY ./ ./

# specifiy default command
CMD ["npm", "start"]