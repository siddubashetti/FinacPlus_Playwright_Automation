# Playwright UI & API Automation Assignment

This project contains automated UI and API test cases using Playwright with JavaScript.

---

# Tech Stack

- Playwright
- JavaScript
- Node.js

---

# Project Structure

```plaintext
project
│
├── tests
│   ├── uiTest.test.js
│   └── apiTest.test.js
│
├── pages
│   └── loginPage.js
│
├── utils
│   └── writeBookDetails.js
│
├── bookDetails.txt
├── package.json
└── README.md
```

---

# UI Automation

Website:
https://demoqa.com/

## Test Scenario

- Navigate to DemoQA website
- Navigate to Book Store Application
- Login using automated created user
- Validate username and logout button
- Search for:
  
  ```plaintext
  Learning JavaScript Design Patterns
  ```

- Validate search result
- Fetch and print:
  - Title
  - Author
  - Publisher

- Store details into:
  
  ```plaintext
  bookDetails.txt
  ```

- Logout successfully

---

# API Automation

API Website:
https://reqres.in/

## Test Scenario

### Create User
- Send POST request
- Validate status code
- Store generated userId

### Get User Details
- Send GET request using stored userId
- Validate response

### Update User
- Send PUT request
- Update username
- Validate updated response

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Install Dependencies

```bash
npm install
```

---

# Install Playwright

```bash
npx playwright install
```

---

# Execute Tests

## Run All Tests

```bash
npx playwright test
```

---

## Run UI Test

```bash
npx playwright test tests/uiTest.test.js
```

---

## Run API Test

```bash
npx playwright test tests/apiTest.test.js
```

---

## Run in Debug Mode

```bash
npx playwright test tests/uiTest.test.js --debug
```

---

# API Key Configuration

ReqRes API requires API Key authentication.

Add your API Key inside API test:

```javascript
headers: {
    'x-api-key': 'free_user_3DagXwjs0PVSt7SjvoqUESa7ivx'
}
```

Generate API Key:
https://app.reqres.in/api-keys

---

# Output File

After UI execution:

```plaintext
bookDetails.txt
```

Example Output:

```plaintext
Title: Learning JavaScript Design Patterns
Author: Addy Osmani
Publisher: O'Reilly Media
```

---

# Author

Siddaram Bashetti