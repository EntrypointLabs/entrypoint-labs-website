# Entrypoint Labs — Website

Marketing site for [Entrypoint Labs](https://entrypointlabs.xyz), the product R&D lab behind
[Xend](https://xend.global), [Ultraprop](https://ultraprop.xyz),
[Cortex](https://www.usecortexai.xyz) and Pontoon.

## Stack

Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · pnpm

## Development

```bash
pnpm install
pnpm dev
```

## Structure

- `app/` — routes: landing (`/`), `/company`, `/careers`
- `components/squads/` — landing page components (nav, hero, product cards, footer, loader, brand marks)
- `public/logos/` — brand assets (product white logos, Entrypoint icon set)
- `public/products/` — real product app screenshots used in the landing mockups
