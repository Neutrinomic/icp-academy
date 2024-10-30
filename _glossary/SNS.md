---
slug: "SNS"
title: "SNS (Service Nervous System)"
description: "The Service Nervous System (SNS) is a DAO governance interface designed to give complete control of dapps (decentralized applications) on the Internet Computer (ICP) to their communities."
content: "he Service Nervous System (SNS) is a DAO governance interface designed to give complete control of dapps (decentralized applications) on the Internet Computer (ICP) to their communities."
difficulty: Beginner
tags: ["Web3", "DAO", "Blockchain", "ICP"]
---

The **Service Nervous System (SNS)** is a governance model designed to give complete control of dapps (decentralized applications) on the Internet Computer (ICP) to their communities.

Functioning as an advanced DAO (Decentralized Autonomous Organization), SNS enables a community of token holders to steer the direction of an app by voting on essential aspects like upgrades, governance rules, and even tokenomics. Once control is handed to an SNS, the dapp becomes fully community-governed.

An SNS serves as a DAO framework tailored for ICP-based dapps, granting the community full governance power through stake-based voting. By locking their SNS tokens in “neurons,” users gain voting rights, while each proposal—from app upgrades to resource allocations—is autonomously executed by smart contracts (ICP’s “canisters”) once approved.

Each SNS uses a unique token standard, **ICRC-1** (Internet Computer Request for Comments - Standard 1), which sets token compatibility guidelines within the ICP ecosystem, ensuring seamless interaction between tokens, apps, and ledgers.

Smart contracts, known as canisters on ICP, are not immutable by default. To make a canister immutable, developers have two main options: setting the controller address to a burn address or transferring the canister to an SNS. The latter allows token holders to manage dapp changes by voting on proposals through SNS neurons.

A prime example is **OpenChat**, which adopted SNS governance through a decentralization swap, enabling $CHAT token holders to vote on proposals like app features and maintenance policies. This transition from developer control to community control exemplifies the SNS’s capacity to empower users with full governance rights.

The SNS framework is inspired by ICP’s **Network Nervous System (NNS)**, the main DAO governing the entire Internet Computer. The success of NNS governance inspired the SNS model, applying these principles at the app level to create secure, decentralized communities around individual dapps.

### How It Works

1. **Core Canisters**: SNS uses a network of core canisters (smart contracts) to handle governance, token distribution, and community contributions. Key canisters include:
    - **Governance Canister**: Manages proposal submissions, voting processes, and execution of community decisions.
    - **Ledger Canister**: Implements the **ICRC-1 token standard**, which defines and records unique SNS tokens for each dapp.
    - **Decentralization Swap Canister**: Facilitates the initial SNS launch, allowing users to exchange ICP tokens for SNS tokens, decentralizing control and funding.
    - **Root Canister**: Oversees upgrades to both the SNS and the dapp, ensuring continuity and security.
2. **ICRC-1 Tokens and Neurons**: Each SNS utilizes ICRC-1 tokens, specifically designed for governance on ICP. By staking these tokens in neurons (voting units), users gain voting power to participate in governance decisions. Neurons can also delegate voting power to others or be locked for longer durations to increase influence.
3. **Decentralization Swap**: At launch, SNS conducts a “decentralization swap” where users trade ICP tokens for SNS tokens, creating distributed ownership. This swap ensures broad participation and provides initial funding for the dapp.

### Advantages

- **Community-Controlled Ownership**: Decisions and ownership lie in the hands of the community, not a centralized developer or team.
- **Customizable Governance**: Each SNS can set its governance parameters, such as voting requirements, proposal types, and tokenomics, to suit its community’s needs.
- **ICRC-1 Token Standard**: The adoption of ICRC-1 for tokens enhances interoperability, security, and consistency across the ICP network.
- **On-Chain Transparency and Security**: SNS’s governance operates entirely on-chain, meaning every vote, transaction, and update is fully visible and NNS-reviewed for security.

### Practical Applications

- **Social Platforms**: Let users govern content policies, feature releases, and monetization strategies.
- **DeFi Protocols**: Token holders vote on aspects like interest rates, liquidity pools, and product upgrades.
- **Gaming Dapps**: Gamers can collectively vote on updates, in-game economies, and additional features.

**OpenChat**, an ICP-based social dapp, recently moved to SNS governance, making it one of the first projects to test the model. $CHAT token holders now influence platform decisions, voting on upgrades and shaping the dapp’s policies—a true demonstration of community-led governance.

SNS on ICP isn’t limited to code governance; it includes the full dapp ecosystem. With SNS canisters hosted on a dedicated subnet, NNS reviews and approves updates to ensure all changes meet ICP’s security standards. By adopting the ICRC-1 token standard, SNSs also benefit from seamless compatibility across apps within the ICP network.

SNS on the Internet Computer marks a new era of decentralized governance, handing complete control of dapps to the communities that use them. With its stake-based voting system, ICRC-1 token integration, and automated proposal execution, SNS provides a robust framework for building community-led Web3 applications.

### Further Exploration

- Explore the ICRC-1 token standard and how it impacts governance interoperability on ICP.
- Compare governance models between SNS and traditional DAOs.
- Investigate current ICP dapps using SNS to understand real-world applications of this governance model.
