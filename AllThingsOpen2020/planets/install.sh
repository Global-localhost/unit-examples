#!/usr/bin/env bash
#Copyright Timo Stark 2020 F5 Inc.

echo "Installing API on NGINX UNIT ..."
cd /var/apphome/api

npm install && npm link unit-http

echo "Deploying Configuration"
curl -X PUT --unix-socket /var/run/control.unit.sock --data-binary "@/var/apphome/.unit.conf.json" http://localhost/config