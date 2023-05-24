## Configure Environment for Tests

In your terminal, from the root of the `cerberus` repo:

```sh
cd cerberus 
npx playwright install
yarn install   
```

## Run tests

In your terminal, from the `cerberus` directory:

```sh
npx playwright test
```

It will open a browser and execute a test

For more on running the test with options (such as targeting specific files), see
the [playwright.dev](https://playwright.dev/docs/running-tests#command-line) documentation
