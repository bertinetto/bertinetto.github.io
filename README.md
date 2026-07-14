# Luca Bertinetto personal website

Hugo source for [lucabertinetto.com](https://lucabertinetto.com). Active development is on the `dev-hugo` branch; `main` still hosts the older static site used by GitHub Pages.

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
