#!/usr/bin/env bash

set -ex

cd src
  mkdir -p app functions public

  cd app
    npm init -y
    npm install --save next react react-dom \
    @fortawesome/fontawesome-svg-core \
    @fortawesome/free-brands-svg-icons \
    @fortawesome/free-regular-svg-icons \
    @fortawesome/free-solid-svg-icons \
    @fortawesome/react-fontawesome \
    isomorphic-unfetch \
    rbx \
    &
  cd ..

  cd functions
    npm init -y
    npm install --save next react react-dom firebase-admin firebase-tools firebase-functions \
    @fortawesome/fontawesome-svg-core \
    @fortawesome/free-brands-svg-icons \
    @fortawesome/free-regular-svg-icons \
    @fortawesome/free-solid-svg-icons \
    @fortawesome/react-fontawesome \
    isomorphic-unfetch \
    rbx \
    &
  cd ..
cd ..

wait

# done init_yarn
