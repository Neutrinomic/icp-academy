---
slug: "ICRC-7"
title: "ICRC 7"
description: "ICRC-7 (Internet Computer Request for Comments 7) is a minimal yet powerful standard for implementing Non-Fungible Tokens (NFTs) on the Internet Computer (IC)."
content: "ICRC-7 (Internet Computer Request for Comments 7) is a minimal yet powerful standard for implementing Non-Fungible Tokens (NFTs) on the Internet Computer (IC)."
difficulty: Beginner
tags: ["Web3", "NFT", "Blockchain", "ICP"]
---

ICRC-7 (Internet Computer Request for Comments 7) is a minimal yet powerful standard for implementing Non-Fungible Tokens (NFTs) on the Internet Computer (IC).

It lays the groundwork for NFT functionality, allowing developers to create and manage NFTs seamlessly while leaving room for future enhancements through additional standards like ICRC-37, which focuses on more complex operations like approvals.

NFTs exploded onto the scene as the digital collectibles movement took hold, but their functionality on various blockchains has varied widely.

The Internet Computer set out to create a streamlined and efficient NFT standard that could scale with its high-speed, web-ready infrastructure. ICRC-7 emerged as a foundational layer, designed to ensure that NFTs could be handled efficiently and securely on the IC, making it easier to build anything from art collections to tokenized assets.

**Key Components of ICRC-7:**

### 1. Data Representation

- **Accounts:** Each user (or *principal*) on the IC can hold multiple accounts. These are identified by a 32-byte subaccount string. The default subaccount (with all bytes set to 0) is the principal’s primary account, acting like the main wallet address. This structure offers flexibility, allowing users to manage multiple NFT accounts effortlessly.

### 2. Token Identifiers

- **Token IDs:** NFTs under ICRC-7 are identified using natural numbers. This design allows for unlimited and non-contiguous allocation, meaning you don’t need to number your tokens sequentially. It also means you can map other identifiers (like human-readable names) onto these numeric IDs, giving developers the freedom to organize NFTs as they see fit.

### 3. Batch Methods

- **Update Methods:** ICRC-7 supports batch processing, where multiple requests can be handled at once. Each output is linked positionally to its corresponding input, so you always know which result belongs to which request. If an error occurs during batch processing, the system stops further execution of that batch—but previously processed requests continue running. Efficiency and error-handling go hand-in-hand here.
- **Query Methods:** Similarly, batch queries allow users to ask multiple questions at once. These queries don’t modify the state of the ledger, which makes them less risky than updates, but they follow the same batch process logic for efficiency.

### 4. Metadata and Queries

- **Metadata Retrieval:** The ICRC-7 standard includes functions like **`icrc7_collection_metadata`** to pull up information about the entire NFT collection—things like names, symbols, descriptions, logos, total supply, and any constraints like supply caps or batch size limits. This ensures that NFTs can have rich metadata while maintaining performance.
- **Specific Queries:** Functions such as **`icrc7_owner_of`**, **`icrc7_balance_of`**, and **`icrc7_tokens_of`** are designed to get more granular information, such as who owns which tokens, how many tokens are in a given account, and which specific tokens are associated with a principal.

### 5. Transaction and Error Handling

- **Transactions:** Every transaction is logged in the ledger, and the structure of these logs follows the rules laid out by ICRC-3, which defines how transactions should be recorded. This keeps everything transparent and consistent across the ecosystem, with every NFT transaction written into an immutable ledger.
- **Errors:** ICRC-7 handles common errors like unauthorized access or invalid token IDs with precision. The system is built to prevent crashes and offer robust error reporting, so developers can catch and resolve issues without compromising the integrity of the network.

### 6. Security Considerations

- **DoS Attacks:** To guard against denial-of-service (DoS) attacks, ICRC-7 recommends enforcing limits on the number of active approvals and implementing rate limits on transactions. This prevents malicious users from overwhelming the system with a flood of requests.
- **Web Application Security:** Applications that use ICRC-7 should adhere to best practices in web security, especially when dealing with user-generated content like images and metadata. Protecting against vulnerabilities like cross-site scripting (XSS) is critical when building NFT platforms on the IC.

### 7. Migration and Compatibility

- **Legacy Systems:** ICRC-7 provides guidelines for migrating from older NFT standards, especially those using different types of account identifiers. However, it leaves the details of migration strategies to the discretion of developers, giving them the freedom to implement the best approach for their specific use case.

ICRC-7 is the foundation for NFT development on the Internet Computer, providing a minimal, efficient standard that covers the basics while allowing for future expansion through standards like ICRC-37. It enables developers to create robust NFT platforms, whether for simple digital art collections or more complex tokenized assets.

As the Internet Computer evolves, expect more specialized standards to build on ICRC-7’s solid framework, pushing NFT technology forward in ways we haven’t even imagined yet.

**Further Exploration:**

- How does ICRC-7 compare to Ethereum’s ERC-721 standard in terms of efficiency and scalability?
- Explore how ICRC-37 expands on ICRC-7 to introduce approval mechanisms and more complex NFT interactions.
