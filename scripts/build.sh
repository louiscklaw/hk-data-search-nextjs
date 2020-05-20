#!/usr/bin/env bash

set -x

rm -rf src/functions/next
rm -rf src/functions/.next
rm -rf src/app/next
rm -rf src/app/.next

read -p 'press any key to continue'

set -ex

cd src/app
  yarn build
cd ../..

cp -r src/app/.next src/functions/.next

cp src/app/package.json src/app/package.json.last_known_good
cp src/app/package.json overlay/src/app/package.json.last_known_good

# done
