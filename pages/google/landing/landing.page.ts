import {Page} from "@playwright/test";
import {BasePage} from "../../base-page";

/**
 * Page Object for the Google Landing Page
 */
export class LandingPage extends BasePage {
    public url: string = "/";

    // Google landing page title
    public GOOGLE_LANDING_PAGE_TITLE: string = 'Google';

    //sets the Page to be usable
    constructor(page: Page) {
        super(page);
    }

    /**
     * Goes go the url of this Landing page.
     * This url is relative to the server baseURL.
     */
    public async goto() {
        await super.goto(this.url);
    }

    /**
     * Checks if the Landing page is loaded and visible
     */
    public async isLandingVisible() {
        let landingPageTitle = await this.page.title();
        return landingPageTitle == this.GOOGLE_LANDING_PAGE_TITLE;
    }

}
