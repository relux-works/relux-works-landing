#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> Installing dependencies..."
npm ci

echo "==> Building..."
npx astro build

echo "==> Build output: dist/"
du -sh dist/
