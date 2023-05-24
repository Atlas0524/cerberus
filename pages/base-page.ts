// base-page.ts
/**
 * This is the Base Page Object of the UI Test Framework.
 * Currently we are using: Playwright.
 * In this instance, we are wrapping the
 * Playwright Class Page.
 * In this way we are able to use an abstraction
 * so we don't get tied to a specific framework
 * incase needs change in the future.
 */
import {expect, Locator, Page} from "@playwright/test";
import {Tools} from "../utility/tools";

/**
 * BasePage for all other PageObjects to build upon
 */
export class BasePage {

    readonly baseURL: string;

    readonly page: Page;

    readonly tools: Tools;

    //base URL
    public url: string = "/";

    //sets the Page to be useable
    constructor(page: Page) {
        this.page = page;
        this.tools = new Tools();
        this.baseURL = page.url();
    }

    /**
     * Goes go the URL of this page if nothing passed in.
     * Goes go the URL passed in if provided.
     * This url is relative to the server baseURL.
     */
    async goto(url: string = this.url) {
        await this.page.goto(url);
    }

}
