# vue-starter

@jdk2pq's opinionated Vue 3 starter project

## Includes:

- pnpm for package management
- Vue 3
- Auto-import Vue Components
- Vite
- Vue Router
- Pinia
- Vitest
- Playwright
- ESLint
- Antfu ESLint Config
- OXLint
- UnoCSS
- VueUse

## Optional (but recommended)

### Install `ni`

More on [ni](https://github.com/antfu-collective/ni)

```sh
pnpm i -g @antfu/ni
```

## Project Setup

```sh
corepack enable
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
pnpm build

# Runs the end-to-end tests
pnpm test:e2e
# Runs the tests only on Chromium
pnpm test:e2e --project=chromium
# Runs the tests of a specific file
pnpm test:e2e tests/example.spec.ts
# Runs the tests in debug mode
pnpm test:e2e --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
