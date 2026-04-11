# Cloud Agent Starter Skill — WRLD Tech Docs

Use this skill whenever you need to run, test, or modify this codebase as a Cloud agent.

## What This Repo Is

A **Mintlify documentation site** for WRLD services (WRLD.host, WRLD.tech, WRLD.ai). There is no application runtime, database, or backend — only MDX content, a JSON site config, and an OpenAPI spec. Deployments happen automatically when changes are pushed to the default branch via the Mintlify GitHub app.

## Prerequisites

- **Node.js 19+** (required by the Mintlify CLI).
- The Mintlify CLI: `npm i -g mint`.

If the CLI is missing, install it before doing anything else:

```bash
npm i -g mint
```

## Repo Layout

| Path | Purpose |
|---|---|
| `docs.json` | Site-wide config: navigation tabs, theme, logos, fonts, integrations, SEO |
| `index.mdx` | Homepage |
| `quickstart.mdx` | Getting-started guide |
| `development.mdx` | Local dev instructions |
| `wrld-host/` | WRLD.host (hosting) docs |
| `wrld-tech/` | WRLD.tech (technology) docs |
| `wrld-ai/` | WRLD.ai (AI services) docs |
| `ai-tools/` | Guides for AI coding tools (Cursor, Warp, Claude Code, Windsurf) |
| `onboarding/` | Client onboarding (Microsoft 365, Google Workspace, domains) |
| `support/` | Help center, tickets, security, VPN setup guides |
| `tools/` | Internal tools (SecureSend, etc.) |
| `api-reference/` | API docs + `openapi.json` (OpenAPI 3.1 spec) |
| `snippets/` | Reusable MDX content blocks |
| `logo/` | Light/dark SVG logos |
| `WARP.md` | Agent guidance (Warp-specific) |

## Starting the Dev Server

```bash
cd /workspace
mint dev
```

The site is served at `http://localhost:3000`. It auto-reloads on file changes.

If port 3000 is taken, use a custom port:

```bash
mint dev --port 3333
```

### Troubleshooting Startup

| Symptom | Fix |
|---|---|
| CLI not found | `npm i -g mint` |
| `sharp` module error | Remove CLI (`npm remove -g mint`), upgrade Node to 19+, reinstall |
| Unknown error on start | Delete `~/.mintlify` then re-run `mint dev` |
| CLI version mismatch with prod | `mint update` |

## Authentication & Feature Flags

There is **no auth wall or feature-flag system** in this repo. The dev server runs with all content visible. No login, API keys, or environment variables are needed to preview the site.

## Codebase Areas & Testing Workflows

### 1. Site Configuration (`docs.json`)

**What lives here:** Navigation tabs/groups, theme colors, logos, fonts, footer links, SEO settings, analytics integrations.

**How to test changes:**

1. Start the dev server (`mint dev`).
2. Open `http://localhost:3000` in a browser via the `computerUse` subagent.
3. Verify navigation tabs appear in the correct order.
4. Verify theme colors, logo, and footer render correctly.
5. After editing nav groups, confirm new/renamed pages appear and link correctly.

**Common pitfalls:**

- Adding a page path to `docs.json` without creating the `.mdx` file → 404 at that route.
- Removing a page from `docs.json` without deleting the file → page is still accessible by URL but missing from nav.

### 2. MDX Content Pages (`*.mdx` files)

**What lives here:** All documentation prose, written in MDX with YAML frontmatter.

**How to test changes:**

1. Start the dev server.
2. Navigate to the edited page in the browser.
3. Confirm:
   - Frontmatter `title` and `description` render in the page header.
   - Markdown/MDX formatting renders correctly (headings, lists, code blocks, callouts).
   - Mintlify components (`<Accordion>`, `<Card>`, `<Steps>`, `<Tip>`, `<Note>`, `<Frame>`, `<AccordionGroup>`, `<CardGroup>`) render without errors.
   - Internal links (`href="/path"`) resolve to real pages.
   - Images load (check `<img>` and `<Frame>` tags).

**Validating links across the whole site:**

```bash
mint broken-links
```

This CLI command scans all pages and reports broken internal links.

### 3. API Reference (`api-reference/`)

**What lives here:** `openapi.json` (OpenAPI 3.1 spec) and MDX pages for each endpoint.

**How to test changes:**

1. Start the dev server.
2. Navigate to the "API Reference" section.
3. Confirm endpoint pages render with correct method, path, parameters, request/response schemas, and auth info.
4. If editing `openapi.json`, verify the spec is still valid JSON after your edits.

**Quick JSON validation:**

```bash
python3 -c "import json; json.load(open('api-reference/openapi.json'))"
```

### 4. Reusable Snippets (`snippets/`)

**What lives here:** Shared MDX blocks imported into other pages.

**How to test changes:**

1. Identify which pages import the snippet (search for the snippet filename).
2. Start the dev server and visit each consuming page.
3. Confirm the snippet content renders inline as expected.

### 5. Adding a New Page (End-to-End)

1. Create the `.mdx` file in the appropriate directory with YAML frontmatter:
   ```
   ---
   title: "Page Title"
   description: "Short description"
   ---
   ```
2. Add the page path (without `.mdx`) to the correct group in `docs.json`.
3. Start the dev server and confirm:
   - The page appears in navigation.
   - The page loads without errors.
   - Run `mint broken-links` to verify no link regressions.

## Automated Checks (No Test Suite)

This repo has **no unit/integration test framework** (no Jest, Vitest, pytest, etc.). The primary automated check is:

```bash
mint broken-links
```

Always run this after making content or navigation changes to catch broken internal links.

For JSON files (`docs.json`, `openapi.json`), validate syntax:

```bash
python3 -c "import json; json.load(open('docs.json'))"
python3 -c "import json; json.load(open('api-reference/openapi.json'))"
```

## Deployment

Changes pushed to the default branch auto-deploy via Mintlify's GitHub app integration. There is no manual build step or CI pipeline in this repo.

## Cursor Cloud Specific Instructions

- No secrets or environment variables are needed for this repo.
- The dev server (`mint dev`) is the primary way to preview and test all changes.
- Use the `computerUse` subagent for GUI-based testing of rendered pages.
- Use `mint broken-links` as a quick automated validation after any content or nav changes.

## Updating This Skill

When you discover a new testing trick, workflow shortcut, or runbook-worthy piece of knowledge while working in this repo:

1. Open this file at `.cursor/skills/cloud-agent-starter.md`.
2. Add the new information under the most relevant section, or create a new section if none fits.
3. Keep entries concrete and actionable — prefer commands and steps over vague descriptions.
4. Commit the update alongside your other changes so future agents benefit immediately.

Examples of things worth adding:

- A new Mintlify component that needs special testing (e.g., a new interactive widget).
- A CLI flag or command you discovered that speeds up validation.
- A gotcha or error you hit that took time to diagnose — save the next agent that time.
- Changes to the deployment pipeline or site config structure.
