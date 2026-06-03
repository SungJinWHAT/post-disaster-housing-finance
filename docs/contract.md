# Contract

The Soroban contract is an impact vault for Bayanihan Build.

Entrypoints:

- `deposit(from, amount)`
- `attest_metric(subject, label, score)`
- `release(to, amount)`
- `balance(owner)`
- `total_deposited()`
- `metric(subject)`
- `project_name()`

The contract uses a Stellar Asset Contract address supplied to the constructor for asset transfers.
