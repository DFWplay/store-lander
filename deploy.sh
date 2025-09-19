#!/usr/bin/env bash
set -euo pipefail
cd /home/dfwplay/apps/store-lander

echo "→ pulling code (if using git)"; git pull || true

echo "→ installing deps"
npm ci || npm install

echo "→ building (webpack)"
# ensure package.json uses: "build": "next build"
npm run build

echo "→ restarting pm2"
pm2 restart store-next --update-env

echo "→ saving pm2"
pm2 save

echo "✓ deploy complete"

