# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a **Mintlify documentation site** for WRLD Tech services (WRLD.host, WRLD.tech, WRLD.ai). Content is written in MDX format and configured via `docs.json`.

## Development Commands

```bash
# Install Mintlify CLI (requires Node.js 19+)
npm i -g mint

# Run local dev server (default: http://localhost:3000)
mint dev

# Run on custom port
mint dev --port 3333

# Update CLI to latest version
npm mint update

# Validate links
mint broken-links
```

## Architecture

### Configuration
- `docs.json` - Main site configuration: navigation tabs, theme colors, logos, navbar, footer socials, and external anchors

### Content Structure
All documentation pages use `.mdx` format with YAML frontmatter:
- `index.mdx` - Homepage
- `wrld-host/` - Hosting service docs
- `wrld-tech/` - Technology service docs  
- `wrld-ai/` - AI service docs
- `onboarding/` - Client onboarding guides (Microsoft 365, Google Workspace)
- `tools/` - Internal tools documentation
- `support/` - Help center and support guides
- `api-reference/` - API endpoint documentation

### Assets
- `snippets/` - Reusable MDX content blocks
- `logo/` - Light/dark mode logos (SVG)
- `images/` - Documentation images

## Navigation

Navigation is tab-based, configured in `docs.json` under `navigation.tabs`. Each tab contains groups of pages. To add a new page:
1. Create the `.mdx` file in the appropriate directory
2. Add the page path to the relevant group in `docs.json`

## Deployment

Changes pushed to the default branch auto-deploy via Mintlify's GitHub integration. No manual build step required.
