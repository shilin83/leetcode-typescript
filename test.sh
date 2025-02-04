#!/usr/bin/env bash

set -e

if ! command -v bun &>/dev/null; then
  brew install bun
fi

if ! command -v genhtml &>/dev/null; then
  brew install lcov
fi

bun test --coverage

genhtml -o coverage coverage/lcov.info

open coverage/index.html
