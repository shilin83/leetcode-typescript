#!/usr/bin/env sh

set -e

if ! command -v bun; then
  brew install oven-sh/bun/bun
fi

if ! command -v genhtml; then
  brew install lcov
fi

bun test --coverage --coverage-reporter=lcov

genhtml -o coverage/html coverage/lcov.info

if [ -d coverage ]; then
  open coverage/html/index.html
fi
