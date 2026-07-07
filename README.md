# theinternettestdemo

Playwright end-to-end tests for [the-internet](https://the-internet.hackerearth.com), a demo site used for practicing UI automation.

## Setup

Install dependencies:

```bash
npm install
```

Install the Playwright browsers (only needed once):

```bash
npx playwright install
```

## Running the tests

Run the full suite headlessly:

```bash
npx playwright test
```

Run with a visible browser:

```bash
npx playwright test --headed
```

Run a single spec file:

```bash
npx playwright test tests/redirect-link.spec.js
```

View the HTML report from the last run:

```bash
npx playwright show-report
```

## Test files

- `tests/homepage-title.spec.js` — checks the homepage title and heading.
- `tests/redirect-link.spec.js` — checks the "Redirect Link" flow through to the status codes page.
