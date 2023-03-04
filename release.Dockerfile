FROM node:19-alpine as build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --only=production --frozen-lockfile

COPY . ./

RUN yarn build


FROM nginx:1.23.1-alpine

EXPOSE 80

COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
