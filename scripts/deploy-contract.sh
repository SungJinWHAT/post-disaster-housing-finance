#!/usr/bin/env bash
set -euo pipefail

cd contract && stellar contract deploy --wasm target/wasm32-unknown-unknown/release/*.wasm --source ${SOURCE:-alice} --network ${NETWORK:-testnet}
