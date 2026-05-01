# WRLD Tech Docs

Source for the public WRLD Tech documentation site at [help.wrld.tech](https://help.wrld.tech). It is a [Mintlify](https://mintlify.com) site authored in MDX and configured via [`docs.json`](./docs.json).

This repo is the documentation surface for the WRLD Tech Co. ecosystem:

- [WRLD.tech](https://wrld.tech) — primary technology portal and brand hub
- [WRLD.host](https://wrld.host) — hosting, domains, SSL, VoIP, and related infrastructure (client area powered by WHMCS)
- [WRLD.design](https://wrld.design) — brand identity, design tokens, and logo usage for the WRLD ecosystem
- [WRLD.ai](https://wrld.ai) — AI tooling and integrations
- [WRLD.one](https://wrld.one) — unified directory for every WRLD service (canonical source for the service list, brand tokens, and typography used in these docs)
- [WRLD.support](https://wrld.support) / [help.wrld.tech](https://help.wrld.tech) — support, onboarding, and this documentation site

## Local preview

Prerequisites: Node.js 19+.

```bash
# Install the Mintlify CLI (one-time)
npm i -g mint

# From the repo root (where docs.json lives)
mint dev
```

Then open <http://localhost:3000>. Pages hot-reload as you edit `.mdx` files.

Useful commands:

```bash
mint dev --port 3333   # run on a non-default port
mint broken-links      # validate internal links
mint update            # upgrade the CLI
```

## Repository layout

```
.
├── docs.json                # Site navigation, theme, anchors, footer, integrations
├── index.mdx                # Homepage
├── about.mdx                # About WRLD Tech Co. (mission, vision, values)
├── quickstart.mdx           # Customer quickstart
├── development.mdx          # Contributor guide for this docs repo
├── design.mdx               # WRLD brand tokens used by the docs site
├── infrastructure.mdx       # High-level stack and infrastructure overview
├── wrld-host/               # wrld.host product docs (hosting, client area)
├── wrld-tech/               # wrld.tech product docs and brand guide
├── wrld-design/             # wrld.design product docs (brand, tokens, logo)
├── wrld-ai/                 # wrld.ai product docs
├── ai-tools/                # Guides for Claude Code, Cursor, Warp, Windsurf
├── onboarding/              # Microsoft 365, Google Workspace, domain onboarding
├── tools/                   # Internal tools (e.g. SecureSend)
├── support/                 # Help center, tickets, security, VPN setup
├── images/                  # Screenshots and diagrams referenced from MDX
├── logo/                    # Light/dark SVG logos
└── favicon.svg
```

Brand tokens (colors, typography) are mirrored from the canonical source in [`WRLDInc/wrld.one`](https://github.com/WRLDInc/wrld.one). See [`design.mdx`](./design.mdx) and [`wrld-tech/brand-guide.mdx`](./wrld-tech/brand-guide.mdx).

## Adding content

1. Create a new `.mdx` file under the relevant section directory.
2. Add a YAML frontmatter block with `title` and `description`.
3. Register the page path in the appropriate group inside `docs.json` (Mintlify does not auto-discover pages).
4. Run `mint dev` and confirm the page renders and navigation is correct.
5. Run `mint broken-links` before opening a PR.

See [`development.mdx`](./development.mdx) for the full contributor guide.

## Deployment

Merges to the default branch are auto-deployed by Mintlify's GitHub integration. There is no separate build step in CI.

## License

See [`LICENSE`](./LICENSE). Content © WRLD Tech Co. (WRLD Inc.).
