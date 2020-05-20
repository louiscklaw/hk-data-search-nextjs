#!/usr/bin/env bash

set -ex

cd src/functions
  nodemon -w localtest.js localtest.js
