# AGENTS.md

## Cursor Cloud specific instructions

This is a **Mintlify documentation site** for WRLD Tech. There is no application code, database, or backend — only MDX content files and a `docs.json` configuration.

### Development commands

See `README.md` and `WARP.md` for full command reference. Key commands:

- **Dev server:** `mint dev` (serves on `http://localhost:3000`)
- **Link validation:** `mint broken-links`
- **Custom port:** `mint dev --port <port>`
- **Update CLI:** `npm i -g mint`

### Caveats

- Node.js >= 19 is required. The environment ships with v22 via nvm, which works.
- There is no `package.json` in this repo — the only dependency is the globally installed `mint` CLI (npm package `mint`).
- There are no lint, test, or build commands beyond `mint broken-links` for link validation.
- `mint dev` takes ~15-20 seconds to become ready. Wait for the `✓ preview ready` message before testing.
- The `mint broken-links` command currently reports a handful of broken links in template/example files (`essentials/`) and `onboarding/overview.mdx` — these are pre-existing in the repo.
