# Personal CV – QA Automation Showcase

This repository contains my personal CV website built with **Next.js**, along with a **Cypress-based E2E smoke test suite** used to validate critical user paths and basic quality gates.

The goal of this setup is to demonstrate **QA automation skills** applied with the right level of scope for a small, static web application.

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
