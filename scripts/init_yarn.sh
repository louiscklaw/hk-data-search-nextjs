#!/usr/bin/env bash

set -ex

cd src/app
  rm -rf node_modules
  yarn install &


cd ../..

cd src/functions
  rm -rf node_modules
  yarn install &

cd ../..


wait

# done init_yarn
