# E2E Testing

## Problem statement

Find the best E2E testing tool fort the applications.

## Tools used by industry

After reviewing the github open source repo. We found out that most of them were
using Cypress or Playwright.
(<https://github.com/search?q=nextjs&type=repositories&s=stars&o=desc>)

Github open source nextjs repos and their testing tools used on per page bases:

|        | Playwright | Cypress |
| ------ | ---------- | ------- |
| Page 1 | 3          | 0       |
| Page 2 | 0          | 1       |
| Page 3 | 1          | 1       |
| Page 4 | 1          | 3       |
| Page 5 | 4          | 0       |

### Playwright VS Cypress

#### Github star counts since released

<img
width="1385"
src="https://i.imgur.com/sFJgOOF.png"
alt="Star counts"
/>
Looking on to the star counts, we can see that Playwright has gained more
popularity than Cypress. Since it's release in 2019.

#### NPM Downloads

<img
width="1385"
src="https://i.imgur.com/1uUKktq.png" alt="npm downloads"
/> But
on the other hand, Cypress has more downloads than Playwright. Which means it
has bigger community then Playwright.

### Features

1. Browser Support:

   - Playwright: Supports multiple browsers, including Chromium, Firefox, and
     WebKit. It provides a unified API for cross-browser testing .
   - Cypress: Primarily focused on Chromium-based browsers. While support for
     other browsers is in development, it may not be as comprehensive as
     Playwright's.

2. Programming Language:

   - Playwright: Supports various programming languages, including JavaScript
     and TypeScript. As you're already familiar with these languages, adapting
     to Playwright should be relatively seamless.
   - Cypress: Primarily uses JavaScript for scripting. If you're comfortable
     with JavaScript, this aligns well with your skill set.

3. API and Features:

   - Playwright: Offers a rich set of features, including capturing screenshots,
     videos, intercepting network requests, and supporting multiple browser
     contexts.
   - Cypress: Known for its simplicity and ease of use. It has a powerful API
     for handling DOM elements and actions. However, some advanced features may
     not be as extensive as Playwright.

4. Execution Speed:

   - Playwright: Generally known for faster execution due to its ability to run
     tests in parallel across multiple browser contexts.
   - Cypress: Executes tests in a single browser, which may impact speed,
     especially for larger test suites.

5. Headless Mode:

   - Playwright: Provides headless mode for running tests without a visible
     browser UI.
   - Cypress: Also supports headless mode for faster test execution without a
     graphical interface.

6. Community and Ecosystem:

   - Playwright: Gaining popularity with strong community support. It's actively
     developed by Microsoft.
   - Cypress: Has a robust community and is well-established in the testing
     community.

7. Code Generation:
   - Playwright: Provides code generation for tests, using the Playwright CLI or
     via VS Code extension.
   - Cypress: Provides code generation for tests, using the Cypress CLI under
     the experimentalStudio flag. Does not have a VS Code extension.

## Playwright

Playwright is an open-source automation tool for web browsers, often used for
browser testing and browser automation. It was developed by Microsoft and
supports multiple programming languages, including JavaScript, TypeScript, and
Python. Playwright allows you to automate interactions with web pages, such as
filling forms, clicking buttons, and navigating through pages. It supports
multiple browsers, including Chromium, Firefox, and WebKit.

## Cypress

Cypress is an end-to-end testing framework commonly used for testing web
applications. It allows developers to write tests that simulate user
interactions within a web browser, such as clicking buttons, filling out forms,
and navigating between pages. Cypress is often chosen for its ease of use, fast
execution, and real-time reloading during test development.

## Why Playwright

1. Parallel execution time of a playwright is faster than cypress.
2. Browser support is better than cypress. Playwright supports all chromium
   based browsers(chrome), firefox and webkit(safari), while cypress only
   supports chromium and Edge
3. Running parallel tests in cypress is complicated. While in
   playwright it is easy and reliable.
