#!/bin/bash

set -e

cover="coverage"

if ! command -v bun &>/dev/null; then
  brew install bun
fi

if [ ! -f bun.lock ]; then
  bun install
fi

if [ -n "$1" ]; then
  if [ "$1" = "$cover" ]; then
    if ! command -v genhtml &>/dev/null; then
      brew install lcov
    fi
    bun test --coverage
    genhtml -o "$cover" "$cover"/lcov.info
    open "$cover"/index.html
  else
    printf "Invalid argument: %s\nUsage: /bin/bash test.sh %s\n" "$1" "$cover"
  fi
else
  bun test
fi
