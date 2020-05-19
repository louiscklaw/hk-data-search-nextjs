#!/usr/bin/env bash

set -ex

mkdir src
scripts/init_npm.sh

wait

mkdir -p pages
touch pages/.gitkeep

cp overlay/.firebaserc .firebaserc
cp overlay/firebase.json firebase.json
cp overlay/.gitignore .gitignore

cp overlay/src/functions/index.js src/functions/index.js

cp -r overlay/src/app/ src/
