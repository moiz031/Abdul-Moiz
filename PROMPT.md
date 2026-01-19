# Secure Client Hunter - AI Builder Prompt

Use the following prompt with a high-capability AI model (like Gemini 1.5 Pro or GPT-4o) to build the core of your client hunting tool. This prompt is designed by **Sentinel** 🛡️ to ensure high performance, security, and privacy compliance.

---

## 🚀 The Prompt

Act as an expert Senior Full-Stack Engineer and Security Architect. Your goal is to build a "Client Hunting Tool" that identifies potential leads from social media platforms (Facebook, Instagram, Twitter, LinkedIn) and Gmail.

### Core Features to Implement:
1. **OAuth2 Integration:** Set up secure OAuth2 flows for Facebook, Instagram, Twitter, LinkedIn, and Gmail. DO NOT use password scraping; use official APIs for "Access properly".
2. **Lead Discovery Engine:** Create a service that scans for keywords like "hiring", "need SEO", "looking for digital marketer" in posts and ads from the last 12-24 hours.
3. **Smart Filtering:** Filter leads based on:
   - **Niche:** (e.g., Real Estate, E-commerce, Local Business)
   - **Location:** (City, Country, or Global)
   - **Service Type:** (SEO, Digital Marketing, Web Development)
4. **Data Extraction:** Extract contact info (Email, Phone) ONLY when publicly available or provided through API permissions.
5. **AI Outreach Assistant:** Use an LLM to analyze the lead's post and generate a personalized outreach strategy and message.
6. **Dashboard:** A clean, professional "Light Theme" UI to manage leads, view statuses, and track outreach.

### Security & Optimization Requirements (Mandatory):
- **Secret Management:** Use environment variables for all API keys and secrets.
- **Input Validation:** Use `Zod` or `Joi` to validate all user inputs and API responses.
- **Rate Limiting:** Implement strict rate limiting to avoid getting banned by social media APIs.
- **Data Privacy:** Encrypt all stored OAuth tokens at rest using AES-256.
- **Performance:** Use background workers (like BullMQ or similar) for lead scanning to keep the UI responsive.
- **Fail Securely:** Ensure the application does not leak stack traces or sensitive info in error messages.

### Tech Stack Recommendation:
- **Backend:** Node.js (TypeScript) with Express or Fastify.
- **Frontend:** React or Next.js with Tailwind CSS (Light Theme).
- **Database:** PostgreSQL (for lead data) and Redis (for queue/caching).

---

## 🛡️ Sentinel's Advice to User

*“As Sentinel, I've designed this prompt to protect you. Building a tool that extracts data from social platforms carries risks. Always use official APIs to avoid account bans and ensure you comply with GDPR/CCPA regulations regarding lead data.”*
