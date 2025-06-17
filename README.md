# Futunatura QA assignment

## Instalation

1. Clone repository and use `npm install` to install dependencies.

### UI E2E tests

2. Open browser and navigate to `https://www.futunatura.si/` and register a new user.
3. On root folder create a `.env` file - use `env.template`
3. Store login credentials to `.env` files - private information.
4. Set correct data in ./cypress/fixtures/user.json - public information.

To execute tests run `npx cypress open` and run tests from UI.  
OR  
Run from CLI  
`npm run e2e` - headless in Electron  
`npm run e2e-chrome` - headless in Chrome  
`npm run e2e-chrome-headed` - headed in Chrome  
`npm run run-and-generate-reports` - headles in Electron with generated report in `mochawesome-report`


## Implemented scenarios

### Login
```gherkin
Scenario: Login should be successful
    Given User is on login form
    When User enters valid email for login
    And User enters valid password for login
    When User clicks on a log in button
    Then Valid user should be logged in
```

```gherkin
Scenario: Login should be unsuccessful - wrong email
    Given User is on login form
    When User enters valid email for login
    And User enters invalid password
    When User clicks on a log in button
    But Login should fail
```

```gherkin
Scenario: Login should be unsuccessful - wrong password
    Given User is on login form
    When User enters nickname "test1"
    And User enters password "test123"
    When User clicks on a Log in button
    But Login should fail
```

```gherkin
Scenario: Login should be unsuccessful - empty form
    Given User is on login form
    When User clicks on a Log in button
    But Login should fail
```

### Profile page
```gherkin
Scenario: Update password fails - empty form
    Given Logged-in user is on profile page
    When User clicks on a Change password menu
    And User clicks Save button
    But User should get an error
```
```gherkin
Scenario: Update password fails - passwords not matching
    Given Logged-in user is on profile page
    When User clicks on a Change password menu
    And User inserts different passwords
    And User clicks Save button
    But User should get an error
```
```gherkin
Scenario: Password successfully update password
    Given Logged-in user is on profile page
    When User clicks on a Change password menu
    And User inserts two correct passwords
    When User clicks Save button
    Then Password should be successfully updated
```

### Store
```gherkin
Scenario: User searches for a product and opens it
    Given User is on homepage
    When User searches for a product
    Then User should see the product in search drop-down
    When User clicks on a product
    Then User should be redirected on product page
```

```gherkin
Scenario: User searches for a product and adds it to cart
    Given User is on homepage
    When User searches for a product
    Then User should see the product in search drop-down
    When User clicks on a product
    Then User should be redirected on product page
    When User adds product to cart
    Then Added to cart modal is shown
    When User clicks on Go to cart
    Then User should be redirected to cart
```

```gherkin
Scenario: User searches for a company and filters products
    Given User is on homepage
    When User searches for a company
    Then User should see five products in search drop-down
    When User clicks on Show all results
    Then User should be redirected to all results
    When User clicks on a filter
    Then Only filtered products should be shown
```
