---
slug: "ckerc20-tokens"
title: "ckERC20 Tokens"
description: "ckERC20 tokens are Chain-Key versions of ERC-20 assets on the Internet Computer, minted and redeemed through chain-key cryptography for trust-minimized, interoperable DeFi."
content: "ckERC20 tokens extend ICP’s interoperability by allowing ERC-20 assets like USDC, USDT, LINK, and PEPE to exist natively on the Internet Computer. They use chain-key cryptography, ICRC standards, and subnet signing to provide secure, low-cost, and composable stablecoin and token integration."
difficulty: Beginner
tags: ["ICP", "Blockchain", "ERC-20", "Chain-Key Tokens", "Interoperability", "DeFi"]
---

**ckERC20 tokens** are Chain-Key versions of ERC-20 assets from Ethereum that run natively on the **Internet Computer (ICP)**. They are minted and redeemed using **Chain-Key Cryptography**, which allows ICP subnets to collectively control Ethereum addresses without custodians or bridges.  

By bringing ERC-20 tokens such as **USDC**, **USDT**, **LINK**, and **PEPE** into ICP’s ecosystem, ckERC20s make it possible to use familiar assets in a fully decentralized environment, integrated with ICP’s smart contracts, DAOs, and DeFi protocols.  

---

### Why ckERC20 Tokens Matter

The ERC-20 standard on Ethereum powers the majority of crypto assets and stablecoins. But Ethereum suffers from high gas fees and network congestion, limiting its scalability for daily DeFi use.  

ICP addresses this by enabling **ERC-20 assets to be represented on-chain as ckERC20 tokens**, which can:  

- **Reduce costs**: ICP transfers use cycles, which are inexpensive compared to Ethereum gas.  
- **Improve composability**: Once minted, ckERC20s behave like native ICP tokens, interoperable with canisters and ICRC standards.  
- **Strengthen interoperability**: Users and developers can access stablecoins and ERC-20 assets without relying on centralized wrapped tokens.  
- **Unlock new DeFi flows**: ckUSDC and ckUSDT stablecoins provide liquidity and stability to ICP-based protocols.  

This makes ckERC20 tokens one of the most important bridges between Ethereum liquidity and ICP’s on-chain compute.  

---

### How ckERC20 Tokens Work

The process of minting and redeeming ckERC20s involves Ethereum and ICP working together:  

1. **Helper Contracts on Ethereum**  
   - Smart contracts deployed on Ethereum track deposits of ERC-20 assets.  
   - When a user sends USDC, USDT, or another supported ERC-20, the contract logs the event.  

2. **Monitoring with HTTPS Outcalls**  
   - ICP canisters monitor Ethereum logs using HTTPS outcalls.  
   - Once a deposit is confirmed, ICP mints the equivalent ckERC20 on ICP.  

3. **Ledger Integration**  
   - Each ckERC20 has an **ICRC ledger canister** managing balances, plus index and archive canisters for history.  
   - This makes ckERC20s interoperable with wallets, DEXs, and governance tools.  

4. **Redeeming**  
   - To withdraw, a user sends ckERC20 tokens back to the minter canister.  
   - ICP burns the ck-tokens and signs a transaction on Ethereum via threshold ECDSA, releasing the original ERC-20 to the user’s Ethereum address.  

---

### Available ckERC20 Tokens

As of 2025, supported ckERC20 tokens include:  

- **ckUSDC:** Chain-Key USD Coin, a widely used stablecoin for DeFi.  
- **ckUSDT:** Chain-Key Tether, another global stablecoin, supported via the ckERC20 framework.  
- **ckLINK:** Chain-Key version of Chainlink’s token.  
- **ckUNI:** Chain-Key version of the Uniswap's token.

The framework makes it possible to onboard additional ERC-20s as community demand grows. Future candidates may include DAI, UNI, and other tokens widely used in Ethereum DeFi.  

---

### Advantages and Innovations

- **Stablecoin access for ICP:** ckUSDC and ckUSDT give ICP users access to reliable stablecoins, critical for DeFi lending, trading, and payments.  
- **Protocol-level security:** ckERC20s are minted through cryptographic signing by subnets, not custodians.  
- **Low-cost transfers inside ICP:** ICP transfers of ckERC20s use cycles, keeping costs predictable and low.  
- **DeFi composability:** Once minted, ckERC20s interact seamlessly with ICP dApps, DAOs, and canisters.  
- **Expandable framework:** New ERC-20 tokens can be added without reinventing infrastructure.  

---

### Challenges and Risks Involved

- **Ethereum gas fees:** Depositing or withdrawing ckERC20s still requires Ethereum gas, which can be expensive.  
- **Subnet trust assumptions:** ckERC20s rely on subnet security through threshold cryptography, and larger subnets improve resilience but add complexity.  
- **Adoption curve:** dApps and wallets need to integrate ckERC20s for them to gain widespread traction.  
- **External dependencies:** The ckERC20 framework depends on Ethereum’s availability and correct functioning of helper contracts.  

---

### Comparisons

- **Wrapped Tokens on Ethereum (wBTC, wETH, etc.):** Depend on custodians or multisig groups, while ckERC20 tokens eliminate custodians through cryptographic minting.  
- **Bridges like Polygon or Avalanche:** Use external validators or bridge contracts, while ckERC20s are secured directly at the protocol level with no external intermediaries.  
- **Other stablecoin integrations:** Often siloed in a single chain, while ckUSDC and ckUSDT can move between Ethereum and ICP seamlessly with minimal trust assumptions.  


### ckERC20 in ICP Ecosystem

ckERC20 tokens are already part of ICP’s DeFi ecosystem:  

- **ICPSwap** lists ckUSDC and ckUSDT as liquidity pairs.  
- **KongSwap** integrates ckERC20s into multi-token pools.  
- **OISY Wallet** supports ckUSDC for payments and transfers.  
- **Neutrinite DAO** uses ckERC20 tokens in stablecoin-focused DeFi modules.  

This integration shows that ERC-20 stablecoins and tokens are no longer limited to Ethereum but can be actively used within ICP’s decentralized architecture.  

ckERC20 tokens make Ethereum’s liquidity accessible to the Internet Computer. By minting ERC-20 assets like USDC, USDT, LINK, and PEPE as cryptographically secure ck-tokens, ICP creates a system where assets are **programmable, low-cost, and fully composable** in a decentralized environment.  

This framework brings stablecoins and other ERC-20 tokens into ICP’s DeFi ecosystem without custodians or fragile bridges. As more ERC-20s are added, ckERC20s will continue to expand ICP’s role as a **multi-chain hub**, uniting Ethereum liquidity with the Internet Computer’s high-speed, tamper-proof compute.  

---

### Further Exploration

- Read the [ckETH and ckERC20 guide](https://support.dfinity.org/hc/en-us/articles/20273018220180-What-are-ckETH-and-ckERC-20-tokens) in the DFINITY knowledge base.  
- Explore the [Chain-Key Tokens overview](https://internetcomputer.org/docs/defi/chain-key-tokens/overview) for ERC-20 support details.  
- Review ICP’s [integration with Ethereum](https://internetcomputer.org/docs/current/developer-docs/integration/ethereum/overview) to understand how ERC-20 tokens are bridged.  
- Track live ckUSDC and ckUSDT activity on the [ICP Dashboard](https://dashboard.internetcomputer.org).  
- Join [DFINITY Forum](https://forum.dfinity.org) discussions on which ERC-20 tokens should be onboarded next.  
