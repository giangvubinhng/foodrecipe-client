FROM node:19-alpine

WORKDIR /app

COPY package.json yarn.lock .

RUN yarn install --only=production

COPY . ./

RUN yarn build

RUN yarn global add serve

EXPOSE 3000

CMD ["server", "-s", "build"]
