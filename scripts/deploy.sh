#!/usr/bin/env bash

set -ex

rm -rf src/functions/next

source scripts/build.sh

cp -r src/app/.next src/functions/next

firebase deploy

cp src/functions/package.json src/functions/package.json.last_known_good

cp src/functions/package.json overlay/src/functions/package.json.last_known_good
