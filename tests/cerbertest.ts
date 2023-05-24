/**
 * This is the Base Test of the UI Test Framework.
 * Currently we are using: Playwright.
 * In this instance, we are wrapping the
 * Playwright Class Test.
 * In this way we are able to use an abstraction
 * so we don't get tied to a specific framework
 * incase needs change in the future.
 */
import {test as base} from "@playwright/test";
import {BasePage} from "../pages/base-page";
import * as http from "http";

/**
 * This extension of the Test class from Playwright
 * allows each test to create it's own worker.
 * This way we ensure each test has as clean a
 * start as possible.
 */
export const test = base.extend<{}, { server: http.Server }>({
    server: [
        async ({}, use, workerInfo) => {
            // Start the server.
            const server = http.createServer();
            server.listen(9000 + workerInfo.workerIndex);
            await new Promise((ready) => server.once("listening", ready));

            // Use the server in the tests.
            await use(server);

            // Cleanup.
            await new Promise((done) => server.close(done));
        },
        {scope: "worker"},
    ],
});

test.beforeEach(async ({page}) => {
});
