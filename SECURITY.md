# Security & Privacy Policy for Client Hunter

This document outlines the security architecture and privacy considerations for the Client Hunter tool.

## 1. Data Protection
- **Encryption at Rest:** All sensitive data, including OAuth access tokens and refresh tokens, must be encrypted before being stored in the database.
- **Environment Variables:** Never hardcode API keys or secrets. Use `.env` files and ensure they are excluded from version control via `.gitignore`.

## 2. Social Media API Compliance
- **Official APIs Only:** This tool is designed to use official OAuth2 and API endpoints. Avoid using automated browser scraping (like Puppeteer/Playwright for scraping) as it violates most Social Media Terms of Service and can lead to account bans.
- **Rate Limiting:** Adhere strictly to API rate limits to maintain service stability and reputation.

## 3. Privacy & Ethics
- **GDPR/CCPA:** When collecting lead information (emails, phone numbers), ensure you are complying with regional privacy laws. Only collect data that is publicly shared by the user for business inquiries.
- **Least Privilege:** Request the minimum required permissions during OAuth (e.g., `r_liteprofile` instead of `r_fullprofile`).

## 4. Secure Failures
- Error messages displayed to the user or returned via API must be generic. Log the detailed error/stack trace internally for debugging, but never expose it to the client.

## 5. Security Enhancements (Checklist)
- [ ] Implement CSP (Content Security Policy) headers.
- [ ] Use `helmet` middleware for basic header security.
- [ ] Regular dependency audits (`npm audit` or `pnpm audit`).
- [ ] Input sanitization for all search queries and location filters.
