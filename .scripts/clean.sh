#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> Cleaning build artifacts..."
rm -rf dist/ .astro/ node_modules/

echo "==> Done"
