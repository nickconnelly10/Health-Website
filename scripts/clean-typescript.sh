#!/bin/bash
set -e

# Go to script directory (health-site)
cd "$(dirname "$0")/.."

# Remove node_modules and cache
rm -rf node_modules .eslintcache .tsbuildinfo

# Reinstall dependencies
npm install

# Run TypeScript strict check
npx tsc --noEmit

# Run ESLint
npm run lint

echo "\nCleanup and checks complete. If errors remain, open this folder directly in your editor and restart the TypeScript server." 