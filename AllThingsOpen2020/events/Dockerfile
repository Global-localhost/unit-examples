#Copyright Timo Stark 2020 F5 Inc.

FROM nginx/unit:1.20.0-minimal
RUN mkdir /var/apphome/ && groupadd -r appuser && useradd --no-log-init -r -g appuser appuser && \
    chown -R appuser:appuser /var/apphome/ && \
    # Tools for Demos only
    apt-get update && apt install --no-install-recommends --no-install-suggests -y net-tools procps && \
    apt-get install --no-install-recommends --no-install-suggests -y gnupg make python g++ && \
    curl -sL https://nginx.org/keys/nginx_signing.key | apt-key add - && \
    echo "deb https://packages.nginx.org/unit/debian/ buster unit" >> /etc/apt/sources.list.d/unit.list && \
    echo "deb-src https://packages.nginx.org/unit/debian/ buster unit" >> /etc/apt/sources.list.d/unit.list && \
    apt update && apt install -y unit-dev nodejs && \
    curl https://www.npmjs.com/install.sh | /bin/sh
# Copying Application Context
COPY api/ /var/apphome/api/
RUN chown -R appuser:appuser /var/apphome/
COPY .unit.conf.json /var/apphome/.unit.conf.json
COPY install.sh /docker-entrypoint.d/install.sh
CMD ["unitd", "--no-daemon", "--control", "unix:/var/run/control.unit.sock"]