---
slug: "verifiable-credentials"
title: "Verifiable Credentials"
description: "Verifiable Credentials (VCs) on the Internet Computer are privacy-preserving, cryptographically secure digital proofs that allow users to demonstrate facts about themselves, such as being a unique human or over 18, without revealing unnecessary personal data."
content: "Launched in June 2024, Verifiable Credentials extend Internet Identity with W3C-standardized, JWT-based credentials that can be issued, held, and verified on ICP. They support selective disclosure, walletless use via passkeys, and new applications such as Proof-of-Unique-Humanity (PoUH), bot resistance, and KYC-lite access."
difficulty: Beginner
tags: ["ICP", "Blockchain", "Verifiable Credentials", "Identity", "Privacy", "Internet Identity"]
---

**Verifiable Credentials (VCs)** on the **Internet Computer (ICP)** are digital credentials that let users prove facts about themselves without revealing more information than necessary.

They extend ICP’s identity stack with privacy-preserving, cryptographically signed proofs, following the **W3C Verifiable Credentials standard**.  

Launched in **June 2024** as an early-stage feature, VCs allow ICP users to obtain credentials from trusted issuers, store them with **Internet Identity (II)**, and present them to applications as needed. Examples include proving you are over 18, verifying you are a unique human, or showing membership in a community.  

---

### Why Verifiable Credentials Matter

Online identity has always been a double-edged sword. In Web2, platforms like Google or Facebook act as identity providers, but this centralization sacrifices privacy and creates monopolies. In Web3, blockchain accounts are pseudonymous but vulnerable to bots, sybils, and abuse.  

VCs bridge this gap by enabling:  

- **Privacy-preserving identity proofs**: Users can reveal only what is needed.  
- **Bot resistance**: Apps can check uniqueness without forcing KYC.  
- **Composability**: The same credential can be reused across multiple dApps.  
- **Walletless experience**: No need for separate crypto wallets; VCs integrate into Internet Identity.  

In short, VCs give developers a flexible way to build trust into applications while respecting user privacy.

---

### What Verifiable Credentials Are and How They Work

VCs on ICP follow the W3C model: **Issuer → Holder → Verifier**, integrated with Internet Identity.  

1. **Issuer**  
   - A trusted entity (e.g., DecideAI, a DAO, a university, a government service).  
   - Issues a signed credential in **JWT format**, compatible with W3C standards.  

2. **Holder (User)**  
   - The user receives and stores the credential via **Internet Identity**.  
   - ICP supports passkeys and device authentication, making the experience walletless.  

3. **Verifier (Relying Party)**  
   - A dApp, DAO, or service that checks the credential.  
   - Verifies the issuer’s signature cryptographically, ensuring it is valid.  

4. **Identity Provider**  
   - Internet Identity issues per-application pseudonyms (derived from a master identity).  
   - Ensures no single verifier can correlate a user across apps.  

**Consent flow**: Before a credential is issued, the user must agree to a consent message provided by the issuer. ICP’s VCs are built around explicit user approval.  

**Technical details**:  

- Issuers implement APIs with endpoints like `vc_consent_message`, `derivation_origin`, `prepare_credential`, and `get_credential`.  
- Credentials are signed JWTs, stored securely and tied to a user’s II anchor.  
- Selective disclosure allows users to present only specific fields (e.g., proof of over-18) without exposing full data.  

---

### Advantages and Innovations

- **Privacy-first identity**  
  - Users disclose only what is strictly required.  
  - Per-application pseudonyms prevent cross-site tracking.  

- **Walletless by design**  
  - Walletless does not mean “no tool,” but that users don’t need a traditional crypto wallet.  
  - Internet Identity with passkeys manages credential storage.  

- **Reusable across dApps**  
  - Once issued, a credential can be used with multiple services.  

- **Standards-based**  
  - Built on W3C Verifiable Credentials, ensuring compatibility with broader digital identity ecosystems.  

- **Selective disclosure**  
  - Share proofs of attributes (like “over 18”) without revealing unnecessary details.  

- **Developer-friendly**  
  - Issuer and verifier APIs documented in ICP’s developer portal.  
  - Relying parties can integrate VCs without reinventing identity logic.  

---

### Challenges and Risks Involved

- **Trust in issuers** - The value of a credential depends on the reputation and reliability of the issuer.  

- **Revocation and expiry** - While supported in principle, adoption of revocation lists and expiry mechanisms is still limited.  

- **User education** - Users must understand what a credential is, why consent is required, and how to manage it.  

- **Adoption hurdles** - dApps need to integrate VC checks for the system to gain traction.  

- **Regulatory considerations** - If used for KYC, issuers may need to comply with laws. This could limit adoption in certain regions.  

---

### Verifiable Credentials in ICP Ecosystem

Verifiable Credentials are already being tested and used in ICP applications:  

- **OpenChat + DecideAI**  
  - Demonstrated **Proof-of-Unique-Humanity (PoUH)**, where each user proves uniqueness without sharing personal details.  
  - Helps communities resist spam and bots.  

- **Bot-resistant DAOs and communities**  
  - DAOs can require a VC to ensure each participant is a unique human, avoiding sybil attacks.  

- **KYC-lite DeFi access**  
  - Exchanges or lending protocols can request a VC that proves “over 18” or “KYC verified,” without storing sensitive data.  

- **Membership proofs**  
  - Communities or services can issue VCs for members, granting access to exclusive content or benefits.  

These examples show how VCs make **trust programmable** on ICP.

---

### Comparisons

- **Ethereum and other blockchains**  
  - Identity is typically tied to wallets and addresses.  
  - VC projects like Ceramic or SpruceID exist, but they are external and not natively integrated.  

- **Web2 OAuth (Google, Facebook logins)**  
  - Centralized, leak-prone, and correlation-heavy.  

- **ICP VCs**  
  - Natively integrated with Internet Identity.  
  - Privacy-preserving by default, with selective disclosure.  
  - Walletless UX with passkeys.  
  - Standards-based and interoperable.  


Verifiable Credentials bring **trust, privacy, and usability** to the Internet Computer’s identity system. By combining W3C standards with Internet Identity’s pseudonymous anchors, ICP provides developers with a way to build secure, bot-resistant, and user-friendly applications.  

Launched in **June 2024**, VCs are still early, but they represent a major step in solving one of Web3’s hardest problems: how to verify who or what is behind an account without sacrificing decentralization or privacy.  

As more issuers, verifiers, and dApps adopt VCs, ICP is positioned to lead in privacy-first digital identity, enabling a new wave of trustworthy, human-centric applications.

---

### Further Exploration

- Read the [Verifiable Credentials Overview](https://internetcomputer.org/docs/building-apps/network-features/verifiable-credentials/overview) in the Internet Computer documentation.  
- Learn how to [become an issuer](https://internetcomputer.org/docs/building-apps/network-features/verifiable-credentials/issuer) and issue credentials for your dApp.  
- Explore how to [integrate as a relying party](https://internetcomputer.org/docs/building-apps/network-features/verifiable-credentials/relying-party) and verify user credentials.  
- Try an OpenChat PoUH demo to see VCs in action.  
- Join discussions on the [DFINITY Forum](https://forum.dfinity.org/) about VCs, PoUH, and future identity standards on ICP.  
