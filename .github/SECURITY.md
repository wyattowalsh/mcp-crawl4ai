# Security Policy

<div align="center">

# 🔒 Crawl4AI-MCP Security Policy

[![Security Policy Banner](https://img.shields.io/badge/Security-Policy-red?style=for-the-badge)](https://github.com/wyattowalsh/crawl4ai-mcp/security/policy)

</div>

---

## Reporting a Vulnerability

The Crawl4AI-MCP team takes security vulnerabilities seriously. We appreciate your efforts to responsibly disclose your findings and will make every effort to acknowledge your contributions.

### Reporting Process

**For all security vulnerabilities (critical or low severity):**

1. Use GitHub private vulnerability reporting: [https://github.com/wyattowalsh/crawl4ai-mcp/security/advisories/new](https://github.com/wyattowalsh/crawl4ai-mcp/security/advisories/new)
2. Include:
   - A detailed description of the vulnerability
   - Steps to reproduce or proof-of-concept
   - Potential impact of the vulnerability
   - Any suggested mitigations (if you have them)
3. **Do not open public GitHub issues for vulnerabilities.**

For non-security bugs, use the standard [Bug Report template](https://github.com/wyattowalsh/crawl4ai-mcp/issues/new?template=bug_report.yml).

### What to expect

- **Acknowledgment:** We aim to acknowledge receipt of your vulnerability report within 48 hours.
- **Updates:** We'll provide regular updates about our progress addressing the vulnerability.
- **Disclosure:** We'll work with you to determine an appropriate disclosure timeline.
- **Credit:** With your permission, we'll credit you in the vulnerability disclosure (unless you prefer to remain anonymous).

## Security Considerations for Users

When using Crawl4AI-MCP, please consider the following security recommendations:

### Web Crawling Responsible Use

1. **Respect Terms of Service:** Ensure your crawling activities comply with the terms of service of the websites you crawl.
2. **Rate Limiting:** Configure appropriate rate limiting to avoid overwhelming target websites.
3. **Robots.txt:** Respect robots.txt directives by enabling the `respect_robots_txt` configuration option.
4. **User-Agent Identification:** Use an identifiable user-agent that allows site owners to contact you if needed.

### Server Security

1. **Authentication:** Implement authentication for your MCP server when deployed in production.
2. **API Keys:** Rotate API keys regularly if you've implemented authentication.
3. **HTTPS:** Always use HTTPS when exposing your MCP server over the internet.
4. **Firewall Rules:** Restrict access to your MCP server using appropriate firewall rules.
5. **Input Validation:** All user-provided URLs and parameters are validated, but exercise caution when integrating with untrusted sources.

### Content Security

1. **Sanitization:** Content extracted by Crawl4AI-MCP is not automatically sanitized for XSS or other injection attacks. If displaying this content in web applications, ensure proper sanitization.
2. **Browser Rendering:** When using browser-based crawling with JavaScript execution, be aware that this has a larger attack surface than basic crawling.

## Vulnerability Disclosure Process

Our disclosure policy is as follows:

1. Security vulnerabilities will be patched promptly once validated.
2. Security advisories will be published through GitHub's security advisory feature.
3. A corresponding CVE will be requested when appropriate.
4. Users will be notified through:
   - GitHub security advisories
   - Release notes
   - Project discussions

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.3.x   | :white_check_mark: |
| < 0.3.0 | :x:                |

We only provide security updates for the latest minor version. Please update to the latest version to ensure you have all security patches.

## Security Features

Crawl4AI-MCP includes the following security features:

- **Content Size Limits:** Prevents memory exhaustion from excessively large web pages
- **Timeout Controls:** Configurable timeouts for all network operations
- **Input Validation:** Strict validation of all inputs via Pydantic models
- **Rate Limiting:** Built-in mechanisms to control request rates
- **Secure Defaults:** Secure defaults for all configuration options

## Security Development Lifecycle

The Crawl4AI-MCP project follows these security practices:

1. **Code Reviews:** All code changes undergo security-focused review
2. **Dependency Scanning:** Regular monitoring for vulnerabilities in dependencies
3. **Static Analysis:** Automated static analysis tools run on all code changes
4. **Testing:** Security-focused testing for authentication and input validation

---

Thank you for helping keep Crawl4AI-MCP and its community safe! 
