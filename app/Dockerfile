# STAGE: Builder
# select a base image
FROM node:alpine as builder

# set working director
WORKDIR /app
# install dependencies
COPY package*.json .
RUN npm install
# copy over source files
COPY . .

RUN npm run build

# STAGE: Run
FROM nginx
# copy files to nginx standard www share folder
COPY --from=builder /app/build /usr/share/nginx/html
