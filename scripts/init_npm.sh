#!/usr/bin/env bash

set -ex

cd src
  mkdir -p app functions public

  cd app
    npm init -y
    npm install --save next react react-dom
    npm install --save firebase-admin firebase-tools firebase-functions
  cd ..

  cd functions
    npm init -y
    npm install --save next react react-dom firebase-admin firebase-tools firebase-functions
    rbx \
    &
  cd ..
cd ..

wait

# done init_yarn
