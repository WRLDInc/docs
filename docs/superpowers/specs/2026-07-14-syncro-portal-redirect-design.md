# Syncro portal redirect design

## Scope

Replace the embedded Syncro login and ticket forms with clear links to the WRLD Syncro end-user portal. Confirm the documentation site's Google Tag Manager configuration matches the tag used by `wrld.tech`.

## User flow

- The client-login page sends users to the canonical Syncro end-user portal in a new tab.
- The submit-ticket page sends users to the same portal, where authentication and ticket creation are handled by Syncro.
- Existing email and telephone fallbacks remain available.

## Reliability

Removing copied third-party forms avoids stale form actions, missing anti-forgery fields, and future Syncro markup changes. Syncro owns authentication, validation, and ticket submission after the redirect.

## Verification

- Confirm the portal URL resolves to the WRLD Syncro end-user login.
- Preview the Mintlify site and exercise both redirect buttons.
- Authenticate with available test credentials and submit a test ticket; if credentials are unavailable, verify the authenticated boundary and report that limitation precisely.
- Confirm the Google tag loaded by `wrld.tech` matches `docs.json` and appears in the rendered documentation site.
- Run Mintlify link validation and a repository security scan before committing the final implementation.
