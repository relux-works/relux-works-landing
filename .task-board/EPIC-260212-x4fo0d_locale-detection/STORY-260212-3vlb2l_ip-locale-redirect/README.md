# STORY-260212-3vlb2l: ip-locale-redirect

## Description
Implement IP-based locale auto-detection on the root path (/). When a user hits /, detect their country via IP geolocation, map country to language (AM→hy, GE→ka, RU/BY/KZ/UA→ru, default→en), and redirect to the appropriate language path. Requirements: (1) Must work with Astro SSG — either client-side JS or edge middleware. (2) Fall back to EN if detection fails, IP is unknown, or country not mapped. (3) Respect browser Accept-Language as secondary signal. (4) No paid API — use free geo-IP service or Cloudflare/Vercel headers. (5) Cache detection result in localStorage so subsequent visits skip detection.

## Scope
(define story scope)

## Acceptance Criteria
(define acceptance criteria)
