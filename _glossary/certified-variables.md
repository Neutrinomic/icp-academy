---
slug: "certified-variables"
title: "Certified Variables"
description: "Certified variables on the Internet Computer (ICP) are canister state values that return cryptographically signed query responses, allowing clients to verify data directly against subnet consensus."
content: "Certified variables let canisters provide query results along with digital certificates generated through chain-key cryptography. This ensures that even fast, non-consensus query calls return data that users and applications can independently verify as authentic and tamper-proof."
difficulty: Beginner
tags: ["ICP", "Blockchain", "Certified Variables", "Security", "Query Certification", "Chain Key Cryptography"]
---

**Certified variables** on the **Internet Computer Protocol (ICP)** are a mechanism for ensuring that query responses are both fast and trustworthy. They allow canisters (smart contracts) to attach cryptographic proofs to specific pieces of state, enabling clients and gateways to verify that the data returned truly reflects the canister’s consensus-agreed state.

---

### Why Certified Variables Matter

In ICP, there are two types of calls:  
- **Update calls**: Go through full consensus, making them secure but relatively slow.  
- **Query calls**: Run locally on a replica, making them fast but, by default, unverifiable.  

The problem: if a malicious node or gateway serves a query, there’s no inherent guarantee that the result matches the true state. Certified variables solve this by letting canisters include **cryptographic certificates** with query responses. This way, even quick queries can be trusted.

This feature is critical for real-world apps. From delivering web content to verifying balances in DeFi platforms, certified variables ensure users don’t need to blindly trust an intermediary; they can validate responses directly.

---

### How Certified Variables Work

The system relies on **chain-key cryptography**, the cryptographic backbone of ICP:

1. **Setting certified data**  
   - Certified variables are defined and stored during an **update call**, which passes through consensus.  
   - Once set, the values are included in the subnet’s canonical state tree.

2. **Certificate creation**  
   - The subnet collectively signs the root hash of the state tree using threshold cryptography.  
   - This certificate proves that the certified variable was agreed upon by the subnet.

3. **Serving queries**  
   - When a client issues a **query call**, the canister responds with both the value and the certificate.  
   - The certificate links back to the subnet’s public key, which is globally verifiable under ICP’s chain-key system.

4. **Validation by clients**  
   - The client checks the certificate against the subnet’s public key.  
   - If valid, the client knows the data is authentic, even though the query didn’t go through consensus.

This workflow creates the best of both worlds: **fast queries** with **blockchain-level trust**.

---

### Advantages of Certified Variables

Certified variables bring multiple benefits to developers and users:  

- **Speed with trust**: Queries stay fast while remaining verifiable.  
- **End-to-end security**: Clients don’t need to trust gateways or individual replicas.  
- **Efficient validation**: No need to download or replay blockchain history; a single signature is enough.  
- **Scalable architecture**: Works seamlessly with ICP’s asynchronous design.  
- **Flexibility**: Developers can decide which pieces of data to certify.  

---

### Challenges and Limitations

Despite their advantages, certified variables introduce some considerations:  

- **Developer complexity**: For anything beyond simple values, developers must design authenticated data structures, like Merkle trees, to prove membership efficiently.  
- **Query-only availability**: Certificates can only be served in queries, not updates.  
- **Performance overhead**: Adding certification logic may introduce extra computation, especially when certifying large sets of data.  
- **Design trade-offs**: Developers must balance which data to certify to avoid unnecessary cost.  

---

### Certified Variables in Action

Certified variables are not just theoretical; they already underpin key parts of ICP:  

- **Certified Assets**  
  - Frontend files (HTML, JS, CSS, images) served by ICP canisters are bundled with certificates.  
  - Browsers validate these certificates, guaranteeing content integrity.  

- **Internet Identity**  
  - Anchors and authentication rely on certified variables.  
  - Prevents malicious gateways from spoofing or altering user login data.  

- **DeFi Platforms**  
  - Apps like ICPSwap or KongSwap can certify pool balances and token data, ensuring users see authentic information without risk of manipulation.  

- **Governance Dashboards**  
  - Neutrinite DAO or NNS frontends can present voting and balance data with certified trust.  

---

### Comparative Analysis

To see why this matters, compare ICP with other blockchains:  

- **Ethereum**  
  - Query data usually comes from providers like Infura or Alchemy, which users must trust. No built-in certification exists for off-chain queries.  

- **Solana**  
  - Offers fast queries, but without standardized certification tied directly to consensus.  

- **Polkadot / Cosmos**  
  - State proofs exist, but verifying them in applications is complex and not tightly integrated into dApp workflows.  

- **Internet Computer**  
  - Certification is protocol-native. Every query can be cryptographically proven valid against subnet consensus.  

This makes ICP uniquely suited for hosting web-scale applications where **speed and trust** must go hand-in-hand.

---


Imagine you’re using a DeFi dashboard on your phone to check liquidity pool balances.  
- Without certified variables, you’re trusting that the gateway hasn’t been tampered with.  
- With certified variables, the dashboard receives the balance plus a certificate.  
- Your device can verify the proof in milliseconds, giving you both **speed** and **security** - a Web2-like experience with blockchain guarantees.  


### Technical Implementation (Developer View)

From a developer’s perspective, working with certified variables involves:  

1. **Setting certified data**  
   - Done in an update method: `CertifiedData.set(<hash>)`.  
   - This value is included in the certified state tree.  

2. **Exposing data in queries**  
   - In a query method, developers return both the value and the certificate.  
   - Certificates are fetched using APIs like `CertifiedData.getCertificate()`.  

3. **Client-side validation**  
   - Web apps or wallets validate the certificate against the subnet’s public key.  
   - If valid, the data can be trusted.  

This pattern is widely used in certified asset canisters and Internet Identity.  

---

### Use Cases of Certified Variables

- **DeFi Applications**: Ensure token balances and pool states shown to users are genuine.  
- **Identity Systems**: Authenticate anchors securely for Internet Identity.  
- **Content Delivery**: Guarantee integrity of web assets hosted entirely on ICP.  
- **Dashboards and DAOs**: Present voting and governance data without relying on centralized servers.  


Certified variables are a **cornerstone of security and usability** on the Internet Computer. They close the gap between fast but unverifiable queries and slow but secure updates, allowing dApps to serve data that is both quick and cryptographically guaranteed.  

By combining **chain-key cryptography**, **threshold signatures**, and **protocol-native certification**, ICP enables web-like performance without sacrificing trust. From DeFi dashboards to identity services, certified variables make it possible to build decentralized apps that are as responsive as traditional web apps but far more secure.  

---

### Further Exploration

- Read about [Certified Data in Motoko](https://internetcomputer.org/docs/current/motoko/main/certified-data).  
- Explore [Certified Assets](https://internetcomputer.org/docs/current/developer-docs/frontend/certified-assets).  
- Learn how [Internet Identity](https://internetcomputer.org/internet-identity) uses certified variables.  
- Review [Query vs Update calls](https://internetcomputer.org/docs/current/references/ic-interface-spec).  
- Join conversations on the [DFINITY Forum](https://forum.dfinity.org/).  
