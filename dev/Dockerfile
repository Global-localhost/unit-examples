# ************* DEV DOCKER FILE *************
FROM nginx/unit:1.19.0-full
RUN mkdir /var/apphome/ && groupadd -r wordpress && useradd --no-log-init -r -g wordpress wordpress && \
    chown -R wordpress:wordpress /var/apphome/ && \
    apt-get update && apt-get install --no-install-recommends --no-install-suggests -y gnupg && \
    curl -sL https://nginx.org/keys/nginx_signing.key | apt-key add - && \
    echo "deb https://packages.nginx.org/unit/debian/ buster unit" >> /etc/apt/sources.list.d/unit.list && \
    echo "deb-src https://packages.nginx.org/unit/debian/ buster unit" >> /etc/apt/sources.list.d/unit.list && \
    apt update && apt install -y unit-dev npm php7.3-mysql php7.3-gd && \
    npm install -g --unsafe-perm unit-http -y && \
    curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && \
    cp wp-cli.phar /usr/local/bin/wpc

COPY php.ini /etc/php/7.3/cli/conf.d/php-unit.ini
COPY .unit.conf.json /docker-entrypoint.d/.unit.conf.json
CMD ["unitd", "--no-daemon", "--control", "unix:/var/run/control.unit.sock"]