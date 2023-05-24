import {test} from "../../cerbertest";
import {LandingPage} from "../../../pages";
import {expect} from "@playwright/test";

test.describe("Landing Page Tests", () => {
    /**
     * Tests that an unauthenticated user is able to view the Landing page
     */
    test("test a user (unauthenticated) is able to see the landing page", async ({
                                                                                     page,
                                                                                     baseURL,
                                                                                 }) => {
        //behavior of passing page will change once Cerberus is abstracted shortly
        let landingPage = new LandingPage(page);
        await landingPage.goto();
        expect(await landingPage.isLandingVisible()).toBeTruthy();
    });
});
