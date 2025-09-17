---
slug: "ckETH"
title: "ckETH (Chain-Key Ethereum)"
description: "ckETH is a chain-key token on the Internet Computer Protocol (ICP), backed 1:1 by ETH on Ethereum mainnet, enabling low-cost and fast Ethereum transactions inside ICP without relying on custodial bridges."
content: "ckETH represents Ethereum (ETH) on ICP using a helper contract and a minter canister. ETH is locked in the helper contract on Ethereum, and an equivalent amount of ckETH is minted on ICP. This allows users to use ETH across ICP dapps with faster speeds, lower costs, and without custodians."
difficulty: Beginner
tags: ["ICP", "DeFi", "Ethereum", "Chain Fusion", "Chain-Key Tokens", "ckETH"]
---

# ckETH (Chain-Key Ethereum)

**ckETH** (Chain-Key Ethereum) is a digital twin of Ethereum’s native ETH on the Internet Computer Protocol (ICP). Every ckETH is backed 1:1 by ETH held on Ethereum mainnet. By avoiding custodial bridges, ckETH lets users move Ethereum’s value into ICP, where transfers are near-instant, cheap, and usable across ICP’s decentralized applications.  

*If ETH is a flame that powers DeFi, ckETH is that same fire carried in ICP’s lantern—brighter, lighter, and easier to use.*

---

## Why ckETH Matters

Ethereum is the most widely used smart contract platform, but high gas fees and long confirmation times limit everyday usability. Wrapped ETH solutions exist on other chains, but these rely on trusted custodians, exposing users to risks of mismanagement or hacks.  

ckETH was created to solve both problems: it preserves Ethereum’s value while removing trust in third parties. Instead of depending on custodians, ckETH uses **Ethereum smart contracts plus ICP’s minter canisters** to maintain security and 1:1 parity.  

*It lets Ethereum’s power amplify inside ICP, free from the drag of high fees and custodians.*

---

## How ckETH Works

The ckETH system combines Ethereum contracts with ICP canisters:

- **Helper Contract on Ethereum**  
  Users send ETH to a special smart contract on Ethereum called the helper contract. When ETH arrives, it emits an event that records the deposit along with the intended ICP recipient.  

- **Event Log Listening & Minting**  
  The ckETH minter on ICP queries multiple Ethereum RPC providers for deposit events. Once a deposit is confirmed, the minter mints the equivalent ckETH to the user’s ICP account.  

- **Ledger and Index Canisters**  
  ckETH balances and transfers are managed by ICP’s ledger canister (ICRC-1 and ICRC-2 standards). Index canisters track and serve transaction history. Within ICP, ckETH moves instantly with minimal fees.  

- **Withdrawal Back to ETH**  
  To redeem ETH, users approve the minter to burn their ckETH and specify an Ethereum address. The minter burns the ckETH and creates a transaction to send ETH from the helper contract back to that address.  

- **Security and Redundancy**  
  Multiple RPC endpoints are used to fetch Ethereum events, reducing reliance on a single provider. The ledger and minter are transparent, auditable canisters.  

*In short: ETH is locked on Ethereum, ckETH is minted on ICP, and the system ensures the supply always balances 1:1.*

---

## Advantages

- **No Custodians**: Security is rooted in Ethereum contracts and ICP canisters, not in centralized bridge operators.  
- **Low Cost, High Speed**: Once on ICP, ckETH transfers finalize in seconds and cost a fraction of Ethereum gas fees.  
- **Programmable ETH on ICP**: Smart contracts on ICP can hold and use ckETH, enabling DeFi applications, automated payments, and cross-chain strategies.  
- **Transparency**: Deposits and withdrawals can be verified on Ethereum; ckETH movements are fully visible on ICP’s ledger.  
- **Compatibility**: Supports ICP’s token standards (ICRC-2), making it easy to integrate into wallets and dapps.  

*ckETH makes Ethereum lighter to use without compromising its integrity.*

---

## Challenges

- **Ethereum Gas Fees Still Apply**: Deposits and withdrawals require Ethereum transactions, which remain costly and slow compared to ckETH transfers.  
- **RPC Dependency**: The minter relies on querying multiple Ethereum RPC providers; while decentralized, it is not yet as direct as ICP’s Bitcoin integration.  
- **Adoption and Liquidity**: Liquidity for ckETH in ICP DeFi is growing, but still smaller than native ETH on Ethereum or custodial wraps like WETH.  
- **User Complexity**: Interacting with helper contracts, principals, and approvals may feel unfamiliar to new users.  

*The flame is strong inside ICP, but the bridge from Ethereum still carries cost and complexity.*

---

## How ckETH Empowers ICP

ckETH is part of the chain-key token family, alongside ckBTC. Together they show ICP’s vision of **Chain Fusion**: enabling direct, decentralized interaction with major blockchains.  

- **Live Uses**: ckETH is supported in ICPSwap, ICDEX, and wallets like Oisy. Users can trade, lend, or pay with ETH inside ICP.  
- **Comparisons**:  
  - **WETH (Ethereum)**: Custodial risk, high gas fees.  
  - **Bridged ETH on other chains**: Dependent on centralized validators or bridge security.  
  - **ckETH**: Secure, decentralized, and programmable within ICP.  

*It proves ICP can host Ethereum’s assets natively while preserving user sovereignty.*

Today, ckETH works by listening to Ethereum logs and minting tokens on ICP. In the future, ICP may extend Chain Fusion so canisters can directly call Ethereum smart contracts, creating true cross-chain composability. ckETH is the first step toward that deeper integration.  

Ethereum is a source of immense energy in the blockchain world. ckETH captures that energy and carries it into ICP’s environment, where it can burn brighter, faster, and at lower cost.  

---

## Further Exploration

- Read the [ckETH documentation](https://internetcomputer.org/docs/defi/chain-key-tokens/cketh/overview).  
- Check the [Ethereum helper contract on Etherscan](https://etherscan.io/address/0x7574eB42cA208A4f6960ECCAfDF186D627dCC175).  
- Explore ICPSwap or ICDEX to see how ckETH is used in practice.  
- Compare ckETH transfers on ICP with normal Ethereum transfers to experience the speed difference.  
- Watch ICP’s roadmap for future Chain Fusion upgrades enabling direct Ethereum smart contract calls.  
