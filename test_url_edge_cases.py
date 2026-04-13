from urllib.parse import urlparse

def _sanitize_diagnostic_url(url: str) -> str | None:
    if not isinstance(url, str) or not url:
        return None
    parsed = urlparse(url)
    if parsed.scheme not in ("http", "https") or not parsed.netloc:
        return None

    netloc = parsed.hostname or ""
    try:
        if parsed.port:
            netloc = f"{netloc}:{parsed.port}"
    except ValueError:
        # e.g. Port out of range 0-65535
        # Fall back to splitting netloc if port access fails? Wait, no.
        # If port access fails, we might just not include the port or drop the URL.
        # But wait, we can also extract the port manually.
        pass

    safe_url = f"{parsed.scheme}://{netloc}{parsed.path or ''}"
    return safe_url

print(_sanitize_diagnostic_url('http://user:password@example.com/path'))
print(_sanitize_diagnostic_url('http://user:password@example.com:8080/path'))
print(_sanitize_diagnostic_url('http://example.com/path'))
print(_sanitize_diagnostic_url('http://[::1]:8080/path'))
