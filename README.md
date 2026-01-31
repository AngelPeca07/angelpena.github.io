# Personal CV – QA Automation Showcase

[![Cypress E2E Smoke](https://github.com/AngelPeca07/angelpena.github.io/actions/workflows/cypress.yml/badge.svg)](https://github.com/AngelPeca07/angelpena.github.io/actions/workflows/cypress.yml)

This repository contains my personal CV website built with **Next.js**, along with a **Cypress-based E2E smoke test suite** used to validate critical user paths and basic quality gates.

The goal of this setup is to demonstrate **QA automation skills** applied with the right level of scope for a small, static web application.

> Automated quality gate executed on every push via GitHub Actions.

---

## 🧪 QA Automation Overview

The Cypress test suite focuses on **smoke tests**, ensuring that the most important user-facing functionality works as expected.

### What is covered
- Home page loads correctly
- Main hero content is visible
- External links (LinkedIn / GitHub) are correctly configured
- CV download link points to the expected PDF file
- CV PDF asset responds successfully (HTTP 200)
- Basic mobile viewport validation

### What is intentionally out of scope
- Deep E2E flows (not applicable for a static CV site)
- Visual regression testing
- Heavy mocking or complex fixtures

This approach keeps the tests **fast, stable, and meaningful**.

---

## 🛠️ Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Cypress** (E2E testing)
- **start-server-and-test** (orchestrating local E2E runs)

---

## ▶️ Running the project locally

```bash
npm install
npm run dev
The site will be available at:
http://localhost:3000
```

## ▶️ Running Cypress tests
Open Cypress UI
```bash
npm run cy:open
```
Run Cypress headless (CI-style)
```bash
npm run cy:run
```
Run full E2E flow (server + tests)
```bash
npm run cy:run:e2e
```
