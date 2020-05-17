#!/usr/bin/env bash

set -ex

mkdir src
cd src
  mkdir app functions public

  cd app
    npm init -y
    yarn add next react react-dom \
    @fortawesome/fontawesome-svg-core \
    @fortawesome/free-solid-svg-icons \
    @fortawesome/react-fontawesome \
    isomorphic-unfetch \
    rbx \
    &
  cd ..

  cd functions
    npm init -y
    yarn add next react react-dom firebase-admin firebase-tools firebase-functions \
    @fortawesome/fontawesome-svg-core \
    @fortawesome/free-solid-svg-icons \
    @fortawesome/react-fontawesome \
    isomorphic-unfetch \
    rbx \
    &
  cd ..
cd ..

wait

mkdir -p pages
touch pages/.gitkeep

cp overlay/.firebaserc .firebaserc
cp overlay/firebase.json firebase.json
cp overlay/.gitignore .gitignore

cp overlay/src/functions/index.js src/functions/index.js

cp -r overlay/src/app/ src/
