#!/usr/bin/env bash
set -ex
case $1 in
"dev")
  echo "Building local image and mounting codebase..."
  docker run -it --rm -v $(pwd)/../api:/data/ tippexs/nginxspace:1.19 /bin/bash -c "cd /data/ && npm update"
  chmod -R 777 ../wordpress ../api ../pythonapp ../app1 ../app2
  docker build --no-cache -t tippexs/nginxspace:latest .
  docker-compose up -d
  ;;
"no-build")
  docker-compose up -d
  ;;
"stop")
  echo "Stoping Services"
  docker-compose down
  docker rm --force dev_wordpress_1
  ;;
esac
