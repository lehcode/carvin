FROM node:14.15.3-buster

LABEL maintainer="Antony Repin <lehcode@gmail.com>"
LABEL description="Node.js with Express.js"

RUN apt-get update \
  && apt-get -y install --no-install-recommends --no-install-suggests \
    tzdata locales cpanminus \
  && ln -fs /usr/share/zoneinfo/${TIMEZONE_TZDATA} /etc/localtime \
  && echo ${TIMEZONE_TZDATA} > /etc/timezone \
  && dpkg-reconfigure -f noninteractive tzdata \
  && apt-get upgrade \
  && apt-get -y install --no-install-recommends --no-install-suggests \
    curl wget gnupg apt-transport-https inotify-tools  \
  && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee "/etc/apt/sources.list.d/yarn.list" \
  && npm config set scripts-prepend-node-path auto \
  && apt-get -y install yarn \
  && apt-get clean \
  && echo "Yarn bin: $(yarn global bin)" \
  && yarn global add @angular/cli \
  && mkdir -p /home/node/carvin/ui \
  && chown -R 1000:1000 /home/node/carvin \
  && env

WORKDIR /home/node/carvin/ui
USER 1000

COPY["entrypoint.sh", "docker-entrypoint.sh"]
