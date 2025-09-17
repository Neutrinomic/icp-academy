---
slug: "HTTPS-Interface"
title: "HTTPS Interface"
description: "The HTTPS interface on the Internet Computer (ICP) lets canisters serve websites and APIs securely over HTTPS, so users access dApps with the same safety and familiarity as any traditional website."
content: "Through the HTTPS interface, canisters on ICP can deliver both frontend and backend content directly to browsers using HTTPS, ensuring secure, encrypted, and decentralized interactions without relying on centralized web servers."
difficulty: Beginner
tags: ["ICP", "Blockchain", "HTTPS Interface", "Security", "Web Hosting", "Canisters"]
---

**The HTTPS interface** on the **Internet Computer Protocol (ICP)** makes it possible for canisters to serve web content directly over HTTPS. This allows decentralized applications (dApps) to look and feel like traditional websites while remaining hosted fully on the blockchain.

Users get the same security guarantees they expect from the modern web, and developers can build without depending on external web servers or cloud services.

---

### What HTTPS Means

**HTTPS** stands for HyperText Transfer Protocol Secure. It is the standard for secure communication between browsers and websites. HTTPS uses **Transport Layer Security (TLS)** to encrypt data so that it cannot be read or modified by attackers during transmission.  

Whenever you log into a bank website or shop online, HTTPS ensures that your connection is private and authentic. On ICP, HTTPS extends this protection to blockchain-hosted applications, bridging Web2 familiarity with Web3 decentralization.

Think of a canister on ICP as a **mini web server inside the blockchain**. With the HTTPS interface, this web server can speak the same secure language as your browser. That means you can visit a decentralized app on ICP just like you would visit any normal website, with the green padlock in your browser confirming the connection is safe.

---

### How the HTTPS Interface Works

The HTTPS interface is made possible through the cooperation of several ICP components:  

1. **User request**  
   - A user types a URL for a dApp hosted on ICP into their browser.  

2. **Boundary nodes**  
   - The request first goes to a boundary node, which is part of ICP’s public infrastructure.  
   - The boundary node acts as a gateway, handling HTTPS traffic from the browser and routing it to the correct canister.  
   - It also attaches cryptographic certificates that prove the data originated from the intended canister.  

3. **Canister response**  
   - The canister, acting as both frontend and backend, serves the requested content.  
   - This can be static files like HTML and CSS, or dynamic responses from application logic.  

4. **Browser verification**  
   - The browser checks the TLS certificate presented by the boundary node.  
   - Once validated, it displays the site securely with the HTTPS padlock.  

5. **Certified assets**  
   - For extra trust, ICP uses **certified assets**, where files are signed by the subnet consensus.  
   - Browsers can verify these signatures to confirm that content was not altered by a malicious node or gateway.  

This architecture allows ICP to integrate with the existing web while retaining decentralization.

---

### Benefits of the HTTPS Interface

1. **End-to-end security**  
   - All communication between user browsers and ICP canisters is encrypted and authenticated.  

2. **Familiar user experience**  
   - Users access blockchain dApps with the same HTTPS padlock and trust signals they see on normal websites.  

3. **Full decentralization**  
   - Both frontend and backend code are hosted on the blockchain, reducing reliance on centralized infrastructure.  

4. **Reduced attack surface**  
   - Removing traditional servers means fewer points of failure and less risk of data breaches.  

5. **Web-native integration**  
   - Developers can deploy dApps as if they were websites, without needing special plugins or custom browsers.  

---

### Challenges and Current Limitations

- **Dependency on Certificate Authorities (CAs)**  
  - Browsers require TLS certificates issued by centralized CAs. ICP gateways must still use these, which introduces a small centralized component.  

- **Browser expectations**  
  - Since browsers are built for a client-server web model, ICP must adapt its blockchain responses into HTTPS-compliant communication.  

- **Performance considerations**  
  - Large or highly dynamic dApps must optimize how they serve assets from canisters to ensure speed.  

- **Complex deployments**  
  - Developers managing large projects must structure certified assets and canisters carefully for efficient delivery.  

The community continues to explore improvements, such as more direct browser integration with ICP’s cryptographic system.

---

### How is it Relevant

- You can access ICP dApps through your browser with the same confidence as any traditional website.  
- The HTTPS padlock means the data between you and the blockchain is private and secure.  
- You do not need plugins or special browsers; HTTPS makes decentralized apps accessible in the same way as Web2 apps.  

- Deploy static frontend files (HTML, JS, CSS) directly into canisters.  
- Use the HTTPS interface and **certified assets** to ensure browsers can verify integrity.  
- No need for external hosting, CDNs, or web servers. The entire application stack, from frontend to backend logic, can live on ICP.  
- Benefit from seamless integration with ICP’s security model, including chain-key cryptography and certified variables.  

---

### How it works on ICP

- **OpenChat**  
  A messaging platform where both frontend and backend run inside ICP canisters, accessed securely by users through browsers over HTTPS.  

- **OISY Wallet**  
  Provides a decentralized wallet interface directly from ICP without relying on centralized hosting.  

- **Internet Identity**  
  Uses HTTPS to securely serve login flows between users and authentication canisters.  

- **Neutrinite DAO dashboards**  
  Governance dashboards delivered over HTTPS ensure users get authentic, verifiable governance data.  

These examples show how ICP’s HTTPS interface supports a wide range of real applications.  

---

### Comparisons with Traditional Web Hosting

- **Traditional model**  
  - Frontend hosted on centralized servers or CDNs.  
  - Backend logic hosted on separate infrastructure.  
  - Security depends on cloud providers and centralized servers.  

- **ICP with HTTPS interface**  
  - Both frontend and backend hosted directly on the blockchain.  
  - HTTPS ensures encrypted, authenticated communication.  
  - Users access dApps without trusting a centralized intermediary.  

This shift reduces reliance on cloud hosting and places applications fully on a decentralized network.

---

Imagine a decentralized marketplace built on ICP:

- The storefront website is served directly from a canister over HTTPS.  
- Product listings, transactions, and payment processing are handled by backend canisters.  
- Users see the HTTPS padlock in their browser, assuring them the connection is secure.  
- All code and data live on ICP, with no centralized servers involved.  

This creates a familiar Web2-like experience while maintaining Web3 decentralization and trust.

The HTTPS interface is a key feature of ICP’s design. By letting canisters serve web content directly to browsers over secure, encrypted connections, ICP combines the usability of the traditional web with the decentralization of blockchain.  

For users, this means confidence that their connection is secure. For developers, it means the ability to host entire applications fully on the blockchain. As ICP grows, the HTTPS interface will continue to be central to bridging Web2 familiarity with Web3 innovation.

---

### Further Exploration

- Review the [HTTP Gateway Protocol specification](https://internetcomputer.org/docs/current/references/ic-interface-spec#http-gateway-protocol) to see how browsers reach canisters through boundary nodes.  
- Learn how to [serve certified assets](https://internetcomputer.org/docs/current/developer-docs/backend) so that websites hosted on ICP are verifiable in the browser.  
- Explore the HTTPS Outcalls overview to understand how canisters make outbound requests to external APIs.  
- Read the [Security best practices for outcalls](https://internetcomputer.org) to learn about size limits, IPv6 requirements, and safety tips.
