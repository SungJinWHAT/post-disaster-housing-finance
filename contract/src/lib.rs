#![no_std]

pub mod errors;
pub mod events;
pub mod storage;
pub mod types;

use soroban_sdk::{contract, contractimpl, token, Address, Env, String};

use crate::errors::ContractError;
use crate::events::{DepositEvent, MetricEvent, ReleaseEvent};
use crate::types::ImpactMetric;

#[contract]
pub struct ImpactVault;

#[contractimpl]
impl ImpactVault {
    pub fn __constructor(env: Env, admin: Address, asset: Address, project_name: String) {
        storage::set_admin(&env, &admin);
        storage::set_asset(&env, &asset);
        storage::set_project_name(&env, &project_name);
        storage::set_total_deposited(&env, 0i128);
    }

    pub fn deposit(env: Env, from: Address, amount: i128) -> Result<i128, ContractError> {
        if amount <= 0 {
            return Err(ContractError::InvalidAmount);
        }

        from.require_auth();

        let asset = storage::get_asset(&env);
        let token_client = token::Client::new(&env, &asset);
        token_client.transfer(&from, &env.current_contract_address(), &amount);

        let next_balance = storage::get_user_balance(&env, &from) + amount;
        let next_total = storage::get_total_deposited(&env) + amount;

        storage::set_user_balance(&env, &from, next_balance);
        storage::set_total_deposited(&env, next_total);
        DepositEvent { from, amount }.publish(&env);

        Ok(next_balance)
    }

    pub fn attest_metric(env: Env, subject: Address, label: String, score: u32) -> ImpactMetric {
        Self::require_admin(&env);

        let metric = ImpactMetric {
            label,
            score,
            ledger: env.ledger().sequence(),
        };

        storage::set_metric(&env, &subject, &metric);
        MetricEvent {
            subject,
            score: metric.score,
        }
        .publish(&env);

        metric
    }

    pub fn release(env: Env, to: Address, amount: i128) -> Result<i128, ContractError> {
        if amount <= 0 {
            return Err(ContractError::InvalidAmount);
        }

        Self::require_admin(&env);

        let total = storage::get_total_deposited(&env);
        if amount > total {
            return Err(ContractError::InsufficientPool);
        }

        let asset = storage::get_asset(&env);
        let token_client = token::Client::new(&env, &asset);
        token_client.transfer(&env.current_contract_address(), &to, &amount);

        let remaining = total - amount;
        storage::set_total_deposited(&env, remaining);
        ReleaseEvent { to, amount }.publish(&env);

        Ok(remaining)
    }

    pub fn balance(env: Env, owner: Address) -> i128 {
        storage::get_user_balance(&env, &owner)
    }

    pub fn total_deposited(env: Env) -> i128 {
        storage::get_total_deposited(&env)
    }

    pub fn metric(env: Env, subject: Address) -> Result<ImpactMetric, ContractError> {
        storage::get_metric(&env, &subject).ok_or(ContractError::MissingMetric)
    }

    pub fn project_name(env: Env) -> String {
        storage::get_project_name(&env)
    }

    fn require_admin(env: &Env) {
        let admin = storage::get_admin(env);
        admin.require_auth();
    }
}

#[cfg(test)]
mod test {
    use super::*;
    use soroban_sdk::{testutils::Address as _, Env, String};

    #[test]
    fn constructor_sets_project_name() {
        let env = Env::default();
        let admin = Address::generate(&env);
        let asset = Address::generate(&env);
        let name = String::from_str(&env, "ImpactVault");
        let contract_id = env.register(ImpactVault, (admin, asset, name.clone()));
        let client = ImpactVaultClient::new(&env, &contract_id);

        assert_eq!(client.project_name(), name);
        assert_eq!(client.total_deposited(), 0);
    }
}
