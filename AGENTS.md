# AGENTS.md

## Project

`@eliware/module-template` is the minimal ESM starting point for Eliware Node.js libraries.

## Scope and boundaries

- This template owns the package entrypoint, declarations, examples, tests, metadata, and documentation.
- Do not publish, tag, or release a derived package without explicit authorization.

## Layout

- `index.mjs` and `index.d.ts` are the public package surface; `examples/` contains safe examples.

## Development

- Use Node.js 26 and native ESM.
- Keep `index.mjs`, `index.d.ts`, README, tests, and package exports synchronized.
- Replace placeholder API text and examples when specializing the template.
- Keep examples credential-free and safe to run.

## Validation

Run `npm test`, `npm run test:gaps`, `npm run lint`, `npm run typecheck`, and `npm run pack` after customization. Maintain 100% coverage for implemented logic.

## Security

Never commit credentials, private URLs, `.env` files, or secret-bearing examples.

## Release

Do not bump versions, tag, publish, or push unless explicitly requested. Update declarations, docs, and release notes when the template API changes.
