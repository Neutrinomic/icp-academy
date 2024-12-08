---
slug: "51attack"
title: "51% Attack"
description: "A 51% attack occurs when a malicious entity gains control of more than 50% of a blockchain network’s computational power or staking authority, allowing them to disrupt the network."
content: "A 51% attack occurs when a malicious entity gains control of more than 50% of a blockchain network’s computational power or staking authority, allowing them to disrupt the network."
difficulty: Beginner
tags: ["Web3", "DeFi", "Blockchain", "ICP"]
---


A **51% attack** occurs when a malicious entity gains control of more than 50% of a blockchain network’s computational power or staking authority, allowing them to disrupt the network.

In this scenario, attackers can manipulate transactions, reverse payments (double-spending), or prevent new transactions from being added to the blockchain. This type of attack is a critical risk for blockchains, particularly those with low hash power or low levels of decentralization.

The concept of a 51% attack originated with the advent of **Proof-of-Work (PoW)** blockchains like Bitcoin. While the Bitcoin network has remained secure due to its immense computational power, smaller PoW networks have been successfully attacked.

Notable incidents include the **Ethereum Classic (ETC) 51% attack in 2019**, where attackers double-spent approximately $1.1 million, and multiple attacks on smaller blockchains such as Verge and Bitcoin Gold.

**How It Works**:

1. **Gaining Majority Control**:
    - In PoW blockchains, attackers must control over 50% of the network's total hash power.
    - In **Proof-of-Stake (PoS)** systems, attackers need to control over 50% of the staked tokens.
2. **Types of Manipulation**:
    - **Double-Spending**: Attackers use their majority power to reverse transactions, allowing them to spend the same funds twice.
    - **Transaction Denial**: Attackers can censor transactions by refusing to include them in new blocks.
    - **Reorganization (Reorg) Attacks**: By creating an alternative chain with conflicting transactions, attackers can invalidate blocks that were previously confirmed.
3. **Vulnerabilities**:
    - **Low Hash Rate**: Networks with insufficient computational power are more susceptible.
    - **Centralized Staking**: In PoS systems, if staking power is concentrated among a few participants, the risk of a 51% attack increases.

**Advantages of Decentralized Security**:

- **High Hash Power**: Larger networks like Bitcoin and Ethereum are resistant to 51% attacks due to their immense computational power.
- **Decentralized Participation**: Distributing mining or staking authority across a wide network minimizes risks.
- **Consensus Innovation**: Mechanisms like **Proof-of-Stake with Slashing** and **Threshold Relay** (used by ICP) discourage malicious behavior.

**Challenges and Risks**:

- **Economic Feasibility**: For smaller blockchains, acquiring majority power may require relatively low resources.
- **Reputation Damage**: Successful attacks erode trust in the network, discouraging adoption and investment.
- **Mitigation Costs**: Implementing solutions like merged mining or enhanced consensus mechanisms can be expensive and complex.

**Practical Applications**:

- **PoW Networks**: Ensuring hash power distribution across miners to secure the network.
- **PoS Systems**: Designing staking models that reward decentralization and penalize malicious actors.
- **DeFi Security**: Building protocols with fail-safes against potential attacks to protect user funds.

**Examples**:

**Ethereum Classic (2019)**: Suffered multiple 51% attacks, including one where attackers reversed over $1 million in transactions.

**Bitcoin Gold (2018)**: Attackers exploited the network to double-spend $18 million worth of BTG.

**Verge (2018)**: A low hash rate enabled attackers to exploit its consensus mechanism multiple times.

The **Internet Computer Protocol (ICP)** is inherently resistant to 51% attacks due to its innovative **Threshold Relay Consensus** mechanism. Only possibility of a 51% attack on ICP can happen via Network Nervous System, which is incentivized to protect the network.

Instead of relying only on mining or staking power, ICP distributes block consensus across Subnets using advanced cryptography and randomness. This ensures that the protocol remains autonomous and minimizes the chances of a 51% attack.

This decentralization and transparency eliminate the risk of any single entity gaining control over the network.

ICP’s **Chain Key Cryptography** ensures secure communication and consensus across nodes, making the network resilient to manipulation.

51% attacks highlight the importance of decentralization and robust consensus mechanisms in blockchain security. While smaller networks remain vulnerable, innovations like ICP’s architecture demonstrate how advanced cryptography and distributed governance can protect against such risks.

**Further Exploration**:

- Compare how PoW and PoS systems handle risks of 51% attacks.
- Explore ICP’s Threshold Relay Consensus and its role in mitigating majority control risks.
- Research blockchain networks that have implemented successful mitigations against 51% attacks.
