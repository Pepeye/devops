# specify a base image
FROM node:alpine

# specify a working dir
WORKDIR /app

# copy build files
# relative to build context
# COPY source destination
COPY ./ ./

# nstall application dependencies
RUN npm install

# specifiy default command
CMD ["npm", "start"]