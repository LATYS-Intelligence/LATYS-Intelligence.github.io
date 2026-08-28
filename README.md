# LATYS Intelligence website

The public website for LATYS Intelligence, built with Astro and deployed as a
static site through GitHub Pages.

## Local development

The project uses Node.js 24 and pnpm 11.19.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Astro serves the local development site at `http://localhost:4321` by default.

Before committing, run the same validation used by the deployment workflow:

```sh
pnpm check
pnpm build
```

The production output is written to `dist/`. This directory is generated and
must not be committed.

## Deployment

Every push or merge to `main` starts `.github/workflows/deploy.yml`. The
workflow checks the Astro project, builds the static site, uploads `dist/`, and
deploys it to the protected `github-pages` environment. It can also be run
manually from the repository's Actions tab.

If validation or the build fails, the deploy job does not run and the current
production deployment remains online.

To roll back a release, revert the relevant commit on `main` and push the
revert. The revert starts a new deployment of the restored source.

## GitHub Pages settings

In **Settings > Pages**, the publishing source must be **GitHub Actions**. The
custom production domain is configured in this settings page rather than with
a repository `CNAME` file.

The Astro `site` value is `https://www.latys.ca`, so generated canonical and
alternate-language URLs use the intended production domain. No Astro `base`
value is required for this organization Pages site.

## Production domain cutover

Only begin the DNS cutover after the site has been successfully deployed and
tested at `https://latys-intelligence.github.io/`.

1. Add `www.latys.ca` under **Settings > Pages > Custom domain**.
2. Replace the `www` CNAME with `LATYS-Intelligence.github.io`.
3. Replace only the existing Squarespace apex A records with GitHub Pages'
   current apex A records.
4. Leave mail, TXT, verification, and unrelated DNS records unchanged.
5. Verify both `latys.ca` and `www.latys.ca`, then enable **Enforce HTTPS** when
   GitHub makes the option available.
6. Retire the previous Squarespace hosting configuration only after the new
   production domain works over HTTPS.

DNS changes and certificate provisioning can take up to 24 hours to complete.

