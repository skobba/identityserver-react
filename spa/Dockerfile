FROM node:alpine AS build

# RUN apk --no-cache add --virtual native-deps \
#   g++ gcc libgcc libstdc++ linux-headers make python && \
#   npm install --quiet node-gyp -g &&\
#   npm install --quiet && \
#   apk del native-deps

# https://github.com/nodejs/docker-node/issues/282
RUN apk add --no-cache --virtual .gyp \
  python \
  make \
  g++

RUN mkdir /app

RUN addgroup -g 1001 -S app && \
  adduser -u 1001 -S app -G app && \
  chown -R app:app /app && \
  chmod 770 /app

USER app:app
WORKDIR /app
COPY --chown=app:app package.json package-lock.json ./

# lists only top-level packages and add -g to list your global packages
RUN npm set progress=false && \
  npm config set depth 0 && \
  npm ci

# jest.config.js
COPY --chown=app:app .babelrc tsconfig.json ./
COPY --chown=app:app tsconfig.json ./

# COPY and rename env file
# COPY --chown=app:app default.env ./.env
COPY --chown=app:app webpack ./webpack
# COPY --chown=app:app test ./test
COPY --chown=app:app src ./src

# # RUN npm test
RUN npm run build:prod

# #################################

FROM nginx:alpine
RUN mkdir /app

RUN addgroup -g 1001 -S app && \
  adduser -u 1001 -S app -G app && \
  chown -R app:app /app && \
  chown -R app:app /var/cache/nginx && \
  touch /var/run/nginx.pid && \
  chown -R app:app /var/run/nginx.pid && \
  chmod 770 /app

USER app:app
WORKDIR /app

COPY --chown=app:app nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=app:app --from=build /app/dist ./
COPY --chown=app:app entrypoint.sh config.template.js ./

RUN dos2unix entrypoint.sh && chmod +x entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
EXPOSE 8000