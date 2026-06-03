#!/usr/bin/env bash
set -euo pipefail

stellar contract bindings typescript --contract-id ${CONTRACT_ID:?CONTRACT_ID required} --network ${NETWORK:-testnet} --output-dir frontend/src/generated
