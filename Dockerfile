FROM node:18 AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

FROM nginx:1.25-alpine

# Copy the config files
ADD ./conf/ /etc/nginx/conf.d/

COPY --from=build /app/dist /usr/share/nginx/html
