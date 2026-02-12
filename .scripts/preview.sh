#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

# Build first if no dist
[ -d dist ] || .scripts/build.sh

exec npx astro preview --host
