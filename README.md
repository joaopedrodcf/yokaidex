[![Netlify Status](https://api.netlify.com/api/v1/badges/5bc77de0-4f9f-458c-88d0-51adfbb64fa5/deploy-status)](https://app.netlify.com/sites/yokaidex/deploys)

# Yokaidex

Yokaidex is a static Nuxt site with detailed Yo-kai Watch reference data for the three main games.

## Website

Production: [https://yokaidex.netlify.app](https://yokaidex.netlify.app)

## Stack

- Nuxt 4
- Vue 3
- TypeScript
- Nuxt UI
- Tailwind CSS
- Nuxt Image with Cloudinary delivery
- `@nuxtjs/seo`
- `@nuxt/scripts`
- pnpm

## Features

- Browse yo-kai from Yo-kai Watch 1, 2, and 3
- Filter the medallium by name, tribe, rank, element, misc tags, and special tags
- Browse items and equipment with filtering by name and type
- Detailed yo-kai pages with stats, moves, locations, favourite food, evolutions, and seal data
- Baffle board and crank-a-kai reference pages
- Static prerendering for SEO-friendly routes

## Requirements

- Node `22.21.1`
- pnpm `9.12.3`

Version files included in the repo:

- [.nvmrc](/Users/joaoferreira/projects/home/yokaidex/.nvmrc)
- [.tool-version](/Users/joaoferreira/projects/home/yokaidex/.tool-version)

## Getting started

Clone the repository:

```sh
git clone https://github.com/joaopedrodcf/yokaidex.git
cd yokaidex
```

Install dependencies:

```sh
pnpm install
```

Start the development server:

```sh
pnpm dev
```

## Available scripts

```sh
pnpm dev
pnpm build
pnpm generate
pnpm preview
pnpm check
pnpm check:fix
pnpm typecheck
pnpm test
```

## Deployment

The site is deployed on Netlify as a static generated site.

Netlify build settings:

- Build command: `pnpm generate`
- Publish directory: `dist`
- Node version: `22.21.1`
- pnpm version: `9.12.3`

Those settings are defined in [netlify.toml](/Users/joaoferreira/projects/home/yokaidex/netlify.toml).

## Disclaimer

Yokaidex is a fan-made reference site for Level-5's Yo-kai Watch games. All referenced names, characters, artwork, and related intellectual property belong to their respective owners, including Level-5 Inc., Nintendo Co., Ltd., Bandai Co., Ltd., and Koei Tecmo Holdings Co., Ltd.

This project is intended as an educational and community resource.

## License

[MIT](https://github.com/joaopedrodcf/yokaidex/blob/master/LICENSE)
