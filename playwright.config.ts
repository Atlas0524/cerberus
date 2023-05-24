import type {PlaywrightTestConfig} from "@playwright/test";
import {devices} from "@playwright/test";
import * as dotenv from "dotenv";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require("dotenv").config();
let BASE_URL: string = process.env.BASE_URL
    ? process.env.BASE_URL
    : "https://www.google.com";
// If in CI, set to headless, otherwise open a real browser
let headless: boolean = !!process.env.CI;
/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
    testDir: "./tests",
    /* Maximum time one test can run for. */
    timeout: 30 * 1000,
    expect: {
        /**
         * Maximum time expect() should wait for the condition to be met.
         * For example in `await expect(locator).toHaveText();`
         * Set to 30 * 1000 (30 seconds) for now.
         */
        timeout: 30 * 1000,
    },
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 1 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: process.env.CI
        ? [["list"], ["junit", {outputFile: "results.xml"}]]
        : [["list"], ["junit", {outputFile: "test-results/results.xml"}]],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /**
         * If BASE_URL ENV Variable is present, baseURL becomes BASE_URL.
         * If not, baseURL defaults to: https://www.google.com/
         */
        baseURL: BASE_URL,
        /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
        actionTimeout: 0,
        /* Base URL to use in actions like `await page.goto('/')`. */
        headless: headless,
        /* Collect trace when the test failed.
         * See https://playwright.dev/docs/trace-viewer
         */
        trace: process.env.CI ? "on-first-retry" : "on",
        /* Sets the size of the viewport of the test browser
         */
        viewport: {width: 2000, height: 2500},
        /* Collect trace when the test failed.
         * See https://playwright.dev/docs/videos
         */
        video: process.env.CI ? "on-first-retry" : "on",
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: "chromium",
            use: {
                ...devices["Desktop Chrome"],
            },
        },

        // {
        //   name: 'firefox',
        //   use: {
        //     ...devices['Desktop Firefox'],
        //   },
        // },

        // {
        //   name: 'webkit',
        //   use: {
        //     ...devices['Desktop Safari'],
        //   },
        // },

        /* Test against mobile viewports. */
        // {
        //   name: 'Mobile Chrome',
        //   use: {
        //     ...devices['Pixel 5'],
        //   },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: {
        //     ...devices['iPhone 12'],
        //   },
        // },

        /* Test against branded browsers. */
        // {
        //   name: 'Microsoft Edge',
        //   use: {
        //     channel: 'msedge',
        //   },
        // },
        // {
        //   name: 'Google Chrome',
        //   use: {
        //     channel: 'chrome',
        //   },
        // },
    ],

    /* Folder for test artifacts such as screenshots, videos, traces, etc. */
    outputDir: "test-results/",

};

export default config;
