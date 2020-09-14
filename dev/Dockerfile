# ************* DEVELOPMENT DOCKER FILE *************
#      .-') _                         .-') _) (`-.                             .-') _         .-') _
#     ( OO ) )                       ( OO ) )( OO ).                          ( OO ) )       (  OO) )
# ,--./ ,--,'  ,----.     ,-.-') ,--./ ,--,'(_/.  \_)-.       ,--. ,--.   ,--./ ,--,' ,-.-') /     '._
# |   \ |  |\ '  .-./-')  |  |OO)|   \ |  |\ \  `.'  /        |  | |  |   |   \ |  |\ |  |OO)|'--...__)
# |    \|  | )|  |_( O- ) |  |  \|    \|  | ) \     /\        |  | | .-') |    \|  | )|  |  \'--.  .--'
# |  .     |/ |  | .--, \ |  |(_/|  .     |/   \   \ |        |  |_|( OO )|  .     |/ |  |(_/   |  |
# |  |\    | (|  | '. (_/,|  |_.'|  |\    |   .'    \_)       |  | | `-' /|  |\    | ,|  |_.'   |  |
# |  | \   |  |  '--'  |(_|  |   |  | \   |  /  .'.  \       ('  '-'(_.-' |  | \   |(_|  |      |  |
# `--'  `--'   `------'   `--'   `--'  `--' '--'   '--'        `-----'    `--'  `--'  `--'      `--'
#
FROM nginx/unit:1.19.0-full
# Preparing directories and libs
RUN mkdir /var/apphome/ && groupadd -r wordpress && useradd --no-log-init -r -g wordpress wordpress && \
    chown -R wordpress:wordpress /var/apphome/ && \
    apt-get update && apt-get install --no-install-recommends --no-install-suggests -y gnupg && \
    curl -sL https://nginx.org/keys/nginx_signing.key | apt-key add - && \
    echo "deb https://packages.nginx.org/unit/debian/ buster unit" >> /etc/apt/sources.list.d/unit.list && \
    echo "deb-src https://packages.nginx.org/unit/debian/ buster unit" >> /etc/apt/sources.list.d/unit.list && \
    apt update && apt install -y unit-dev npm php7.3-mysql php7.3-gd python3 python3-pip vim && \
    npm install -g --unsafe-perm unit-http -y && \
    curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && \
    python3.7 -m pip install Django && \
    cp wp-cli.phar /usr/local/bin/wpc && \
    ln -s /dev/stdout /var/log/access.log

COPY php.ini /etc/php/7.3/cli/conf.d/php-unit.ini
COPY .unit.conf.json /docker-entrypoint.d/.unit.conf.json
COPY bundle.pem /docker-entrypoint.d/
CMD ["unitd", "--no-daemon", "--control", "unix:/var/run/control.unit.sock"]