#!/usr/bin/env bash

set -ex

scripts/clear_ws.sh

read -p 'any key'

scripts/make_dir.sh
# scripts/install_npm.sh

scripts/import.sh

# scripts/deploy.sh

# done
