export const AVALANCHE_MAINNET_CONFIG = {
    chain: {
        id: 43114,
        name: "Avalanche",
        networkName: "avalanche-c",
        rpcUrl: "https://rpc-endpoints.superfluid.dev/avalanche-c",
        blockExplorerUrl: "https://snowtrace.io",
    },
    superToken: {
        symbol: "USDCx",
        address: "0x288398f314d472b82c44855f3f6ff20b633c2a97",
        decimals: 18,
    },
    underlyingToken: {
        symbol: "USDC",
        address: "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e",
        decimals: 6,
        supportsEIP3009: true,
    },
    superfluid: {
        cfaV1Forwarder: "0xcfA132E353cB4E398080B9700609bb008eceB125",
        cfa: "0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58",
        host: "0x60377C7016E4cdB03C87EF474896C11cB560752C",
    },
    subgraphUrl: "https://subgraph-endpoints.superfluid.dev/base-mainnet/protocol-v1",
    superfluidDashboardNetwork: "base",
    clearMacro: {
        forwarder: "0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e",
        createFlowMacro: "0xe703d8BAF38A7d8F72f4bC96A28f8ceC9BE2C707",
    },
};
export const AVALANCHE_FUJI_CONFIG = {
    chain: {
        id: 431142,
        name: "Avalanche Fuji",
        networkName: "avalanche-fuji",
        rpcUrl: "https://rpc-endpoints.superfluid.dev/avalanche-fuji",
        blockExplorerUrl: "https://testnet.snowtrace.io",
    },
    superToken: {
        symbol: "fUSDCx",
        address: "0x00d05eed85bad962ba5237dd4afff12004455a8a",
        decimals: 18,
    },
    underlyingToken: {
        symbol: "fUSDC",
        address: "0x37a024d7f9ea1c7ebb658f5a14caeddd30f212b7",
        decimals: 18,
        supportsEIP3009: false,
    },
    superfluid: {
        cfaV1Forwarder: "0xcfA132E353cB4E398080B9700609bb008eceB125",
        cfa: "0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A",
        host: "0x85Fe79b998509B77BF10A8BD4001D58475D29386",
    },
    subgraphUrl: "https://subgraph-endpoints.superfluid.dev/base-sepolia/protocol-v1",
    superfluidDashboardNetwork: "base-sepolia",
    clearMacro: {
        forwarder: "0xC1EaB73855155D4e021f7EB4f866996Bac2fe25e",
        createFlowMacro: "0xAb0181Abadcc687C962b097722FD9365Cc7Db9C5",
    },
};
export function getConfig(testnet) {
    return testnet ? AVALANCHE_FUJI_CONFIG : AVALANCHE_MAINNET_CONFIG;
}
//# sourceMappingURL=config.js.map