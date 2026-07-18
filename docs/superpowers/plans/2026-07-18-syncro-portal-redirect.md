# Syncro portal redirect implementation plan

1. Replace the embedded login form in `support/client-login.mdx` with a single button linking to `https://wrld.syncromsp.com/portal`.
2. Replace the new-ticket and lookup forms in `support/submit-ticket.mdx` with a portal sign-in button and explain that ticket creation requires authentication.
3. Update the Mintlify Google Tag Manager integration from the stale container to the `GTM-KX6MKJ2` container loaded by `wrld.tech`.
4. Validate MDX links and configuration with Mintlify.
5. Preview the documentation site and manually verify both support redirects and the injected GTM container.
6. Run the required security scan, commit, push, and update the pull request.
