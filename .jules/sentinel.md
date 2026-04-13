## 2024-05-24 - [CRITICAL] Prevent Basic Auth Credential Leak in URL Logging
**Vulnerability:** The `_sanitize_diagnostic_url` function used `parsed.netloc` to construct URLs for diagnostics and artifacts. This allowed basic authentication credentials (e.g., username and password) provided in the URL to leak into diagnostic metadata and system logs.
**Learning:** `urllib.parse.urlparse` includes basic auth credentials in the `netloc` component. Using `parsed.netloc` in a context meant for safe/diagnostic logging creates an unintended credential leak.
**Prevention:** Instead of using `parsed.netloc`, always reconstruct network locations using `parsed.hostname` (which automatically strips basic authentication parts) along with `parsed.port` if present.
