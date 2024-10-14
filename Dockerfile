# Stage 1 - the build process
FROM node:16-alpine as build-deps
WORKDIR /usr/src/app

# Install bash
RUN apk add --no-cache bash

COPY package.json ./
RUN npm i
COPY . ./
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.20.1-alpine

# Install bash in the production environment as well
RUN apk add --no-cache bash

COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
