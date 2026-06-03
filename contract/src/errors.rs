use soroban_sdk::contracterror;

#[contracterror]
#[derive(Copy, Clone, Debug, Eq, PartialEq)]
#[repr(u32)]
pub enum ContractError {
    InvalidAmount = 1,
    InsufficientPool = 2,
    MissingMetric = 3,
}
