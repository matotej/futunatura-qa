import '../support/commands'
import LoginPage from '../support/pageObjects/loginPage';
import userProfilePage from '../support/pageObjects/userProfilePage';


beforeEach(function() {
    cy.fixture('user').then(function(user) {
        this.user = user
    });

    cy.visit('/');
    cy.confirmCookies();
})

describe('Login page', function() {
    it('Should login to Fotonatura page', function() {
        const login = new LoginPage();
        const userProfile = new userProfilePage();

        cy.validLogin();

        userProfile.getProfileUser()
            .should('have.text', this.user.name);
    });

    it('Should fail to login - wrong email', function() {
        const login = new LoginPage();

        login.goToLogin();
        login.fillEmail(this.user.wrongEmail);
        login.fillPassword(Cypress.env('VALID_PASSWORD'));
        login.submit();

        login.getLoginError()
            .should('include.text', 'Prišlo je do napake!')
            .should('include.text', 'Vpisan e-poštni naslov ali geslo ni pravilno.');
    });

    it('Should fail to login - wrong password', function() {
        const login = new LoginPage();

        login.goToLogin();
        login.fillEmail(Cypress.env('VALID_EMAIL'));
        login.fillPassword(this.user.wrongPassword);
        login.submit();

        login.getLoginError()
            .should('include.text', 'Prišlo je do napake!')
            .should('include.text', 'Vpisan e-poštni naslov ali geslo ni pravilno.');
    });

    it('Should fail to login - empty credentials', function() {
        const login = new LoginPage();

        login.goToLogin();
        login.submit();

        login.getLoginError()
            .should('include.text', 'Prišlo je do napake!')
            .should('include.text', 'Vpisan e-poštni naslov ali geslo ni pravilno.');
    });
});