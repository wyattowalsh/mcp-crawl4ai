from urllib.parse import urlparse
parsed = urlparse('http://[::1]:8080/path')
netloc = parsed.hostname or ""
if ":" in netloc:
    netloc = f"[{netloc}]"
if parsed.port:
    netloc = f"{netloc}:{parsed.port}"
print(f"{parsed.scheme}://{netloc}{parsed.path}")
