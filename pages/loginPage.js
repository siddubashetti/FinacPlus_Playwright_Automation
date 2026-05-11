import { Page } from '@playwright/test';


export class LoginPage {

    constructor(page) {
        this.page = page;
    }

    async register(firstname, lastname, username, password) {
        await this.page.goto("https://demoqa.com/register")
        await this.page.locator("#firstname").fill(firstname);
        await this.page.locator("#lastname").fill(lastname);
        await this.page.locator("#userName").fill(username);
        await this.page.locator("#password").fill(password);
        await this.page.locator("#register").click();
    }

    async navigateToBookStore() {
        await this.page.goto("https://demoqa.com/");
        await this.page.getByRole('link', { name: 'Book Store Application' }).click();
    }

    async login(username, password) {
        await this.page.goto("https://demoqa.com/books");
        await this.page.locator("#login").click();
        await this.page.locator("#userName").fill(username);
        await this.page.locator("#password").fill(password);
        await this.page.locator("#login").click();
    }

    async BookStoreButton(BookName) {
        await this.page.goto("https://demoqa.com/profile");
        await this.page.locator('[href="/books"]').click();
        await this.page.locator("#searchBox").fill(BookName);
    }
}

