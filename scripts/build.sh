#!/usr/bin/env bash

set -ex

rm -rf static_build

yarn build
yarn export
