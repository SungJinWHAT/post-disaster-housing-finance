use soroban_sdk::{contracttype, Address, String};

#[contracttype]
#[derive(Clone)]
pub enum DataKey {
    Admin,
    Asset,
    ProjectName,
    TotalDeposited,
    UserBalance(Address),
    Metric(Address),
}

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct ImpactMetric {
    pub label: String,
    pub score: u32,
    pub ledger: u32,
}
