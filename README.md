# Cypress TypeScript BDD

Cypress end-to-end tests written in TypeScript and Cucumber (Gherkin). The suite hits DuckDuckGo so it can be cloned and run without test accounts.

## Requirements

- Node.js 18 or later
- Google Chrome

## Run

```bash
npm install
npx cypress install
npm test
```

Open the Cypress UI with `npm run test:headed`.

## What it covers

- Homepage search box is visible
- Submitting a query returns results that mention the search term

GitHub Actions runs the same command on every push.
