#!/usr/bin/env sh

set -e

cd build

git init

git add -A

git commit -m 'deploy'

git push -f git@github.com:facexl/facexl.github.io.git master

cd -