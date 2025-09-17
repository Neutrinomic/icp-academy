---
slug: "chain-key-tokens"
title: "Chain-Key Tokens"
description: "Chain-Key Tokens on the Internet Computer (ICP) are cryptographic twins of external blockchain assets, such as Bitcoin, Ethereum, and ERC-20 tokens, created using chain-key cryptography to enable trust-minimized, on-chain interoperability."
content: "Chain-Key Tokens allow ICP to represent Bitcoin, Ethereum, and ERC-20 assets natively. They are minted and redeemed directly through subnets using threshold cryptography, with no custodians or external bridges, and are fully compatible with ICP's ICRC token standards."
difficulty: Beginner
tags: ["ICP", "Blockchain", "Chain-Key Cryptography", "Tokens", "Interoperability", "DeFi"]
---

**Chain-Key Tokens (ck-tokens)** on the **Internet Computer (ICP)** are digital twins of assets from external blockchains such as Bitcoin, Ethereum, and ERC-20 tokens. Unlike wrapped tokens that depend on custodians or multisig groups, ck-tokens are created using **Chain-Key Cryptography**, allowing ICP subnets to directly hold blockchain addresses and mint or burn tokens without trusted intermediaries.  

Examples in use today include **ckBTC** (Bitcoin), **ckETH** (Ethereum), and stablecoins such as **ckUSDC** and **ckUSDT**. The ckERC20 framework also supports tokens like **ckLINK** and **ckUNI**, with the capacity to add more ERC-20 assets as adoption grows.  

---

### Why Chain-Key Tokens Matter

Most blockchains cannot natively hold or transfer assets from other chains. To move tokens between ecosystems, projects rely on custodial bridges or wrapping mechanisms. These often introduce new risks: hacked multisigs, mismanaged collateral, or centralized issuers.  

Chain-Key Tokens provide a different path. By using **threshold ECDSA cryptography**, ICP subnets can directly control addresses on external blockchains. This makes it possible to mint ck-tokens on ICP that are always backed 1:1 by their native counterpart, with no custodian in between.  

This innovation enables:  

- **Trust-minimized interoperability** with Bitcoin, Ethereum, and ERC-20 ecosystems.  
- **Programmable DeFi** using ck-assets as if they were native tokens.  
- **Low-cost transfers** within ICP, powered by cycles instead of gas.  
- **Censorship resistance** through decentralized subnet governance by the NNS.  

---

### How Chain-Key Tokens Work

1. **Threshold ECDSA Signatures**  
   - Each participating subnet collectively manages a cryptographic key using multi-party computation.  
   - No single node ever sees the private key; signatures are generated jointly.  
   - This lets ICP control real Bitcoin or Ethereum addresses securely.  

2. **Minting**  
   - A user deposits BTC, ETH, or ERC-20 tokens into an address managed by an ICP subnet.  
   - Once confirmed, the subnet mints the equivalent ck-token (ckBTC, ckETH, or ckERC20) inside ICP.  

3. **Ledger Integration**  
   - ck-tokens run on **ICRC ledgers** with index and archive canisters tracking balances and history.  
   - This ensures compatibility with wallets, DEXs, and dApps across ICP.  

4. **Redeeming**  
   - To withdraw, a user sends ck-tokens back to the minting canister.  
   - The canister burns the ck-tokens and signs a transaction on the external chain to release the original asset.  

5. **ERC-20 Support**  
   - For ERC-20s, helper contracts on Ethereum log deposits and withdrawals.  
   - ICP canisters monitor these logs using HTTPS outcalls to Ethereum nodes.  
   - This process verifies activity without needing custodians or bridges.  

---

### Available Chain-Key Tokens

As of 2025, confirmed ck-tokens in the ecosystem include:  

- **ckBTC** - Bitcoin twin, live since 2023, widely used for payments and DeFi.  
- **ckETH** - Ethereum twin, enabling ETH-based transfers and DeFi integration.  
- **ckUSDC** - Chain-Key version of USD Coin (ERC-20).  
- **ckUSDT** - Chain-Key version of Tether (ERC-20), supported through the ckERC20 framework and integrated in ICP DeFi apps.  
- **ckLINK** - Chain-Key version of Chainlink’s token (ERC-20).  
- **ckPEPE** - Chain-Key version of the PEPE token (ERC-20).  

The **ckERC20 framework** allows more tokens to be added gradually. Developers and DAOs can propose and onboard additional ERC-20 assets as demand increases.  

---

### Advantages and Innovations

- **No custodians**  
  - ck-tokens are secured by subnets using threshold cryptography.  
  - Removes the risks of centralized wrapped token models.  

- **Low-cost transfers inside ICP**  
  - Transfers between ck-token holders use cycles, which are much cheaper than Ethereum gas.  
  - Only deposits and withdrawals to external chains incur native network fees.  

- **ICRC compatibility**  
  - ck-tokens follow ICRC ledger standards, ensuring interoperability across wallets and dApps.  

- **Composability**  
  - Once minted, ck-tokens behave like ICP-native tokens, fully usable in DeFi and DAO workflows.  

- **Protocol-level integration**  
  - Chain-Key Tokens are not add-on wrappers but integrated at the protocol level through Chain-Key Cryptography.  

---

### Challenges and Risks

- **External chain costs**  
  - Depositing or withdrawing ERC-20s still requires Ethereum gas. Bitcoin withdrawals require confirmations.  

- **Subnet security**  
  - The robustness of ck-tokens depends on subnet size and decentralization. Larger node counts improve security.  

- **Adoption curve**  
  - dApps and wallets must integrate ckERC20s to unlock their full potential.  

- **External dependencies**  
  - ICP ck-tokens depend on Bitcoin and Ethereum networks functioning reliably. Congestion or contract failures can impact availability.  

---

### ChainKey tokens in ICP Ecosystem

Chain-Key Tokens are already powering real activity on ICP:  

- **ICPSwap and KongSwap** list ckBTC, ckETH, ckUSDC, and ckUSDT pairs for trading.  
- **OISY Wallet** supports ckBTC and ckETH for simple wallet transfers.  
- **Neutrinite DAO** integrates ckERC20 (ckUSDT) tokens into DeFi modules for stablecoin flows.  
- **NNS Frontend Dapp** displays balances of ckBTC and ckETH alongside native ICP holdings.  

This adoption shows ck-tokens are not theoretical; they are already being used as the backbone of ICP’s multi-chain DeFi ecosystem.  

---

### Comparisons

- **Wrapped Bitcoin (wBTC on Ethereum)**  
  - Relies on centralized custodians to hold Bitcoin.  
  - ckBTC uses cryptographic signing by subnets, eliminating custodians.  

- **Traditional Bridges**  
  - Depend on validators or multisigs, vulnerable to hacks.  
  - ck-tokens operate at the protocol level with no additional trust assumptions.  

- **Other wrapped stablecoins**  
  - Require centralized issuers plus external bridges.  
  - ckUSDC and ckUSDT are issued by their standard issuers but rely on ICP’s cryptographic minting instead of custodianship.  

Chain-Key Tokens expand the Internet Computer into a **multi-chain hub**, bringing Bitcoin, Ethereum, and ERC-20 tokens into a decentralized, programmable environment. By replacing custodians with cryptography and embedding interoperability at the protocol level, ICP makes external assets safe to use in Web3 applications.  

Today, ckBTC, ckETH, ckUSDC, ckUSDT, ckLINK, and ckPEPE demonstrate how assets from other chains can thrive within ICP. As the ckERC20 framework expands, more tokens will follow, giving developers and users access to a seamless, trust-minimized multi-chain future.  

---

### Further Exploration

- Read the [Chain-Key Tokens overview](https://internetcomputer.org/docs/defi/chain-key-tokens/overview) in the official ICP documentation.  
- Explore the [ckBTC integration guide](https://internetcomputer.org/docs/current/developer-docs/integration/bitcoin/overview) to see how Bitcoin connects to ICP.  
- Learn more about [ckETH and ckERC20 tokens](https://support.dfinity.org/hc/en-us/articles/20273018220180-What-are-ckETH-and-ckERC-20-tokens) in the DFINITY knowledge base.  
- Track live ck-token activity on the [ICP Dashboard](https://dashboard.internetcomputer.org).  
- Join ongoing discussions on the [DFINITY Forum](https://forum.dfinity.org) to see which ERC-20 tokens are being considered for onboarding.  
