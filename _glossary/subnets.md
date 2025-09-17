---
slug: "subnets"
title: "Subnets"
description: "Subnets on the Internet Computer (ICP) are blockchain networks formed by independent node machines, coordinated by the NNS and connected by chain-key cryptography to enable scalable, composable, and secure canister execution."
content: "Subnets are the modular scaling units of the Internet Computer, each acting as a blockchain while combining into one unified network through cryptography."
difficulty: Beginner
tags: ["ICP", "Blockchain", "Subnets", "Scalability", "Chain Key Cryptography"]
---

**Subnets** on the **Internet Computer Protocol (ICP)** are the building blocks of its architecture. Each subnet is a group of independent nodes running consensus together to form a blockchain.

These subnets host **canisters** (ICP’s smart contracts) and interconnect through **chain-key cryptography**, allowing the entire system to appear as one blockchain to the outside world. Like rivers feeding into one ocean, subnets scale ICP into a seamless global computer.

---

### Subnet Design of ICP

Early blockchains like Bitcoin and Ethereum were monolithic: every node executed every transaction. This design provided security but limited throughput, creating congestion during high demand. ICP reimagined blockchain scaling by introducing **subnets**: parallel blockchains coordinated by the **Network Nervous System (NNS)**.  

By partitioning the workload across many subnets, ICP achieves horizontal scalability while preserving a unified user and developer experience. This means a dApp deployed to one subnet can still interact with canisters on other subnets as if the whole system were one chain.

*Subnets transform blockchain from a single crowded lane into a multi-lane highway directed by cryptography.*

---

### How Subnets Work

A subnet is composed of **node machines** run by independent providers in certified data centers. These nodes run replicas of the ICP protocol, execute canister code, and maintain consensus over the subnet’s state.  

The **NNS**, itself running on a system subnet, decides which nodes form each subnet and manages upgrades or reconfigurations. This ensures subnets remain consistent with the protocol’s governance.  

**Chain-key cryptography** stitches everything together. Thanks to this system, the entire ICP can be represented by a single short public key, even though it is made up of many subnets. Canisters can call one another across subnets through asynchronous messaging, with chain-key signatures certifying the integrity of every message.

*Each subnet is autonomous in execution but unified in presentation, enabling ICP to scale without fragmenting into silos.*

---

### Types of Subnets

ICP supports different subnet classes to match diverse use cases:

1. **Application Subnets**  
   - Host most canisters and decentralized applications.  
   - Example: the **Bitcoin integration subnet**, which enables ckBTC.  
   - Configurable to enable or restrict features as needed.  

2. **System Subnets**  
   - Run canisters that support ICP itself, such as the **NNS canisters**.  
   - These subnets have no cycle charges and allow higher limits on execution and memory.  

3. **High-Security Subnets**  
   - Subnets with larger node counts (e.g., more than 28 or 35 nodes).  
   - Used for DeFi or critical applications where additional security is needed.  
   - Higher cycle costs reflect the resources required.  

4. **Region-Specific Subnets**  
   - Configured with nodes restricted to certain regions, such as Europe.  
   - Enable compliance with regulations like **GDPR** and local data sovereignty rules.  

*By diversifying subnet configurations, ICP can host consumer apps, DeFi, governance, and enterprise use cases under one network.*

---

### ICP's Innovation with Sub nets

- **Horizontal Scalability**: Adding more subnets increases ICP’s capacity without bottlenecks.  
- **Security by Diversity**: Larger subnets with more nodes raise the threshold for attacks.  
- **Seamless Composability**: Canisters on different subnets communicate natively, preserving developer simplicity.  
- **Regulatory Flexibility**: Region-specific subnets enable compliance with data laws.  
- **Web Integration**: Subnets can host canisters that serve web content directly, also merging blockchain with cloud functionality.  

*Subnets combine the strength of independent chains with the fluidity of a single global computer.*

---

### Challenges and Risks around Subnets

- **Node Provider Concentration**: Subnets rely on node providers meeting strict hardware and compliance standards. If providers are concentrated, decentralization is reduced.  
- **Asynchronous Design**: Cross-subnet calls introduce latency, requiring developers to design around delayed responses.  
- **Governance Complexity**: As more subnets come online, the NNS must manage upgrades, membership, and configurations at scale.  

*Scaling through subnets solves bottlenecks but introduces new governance and operational challenges.*

---

### Subnets are part of Core Architecture of ICP

Subnets are the **core scaling unit of ICP**. Without them, the Internet Computer could not support high-volume applications.  

- **OpenChat** runs on application subnets, combining scalability with low-latency messaging.  
- **Neutrinite.io**, a DeFi Ecosystem on ICP, leverages subnet architecture to handle large transaction volumes and token data securely.  
- **System subnets** like the NNS guarantee network coordination and governance.  

By combining these subnet types, ICP creates a platform capable of hosting DeFi, web apps, enterprise services, and cross-chain protocols like ckBTC; all within one integrated ecosystem.

*Every major ICP dApp depends on the subnet architecture for speed, resilience, and global reach.*


Think of subnets as **departments in a vast digital university**. Each department has its own faculty and students (nodes and canisters), runs its own curriculum (consensus and applications), and yet all operate under one shared charter. This architecture allows ICP to scale without losing coherence, bringing modularity and unity to blockchain design.

---

### Further Exploration
- Learn how the [Network Nervous System (NNS)](https://internetcomputer.org/docs/current/developer-docs/daos/nns/) governs subnet creation and upgrades.  
- Study [Chain-Key Cryptography](https://internetcomputer.org/docs/current/references/cryptography/chain-key-technology), the system that unifies subnets.  
- Explore subnet configurations on the [ICP dashboard](https://dashboard.internetcomputer.org/).  
- Join the [DFINITY Forum](https://forum.dfinity.org/) to see discussions on subnet governance and expansion.  
- Compare ICP subnets to Ethereum’s rollups and sharding to understand differences in scaling design.  

