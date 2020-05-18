#!/usr/bin/env bash

set -ex

rm -rf src/functions/next

cd src/app
  yarn build
cd ../..

cp src/app/package.json src/app/package.json.last_known_good
cp src/app/package.json overlay/src/app/package.json.last_known_good

cd src/app
  yarn start
cd ../..

# done
