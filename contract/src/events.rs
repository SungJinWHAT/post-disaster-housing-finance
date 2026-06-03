use soroban_sdk::{contractevent, Address};

#[contractevent(topics = ["deposit"])]
pub struct DepositEvent {
    pub from: Address,
    pub amount: i128,
}

#[contractevent(topics = ["metric"])]
pub struct MetricEvent {
    pub subject: Address,
    pub score: u32,
}

#[contractevent(topics = ["release"])]
pub struct ReleaseEvent {
    pub to: Address,
    pub amount: i128,
}
