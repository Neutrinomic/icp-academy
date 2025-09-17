---
slug: "HTTPS-Outcalls"
title: "HTTPS Outcalls"
description: "HTTPS outcalls on the Internet Computer (ICP) allow canisters to make outbound HTTP requests to external APIs and services while preserving determinism and consensus. This enables blockchain applications to interact with Web2 directly, without third-party oracles."
content: "HTTPS outcalls extend canisters’ capabilities by letting them fetch and send data across the web, creating new possibilities for DeFi, enterprise apps, and decentralized services."
difficulty: Beginner
tags: ["ICP", "Blockchain", "HTTPS Outcalls", "Smart Contracts", "Web2 Integration"]
---

**HTTPS outcalls** on the **Internet Computer Protocol (ICP)** enable canisters mart contracts to make outbound HTTPS requests to external servers. This lets decentralized applications fetch data from Web2 APIs, send requests to online services, and connect blockchain logic with the wider internet.  

Unlike traditional blockchains, which rely on oracles to bridge Web2 data into Web3, ICP integrates outcalls directly into the protocol. This removes extra trust layers and makes smart contracts more powerful and self-sufficient.

---

### Why HTTPS Outcalls Matter

Blockchains have historically been **closed systems**. Ethereum and Solana contracts cannot talk to Web2 services directly, which forces developers to use **oracles** like Chainlink. Oracles work but introduce centralization and extra complexity.  

ICP breaks this limitation by letting canisters speak HTTPS natively. Outcalls make it possible to:  

- Fetch live market data for decentralized finance (DeFi) applications.  
- Connect to Web2 APIs such as weather, sports, or payments.  
- Enable decentralized apps to interact with enterprise systems.  
- Replace oracle networks with protocol-level functionality.  

*Think of HTTPS outcalls as giving smart contracts the ability to “browse” the web safely and deterministically.*  

---

### How HTTPS Outcalls Work

Outcalls are designed to preserve the blockchain’s guarantees of **determinism and consensus**. Here’s how:  

1. **Request creation:** A canister prepares a request using the system API, specifying method (GET, POST, etc.), URL, headers, and body.  

2. **Replica execution:** Every replica in the subnet sends the exact same request to the destination server.  

3. **Consensus agreement:** Replicas compare responses. If they match, the response is accepted. If not, the call fails to prevent state divergence.  

4. **Response delivery:**  The canister receives the verified response and can process it as part of its logic.  

**Determinism explained:** determinism means all replicas produce the same result so the blockchain state stays consistent. If one replica received a different response, the system would reject it instead of risking a split.  

---

### Features of HTTPS Outcalls

- **Direct API integration**: Canisters interact with external services without oracles.  
- **Multiple request types**: Supports GET, POST, and other standard HTTP methods.  
- **Deterministic execution**: Consensus ensures replicas agree on responses.  
- **Streaming responses**: Large responses can be handled in chunks using callbacks.  
- **Asynchronous design**: Outcalls fit into ICP’s non-blocking message model.  

---

### Advantages for Developers

1. **Oracle-free Web2 access** - Reduces reliance on third-party services and lowers trust assumptions.  

2. **Simpler architecture** - Developers use familiar HTTP logic instead of setting up bridges.  

3. **Broader application scope** - Enables DeFi apps, games, and enterprise software to use real-world data.  

4. **Integration with ICP’s model** - Works natively with asynchronous calls and canister persistence.  

5. **Enterprise and AI potential** - Outcalls can connect decentralized systems with cloud APIs and data services.  

---

### Challenges Involved 

While powerful, outcalls come with important considerations:  

- **Cycle costs**: Outcalls consume more cycles than inter-canister calls, so frequent requests can become expensive.  
- **Latency**: External servers may respond slowly, adding delay to canister execution.  
- **Payload limits**: Requests and responses have size limits (around 2 MB in practice).  
- **IPv6 requirement**: Destination servers must support IPv6 to work with ICP.  
- **Determinism risks**: APIs that return non-deterministic data (timestamps, random IDs) can cause calls to fail.  
- **Security**: Developers must validate external responses to avoid logic exploits or malicious inputs.  

---

### HTTPS Outcalls and Chain Fusion

HTTPS outcalls are also a building block of **Chain Fusion**, the Internet Computer’s framework for seamless cross-chain integration.  

- **Data access**: Canisters can use outcalls to query blockchain APIs (e.g., Ethereum or Bitcoin explorers) for balances, transaction histories, or network data.  
- **Transaction signing**: Combined with chain-key cryptography and threshold ECDSA, canisters can not only read data but also sign and broadcast transactions securely.  
- **Oracle-free design**: Unlike other ecosystems, ICP does not rely on trusted third parties or bridges. Outcalls provide the query layer, while chain-key provides the signing layer.  

This synergy enables ICP dApps to interact with external blockchains directly, powering use cases like **ckBTC**, **ckETH**, and multi-chain DeFi protocols.

HTTPS outcalls expand what is possible on ICP:  

- **DeFi protocols** can pull live exchange rates from external markets to inform trades.  
- **Games and social dApps** can enrich experiences with Web2 data such as weather or news.  
- **Enterprise apps** can bridge on-chain logic with existing IT infrastructure.  
- **Wallets and dashboards** can integrate real-time data feeds directly into user-facing applications.  

These capabilities make ICP unique in its ability to blur the line between blockchain and the traditional web.  

---

### Comparisons with Other Blockchains

- **Ethereum** - Requires oracles like Chainlink for Web2 data. Adds external trust assumptions.  

- **Solana** - Similar reliance on oracles for off-chain information.  

- **Polkadot and Cosmos** - Provide inter-chain communication but not native Web2 integration.  

- **ICP**  - Natively supports outbound HTTPS. Eliminates reliance on oracles and keeps determinism at the protocol level.  

This makes ICP one of the only blockchains where smart contracts can securely interact with Web2 directly.  

HTTPS outcalls are a core innovation of the Internet Computer. They extend canisters beyond the blockchain boundary, allowing them to interact with the web in a deterministic and secure way.  

For developers, outcalls mean less complexity and more creative freedom. For users, they enable dApps that feel more connected and useful. And for the blockchain ecosystem, they represent a step toward bridging Web2 and Web3 without sacrificing decentralization.  

---

### Further Exploration

- Read the official [Internet Computer Docs](https://internetcomputer.org/docs/) for the latest guidance on HTTPS outcalls.  
- Try building a simple canister that makes a **GET request** to a public API and processes the response.  
- Experiment with a **POST request** to send structured data to an external service.  
- Learn about **cycle costs, payload limits, and IPv6 requirements** in the developer documentation to plan resource usage effectively.  
- Join the [DFINITY Forum](https://forum.dfinity.org/) to see how other developers are using HTTPS outcalls and to share your own
