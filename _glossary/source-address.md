---
slug: "source-address"
title: "Source Address"
description: "The source address is the fixed starting point of a Vector, where tokens are first deposited before any automated DeFi flow begins."
content: "In ICRC-55, the source address is the permanent entry point for tokens in a Vector. It triggers execution when deposits are made, ensuring stability and security for automated swaps, lending, and multi-step workflows. By remaining immutable, the source address provides reliability while supporting composability, cross-chain flows, and scalable automation on ICP."
difficulty: Intermediate
tags: ["ICP", "DeFi", "Vectors", "ICRC-55"]
---


### **Source Address: The Starting Point of Vectors**

---

In the **DeFi Vectors framework**, the **source address** is the **starting point** of every token flow. It defines where tokens are deposited before being transferred or processed according to the rules of a **Vector**.

Whether automating a token swap, lending operation, or borrowing transaction, the source address is a fixed and permanent anchor for executing the Vector’s logic.

Unlike the **destination address**, which can be changed based on workflow needs or user adjustments, the **source address** is immutable.

This permanence ensures stability and security for the execution of token flows, making the source address a critical component of the **ICRC-55 protocol**.

---

### **What Is a Source Address in a Vector?**

The **source address** in a Vector is the wallet, account, or ledger from which tokens originate. When a Vector is created, the system assigns a unique source address that remains fixed throughout the Vector’s lifecycle.

### **Role in DeFi Vectors**

1. **Starting Point**:
    - Acts as the initial deposit point for tokens before they flow to the destination address.
    - Example: In a `ckBTC → ICP` swap, the source address is the user’s ckBTC wallet.
2. **Trigger for Execution**:
    - When tokens are deposited into the source address, the Vector is triggered to check if predefined conditions (e.g., price thresholds, liquidity availability) are met.
3. **Immutable Identifier**:
    - The source address is permanent and tied to the Vector, ensuring a stable and tamper-proof transaction foundation.

---

### **Things to Know About Source Address and How It Works**

1. **Permanence**:
    - Once created, the source address cannot be changed, ensuring consistency in token flows.
2. **Conditions and Triggers**:
    - The source address works with other Vector parameters, such as:
        - **Destination Address**: Where the tokens go after execution.
        - **Execution Logic**: Conditions like price thresholds, transaction limits, or schedules.
    - Tokens deposited into the source address trigger the system to evaluate whether conditions are met.
3. **Security**:
    - The immutability of the source address ensures that no unauthorized changes can disrupt the transaction process.
4. **Integration with Matching System**:
    - For operations like token swaps, the source address is paired with the destination address of another Vector via the **matching system**, enabling seamless decentralized exchanges.
5. **Reusability in Advanced Workflows**:
    - Source addresses can link to other Vectors’ destination addresses, enabling composable workflows.

---

### **Advantages of Source Address Design**

1. **Stability**:
    - A permanent source address ensures predictable and reliable token flows, avoiding accidental or unauthorized changes.
2. **Automation**:
    - Tokens deposited into the source address automatically trigger the Vector’s execution logic, eliminating manual intervention.
3. **Composability**:
    - By connecting the source address of one Vector to the destination address of another, users can create advanced, multi-step workflows.
    - Example: Tokens swapped in a Vector (`ICP → ckBTC`) can flow into another Vector for `ckBTC → ckETH`.
4. **Security**:
    - The immutability of the source address prevents tampering or misdirection of funds.
5. **Integration with ICP’s Features**:
    - The source address works seamlessly with **Chain-Key Cryptography**, ensuring secure and efficient cross-chain operations.

---

### **Challenges Addressed by Source Address Design**

1. **Error-Prone Manual Processes**:
    - The fixed and automated nature of the source address eliminates human errors, such as sending tokens to the wrong address.
2. **Workflow Fragmentation**:
    - The permanence of the source address simplifies the creation of interconnected workflows, avoiding unnecessary reconfigurations.
3. **Cost Inefficiencies**:
    - By automating execution triggers, the source address reduces the computational overhead associated with manual checks and confirmations.
4. **Liquidity Optimization**:
    - The design ensures that tokens are transferred efficiently based on predefined conditions, optimizing liquidity in decentralized ecosystems.

---

### **Composability of Vectors with Source Addresses**

The **permanent nature** of the source address enables seamless composability within the DeFi Vectors framework. By linking source and destination addresses across Vectors, users can build interconnected workflows.

### **Example: Multi-Step Workflow**

1. **Vector 1**: Swap `ICP → ckBTC`.
    - Source Address: User’s ICP wallet.
    - Destination Address: User’s ckBTC wallet.
2. **Vector 2**: Swap `ckBTC → ckETH`.
    - Source Address: User’s ckBTC wallet (permanent from Vector 1).
    - Destination Address: User’s ckETH wallet.

This composability allows tokens to flow through multiple operations without requiring manual intervention, creating an efficient and automated financial workflow.

---

### **How Source Addresses Boost DeFi with ICP’s Model**

1. **Virtual Finality**:
    - Tokens in the source address are processed internally within the Pylon Canister, achieving **virtual finality** for cost-efficient, high-frequency transactions.
2. **Cross-Chain Interoperability**:
    - Source addresses work with ICP’s **Chain-Key Cryptography**, enabling token flows across blockchains like Ethereum and Bitcoin.
3. **Scalability**:
    - The asynchronous design of ICP ensures that source addresses can handle high transaction volumes without bottlenecks.
4. **Decentralized Governance**:
    - Source addresses are managed under DAOs or user-defined controllers, ensuring transparent and secure workflows.

---

The **source address** is the foundation of every Vector in the DeFi Vectors framework, acting as the immutable starting point for token flows. Its permanence ensures stability and security, while its integration with the matching system and composability features enables advanced financial workflows.

By automating execution and leveraging ICP’s unique architecture, the source address addresses key inefficiencies in traditional DeFi and unlocks innovative possibilities for decentralized finance.

Whether powering automated swaps, lending, or multi-step workflows, the source address is a cornerstone of efficiency and reliability in the ICRC-55 protocol.
