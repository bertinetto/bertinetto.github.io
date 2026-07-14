# Luca Bertinetto personal website

Hugo source for [lucabertinetto.com](https://lucabertinetto.com).

## Branches

| Branch | Role |
|--------|------|
| `dev-hugo` | Hugo source — edit and push here |
| `static-hugo` | Built static site — published by GitHub Actions; served by GitHub Pages |
| `main` | Frozen pre-Hugo static site — emergency rollback target |

Pushing to `dev-hugo` runs [`.github/workflows/hugo.yml`](.github/workflows/hugo.yml): checkout (with theme submodule) → `hugo --minify` → publish `public/` to `static-hugo`.

**Rollback:** GitHub Pages → Deploy from a branch → `main` / root.

## Local setup

1. **Clone and fetch the theme submodule** (required — layouts live in a separate repo):

   ```bash
   git clone https://github.com/bertinetto/bertinetto.github.io.git
   cd bertinetto.github.io
   git checkout dev-hugo
   git submodule update --init --recursive
   ```

2. **Install Hugo Extended** (macOS):

   ```bash
   brew install hugo
   ```

3. **Preview locally**:

   ```bash
   hugo server
   ```

   Open http://localhost:1313. Use `hugo server -D` to also show draft sections (`posts/`, `photos/`).

4. **Build static files** (writes to `public/`, gitignored):

   ```bash
   hugo
   ```

## Day-to-day knobs

| Path | Purpose |
|------|---------|
| `hugo.toml` | Site config, nav links, fonts, link colors |
| `content/` | Pages and research papers (Markdown) |
| `layouts/` | Custom templates overriding the theme |
| `assets/css/custom.css` | Custom styles (processed by Hugo) |
| `themes/console` | Theme submodule (`hugo-theme-console` fork) |

Do not auto-format files under `layouts/` (Prettier breaks Hugo `{{ }}` syntax). See `.prettierignore`.
