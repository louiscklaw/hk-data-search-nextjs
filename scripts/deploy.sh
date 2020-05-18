#!/usr/bin/env bash

set -ex

rm -rf src/app/.next
rm -rf src/functions/next

source scripts/build.sh
cp -r src/app/.next src/functions/next

cd src/functions
  npm run deploy
cd ../..

cp src/functions/package.json src/functions/package.json.last_known_good

cp src/functions/package.json overlay/src/functions/package.json.last_known_good
