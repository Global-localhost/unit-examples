#!/usr/bin/env bash
#Copyright Timo Stark 2020 F5 Inc.
set -ex
DOCKERIMAGE="nginx/nginxspace-planets"
DOCKERTAG="latest"

build_container() {
  docker build -t $DOCKERIMAGE:$DOCKERTAG .
}

containerize() {
  echo "Building Container Image"
  build_container
  echo "Pushing... "
  docker push $DOCKERIMAGE:$DOCKERTAG
}

case $1 in
"build")
  echo "Building ..."
  build_container
  ;;
"dev")
  echo "Building and Running ..."
  build_container
  docker run -it -p 8080:8080 $DOCKERIMAGE:$DOCKERTAG
  ;; 
"push")
  echo "Building and Pushing to Remote Registry ..."
  containerize
  ;;
esac
