// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from "./pageObjects/loginPage";

Cypress.Commands.add('confirmCookies', () => {
    cy.get('#cookieBannerAllowAll', { timeout: 10000 }).click();
});

Cypress.Commands.add('validLogin', () => {
    const login = new LoginPage();

    login.goToLogin();
    login.fillEmail(Cypress.env('VALID_EMAIL'));
    login.fillPassword(Cypress.env('VALID_PASSWORD'));
    login.submit();
});