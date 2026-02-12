#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

# Install deps if needed
[ -d node_modules ] || npm install

exec npx astro dev --host
