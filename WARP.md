# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project overview

This is the public **WRLD Tech documentation site** for WRLD Tech Co. (WRLD Inc.), covering WRLD.tech, WRLD.host, WRLD.design, WRLD.ai, WRLD.support, and related onboarding/tooling. It is a [Mintlify](https://mintlify.com) site authored in MDX and configured via `docs.json`. It ships to [help.wrld.tech](https://help.wrld.tech).

The canonical WRLD service directory, brand colors, and typography used by these docs are defined in [`WRLDInc/wrld.one`](https://github.com/WRLDInc/wrld.one) (an Astro + Cloudflare Workers site). Keep brand tokens in `design.mdx` and `wrld-tech/brand-guide.mdx` consistent with that source.

## Development commands

```bash
# Install the Mintlify CLI (requires Node.js 19+)
npm i -g mint

# Run the local dev server (default: http://localhost:3000)
mint dev

# Run on a custom port
mint dev --port 3333

# Upgrade the CLI
mint update

# Validate internal links
mint broken-links
```

## Architecture

### Configuration
- `docs.json` — site configuration: navigation tabs, theme colors, logos, navbar, footer, global anchors, integrations (GTM, telemetry).

### Content structure
All pages are `.mdx` with YAML frontmatter.

- `index.mdx` — homepage
- `about.mdx` — WRLD Tech Co. mission, vision, values
- `quickstart.mdx` — customer quickstart
- `development.mdx` — contributor guide for this docs repo
- `design.mdx` — brand tokens mirrored from `wrld.one`
- `infrastructure.mdx` — stack / infrastructure overview
- `wrld-host/` — hosting service docs
- `wrld-tech/` — technology service docs (includes brand guide)
- `wrld-design/` — design division docs (brand, tokens, logo usage)
- `wrld-ai/` — AI service docs
- `ai-tools/` — Claude Code, Cursor, Warp, Windsurf guides
- `onboarding/` — Microsoft 365, Google Workspace, domain onboarding
- `tools/` — internal tools (SecureSend, etc.)
- `support/` — help center, tickets, security, VPN setup

### Assets
- `logo/` — light/dark SVG logos
- `images/` — documentation images
- `favicon.svg`

## Navigation

Navigation is tab-based, configured in `docs.json` under `navigation.tabs`. Each tab contains groups of pages. To add a new page:

1. Create the `.mdx` file under the appropriate directory.
2. Add the page path (without the `.mdx` extension) to the relevant group in `docs.json`.
3. Preview with `mint dev` and verify with `mint broken-links`.

## Deployment

Changes merged to the default branch auto-deploy via Mintlify's GitHub integration. No manual build step is required.
