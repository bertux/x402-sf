export const IS_TESTNET = process.env.TESTNET_MODE === "true";

const AVALANCHE_MAINNET_CONFIG = {
  chain: {
    id: 43114,
    name: "Avalanche",
    networkName: "avalanche-c" as const,
    rpcUrl: "https://rpc-endpoints.superfluid.dev/avalanche-c",
    blockExplorerUrl: "https://snowtrace.io",
  },
  superToken: {
    symbol: "USDCx",
    address: "0x288398f314d472b82c44855f3f6ff20b633c2a97" as const,
    decimals: 18,
  },
  underlyingToken: {
    symbol: "USDC",
    address: "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e" as const,
    decimals: 6,
    supportsEIP3009: true,
  },
  superfluid: {
    cfaV1Forwarder: "0xcfA132E353cB4E398080B9700609bb008eceB125" as const,
    cfa: "0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58" as const,
    host: "0x60377C7016E4cdB03C87EF474896C11cB560752C" as const,
  },
  subgraphUrl: "https://subgraph-endpoints.superfluid.dev/avalanche-c/protocol-v1",
  superfluidDashboardNetwork: "avalanche-c",
  // Plain x402 "exact" scheme: a one-time EIP-3009 USDC payment straight to the merchant's
  // payTo (no wrap, no stream). Uses the real USDC (EIP-3009-capable) — same address as
  // underlyingToken here, but kept separate since the two paths can diverge per network.
  x402: {
    network: "avalanche-c" as const,
    asset: {
      address: "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e" as const,
      decimals: 6,
      eip712: { name: "USD Coin", version: "2" }, // USDC EIP-712 domain on Avalanche C-Chain
    },
  },
} as const;

const AVALANCHE_FUJI_CONFIG = {
  chain: {
    id: 43113,
    name: "Avalanche Fuji",
    networkName: "avalanche-fuji" as const,
    rpcUrl: "https://rpc-endpoints.superfluid.dev/avalanche-fuji",
    blockExplorerUrl: "https://testnet.snowtrace.io",
  },
  superToken: {
    symbol: "fUSDCx",
    address: "0x00d05eed85bad962ba5237dd4afff12004455a8a" as const,
    decimals: 18,
  },
  underlyingToken: {
    symbol: "fUSDC",
    address: "0x37a024d7f9ea1c7ebb658f5a14caeddd30f212b7" as const,
    decimals: 18,
    supportsEIP3009: false,
  },
  superfluid: {
    cfaV1Forwarder: "0x2CDd45c5182602a36d391F7F16DD9f8386C3bD8D" as const,
    cfa: "0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A" as const,
    host: "0x85Fe79b998509B77BF10A8BD4001D58475D29386" as const,
  },
  subgraphUrl: "https://subgraph-endpoints.superfluid.dev/avalanche-fuji/protocol-v1",
  superfluidDashboardNetwork: "avalanche-fuji",
  // Plain x402 "exact" scheme on Avalanche Fuji. NOTE: the Superfluid fUSDC above does NOT
  // support EIP-3009, so the exact scheme uses Circle's testnet USDC instead (free faucet:
  // https://faucet.circle.com). This is what the standard x402 ecosystem uses on Avalanche Fuji.
  x402: {
    network: "avalanche-fuji" as const,
    asset: {
      address: "0x5425890298aed601595a70AB815c96711a31Bc65" as const,
      decimals: 6,
      eip712: { name: "USDC", version: "2" }, // USDC EIP-712 domain on Avalanche Fuji
    },
  },
} as const;

// Registry of every network this facilitator can serve, keyed by its x402 network name.
// A single instance is multi-network: each request is routed to the matching config +
// clients (see superfluid.ts / index.ts). Key strings MUST match the x402 package's
// `Network` identifiers ("avalanche-c", "avalanche-fuji") since verify/settle route on them.
export const NETWORK_CONFIGS = {
  "avalanche-c": AVALANCHE_MAINNET_CONFIG,
  "avalanche-fuji": AVALANCHE_FUJI_CONFIG,
} as const;

export type NetworkName = keyof typeof NETWORK_CONFIGS;

export const ALL_NETWORKS = Object.keys(NETWORK_CONFIGS) as NetworkName[];

export function isNetworkName(value: string): value is NetworkName {
  return value in NETWORK_CONFIGS;
}

// Back-compat single-network selection (kept for the startup default / non-multi callers).
export const SUPER_TOKEN_CONFIG = IS_TESTNET ? AVALANCHE_FUJI_CONFIG : AVALANCHE_MAINNET_CONFIG;

export type SuperTokenConfig = typeof AVALANCHE_MAINNET_CONFIG;
