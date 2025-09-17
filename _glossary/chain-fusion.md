---
slug: "chain-fusion"
title: "Chain Fusion"
description: "Chain Fusion is an interoperability framework on the Internet Computer Protocol (ICP) that uses chain-key cryptography to let smart contracts interact directly with blockchains such as Bitcoin, Ethereum, and Solana without custodial bridges."
content: "Chain Fusion on the Internet Computer (ICP) uses chain-key signatures and threshold cryptography to let smart contracts hold and transact assets on other blockchains, enabling secure cross-chain DeFi and dapps without intermediaries."
difficulty: Beginner
tags: ["Web3", "DeFi", "Blockchain", "ICP", "Chain Fusion", "ckBTC", "ckETH"]
---

# Chain Fusion

**Chain Fusion** on the **Internet Computer Protocol (ICP)** is the technology that lets smart contracts act as bridges without bridges. Using **chain-key signatures** and **threshold cryptography**, ICP canisters can read, sign, and submit transactions directly on other blockchains like **Bitcoin, Ethereum, and Solana**. This creates a new kind of port, where different chains dock into one decentralized harbor without depending on custodians or intermediaries.

*In essence: Chain Fusion is ICP’s harbor, letting multiple blockchains sail into a single ecosystem.*

---

## Why was Chain Fusion Required

For years, interoperability relied on **token bridges** or custodial services. These acted like ferry boats between chains, but were notorious weak points, repeatedly hacked or exploited. The vision behind Chain Fusion was to remove these ferries entirely.  

The **Internet Computer**, designed as a world computer, needed a way to extend its reach across chains while maintaining its decentralization. With Chain Fusion, ICP didn’t build another bridge, it built a **harbor**, where ships from other blockchains can anchor safely and transact without ever leaving their home waters.

*This shift solved a long-standing blockchain problem: how to connect ecosystems without introducing new trust assumptions.*

---

## How Chain Fusion Works

Chain Fusion works by letting ICP canisters create and use **threshold signatures**. Instead of holding a private key in one place, the key is split across ICP nodes. When a canister wants to send a transaction on Bitcoin, Ethereum, or Solana, nodes collaborate to generate a valid signature without any single machine ever holding the full key.  

Different blockchains use different schemes, and ICP adapts accordingly:  

- **Bitcoin** is integrated directly. ICP runs a Bitcoin adapter that connects to the Bitcoin peer-to-peer network, while threshold **ECDSA** and **Schnorr** signatures let canisters spend BTC, even with Taproot features.  
- **Ethereum and other EVM chains** are reached through an **EVM RPC canister**, which aggregates multiple RPC providers. Canisters query Ethereum state and submit transactions signed with threshold ECDSA.  
- **Solana** is connected via a **SOL RPC canister**, governed by the NNS, and signatures are produced with threshold **Ed25519**, the native Solana scheme.  

Together, these tools let canisters read balances, send transactions, or trigger cross-chain actions, all without bridges.

*On ICP, canisters don’t just compute, they command ships across blockchains.*

---

## Advantages of Chain Fusion

- **Bridge-less Security**: No external multisig or custodian holds assets. The trust model reduces to ICP consensus plus the base chain.  
- **Multi-Chain Smart Contracts**: ICP canisters can orchestrate Bitcoin, Ethereum, and Solana actions within the same logic.  
- **ckTokens**: Chain Fusion enables assets like **ckBTC** and **ckETH**, 1:1 backed by native tokens on their home chains. Users can swap, lend, or pay with them inside ICP DeFi.  
- **Cost and Speed Efficiency**: ckBTC and ckETH move in 1–2 seconds on ICP at negligible cost, a sharp contrast to high Ethereum gas fees.  
- **Web-Integrated**: Because ICP also serves web apps directly, developers can create front-to-back dapps that span multiple blockchains without off-chain infrastructure.  

*These innovations make ICP not just another blockchain, but a conductor of blockchains.*

---

## Challenges and Risks involved in Chain Fusion

Every harbor faces storms. Chain Fusion is powerful, but it is not without trade-offs:  

- **Cycle Management**: Canisters need cycles to call EVM or SOL RPC canisters, creating ongoing costs.  
- **Complexity**: Multi-chain orchestration adds surface area for bugs and requires careful audits.  
- **Ecosystem Adoption**: Though ckBTC and ckETH are live, broader developer adoption and user liquidity take time.  
- **Roadmap Risk**: Some integrations, like **Dogecoin (planned for Oct 2025)**, are still under development.  

*Even a strong harbor must maintain its walls against waves of complexity and risk.*

---

## How Chain Fusion Empowers ICP Ecosystem

Chain Fusion is not a theoretical upgrade, it is live today.  

- **ckBTC**: ICRC-2 token backed 1:1 by Bitcoin, used for fast payments and DeFi trades.  
- **ckETH**: ICRC-2 token backed 1:1 by Ethereum, with withdrawal flows through the ETH minter.  
- **ckERC20s**: Wrapped ERC-20 tokens such as **ckUSDC** and **ckLINK**, usable inside ICP dapps.  
- **Live Examples**: ICPSwap and ICDEX integrate ckTokens, while OpenChat enables ckBTC tipping.  

Compared to other chains:  
- **Ethereum** relies on external bridges for BTC and ETH scaling.  
- **Polkadot** offers parachains for interoperability but adds complexity and validator dependencies.  
- **Solana** boasts throughput but depends on centralized RPCs.  
- **Bitcoin** is secure but lacks programmability.  
- **ICP**, through Chain Fusion, merges programmability, cross-chain reach, and direct web serving into one environment.

*For ICP, Chain Fusion is the bridge-less path to becoming the true world computer.*

---

Chain Fusion turns ICP into a **harbor of chains**. Instead of relying on fragile ferries, ships from Bitcoin, Ethereum, and Solana sail directly into ICP’s waters. Here, they interact securely, quickly, and without intermediaries.  

*This is why Chain Fusion matters: it is the harbor where the fragmented seas of blockchain find common ground.*

---

## Further Exploration

- Try sending ckBTC in OpenChat to experience instant Bitcoin transfers.  
- Explore the [EVM RPC canister docs](https://internetcomputer.org/docs/current/developer-docs/integrations/ethereum/) and test multi-chain calls in a canister.  
- Review ICP’s threshold cryptography papers on ECDSA, Schnorr, and Ed25519 for cross-chain security.  
- Compare ckETH swaps on ICPSwap with gas costs on Ethereum.  
- Follow the Dogecoin integration milestone for October 2025.  

