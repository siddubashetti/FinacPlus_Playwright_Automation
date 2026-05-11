// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

const FIRSTNAME = "Siddaram";
const LASTNAME = "Bashetti";
const USERNAME = "SiddaramBashetti";
const PASSWORD = "Siddu@123";

const writeBookDetails = require('../utils/writeBookDetails');

test.describe("Login Functionality", () => {
  test("Login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.register(FIRSTNAME, LASTNAME, USERNAME, PASSWORD);

    // Navigate to Books Store Application
    await loginPage.navigateToBookStore();

    //Login using the newly created user.
    await loginPage.login(USERNAME, PASSWORD);

    //Upon successful login, Validate username and logout button.
    await expect(page.locator("#userName-value")).toHaveText(USERNAME);
    await expect(page.getByText("Logout")).toBeVisible();


  })

  test("Search for a book in the bookstore", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(USERNAME, PASSWORD);

    //Click on bookstore button
    //Search "Learning JavaScript Design Patterns"
    await page.waitForURL('**/profile');      // Wait for the profile page to load
    await loginPage.BookStoreButton("Learning JavaScript Design Patterns");

    //Validate the search result to contain this book.
    await expect(page.getByText("Learning JavaScript Design Patterns")).toBeVisible();

    //Print Title, Author and Publisher into a file.
    const title = await page.getByText('Learning JavaScript Design Patterns').textContent();

    const author = await page.getByText('Addy Osmani').textContent();

    const publisher = await page.getByText('O\'Reilly Media').textContent();

    // Write book details to file and store in bookDetails.txt
    writeBookDetails(title, author, publisher);

    //Click on logout
    await page.locator("#submit").click();

  })


})
