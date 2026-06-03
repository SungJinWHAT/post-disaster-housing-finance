use soroban_sdk::{Address, Env, String};

use crate::types::{DataKey, ImpactMetric};

const MIN_TTL: u32 = 100;
const EXTEND_TO: u32 = 518400;

pub fn set_admin(env: &Env, admin: &Address) {
    env.storage().instance().set(&DataKey::Admin, admin);
}

pub fn get_admin(env: &Env) -> Address {
    env.storage().instance().get(&DataKey::Admin).unwrap()
}

pub fn set_asset(env: &Env, asset: &Address) {
    env.storage().instance().set(&DataKey::Asset, asset);
}

pub fn get_asset(env: &Env) -> Address {
    env.storage().instance().get(&DataKey::Asset).unwrap()
}

pub fn set_project_name(env: &Env, project_name: &String) {
    env.storage().instance().set(&DataKey::ProjectName, project_name);
}

pub fn get_project_name(env: &Env) -> String {
    env.storage().instance().get(&DataKey::ProjectName).unwrap()
}

pub fn set_total_deposited(env: &Env, amount: i128) {
    env.storage().instance().set(&DataKey::TotalDeposited, &amount);
    env.storage().instance().extend_ttl(MIN_TTL, EXTEND_TO);
}

pub fn get_total_deposited(env: &Env) -> i128 {
    env.storage()
        .instance()
        .get(&DataKey::TotalDeposited)
        .unwrap_or(0i128)
}

pub fn set_user_balance(env: &Env, owner: &Address, amount: i128) {
    let key = DataKey::UserBalance(owner.clone());
    env.storage().persistent().set(&key, &amount);
    env.storage().persistent().extend_ttl(&key, MIN_TTL, EXTEND_TO);
}

pub fn get_user_balance(env: &Env, owner: &Address) -> i128 {
    env.storage()
        .persistent()
        .get(&DataKey::UserBalance(owner.clone()))
        .unwrap_or(0i128)
}

pub fn set_metric(env: &Env, subject: &Address, metric: &ImpactMetric) {
    let key = DataKey::Metric(subject.clone());
    env.storage().persistent().set(&key, metric);
    env.storage().persistent().extend_ttl(&key, MIN_TTL, EXTEND_TO);
}

pub fn get_metric(env: &Env, subject: &Address) -> Option<ImpactMetric> {
    env.storage().persistent().get(&DataKey::Metric(subject.clone()))
}
