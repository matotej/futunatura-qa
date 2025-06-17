import '../support/commands'
import LoginPage from '../support/pageObjects/loginPage';
import UserProfilePage from '../support/pageObjects/userProfilePage';


beforeEach(function() {
    const userProfile = new UserProfilePage();

    cy.visit('/');
    cy.confirmCookies();

    cy.validLogin();

    cy.fixture('user').as('user').then(function(user) {
        userProfile.getProfileUser()
            .should('have.text', this.user.name);
    });
});

describe('Profile page', function() {
    it('Should unsuccessfully update password - empty passwords', function() {
        const userProfile = new UserProfilePage();

        userProfile.goToMenu('Sprememba gesla');

        userProfile.submitNewPassword();

        userProfile.getPasswordError()
            .should('include.text', 'Napaka: Geslo mora vsebovati med 4 in 20 znakov!');
    });

    it('Should unsuccessfully update password - two different passwords', function() {
        const userProfile = new UserProfilePage();

        userProfile.goToMenu('Sprememba gesla');

        userProfile.fillPassword('abcd');
        userProfile.fillPasswordConfirm('abcde');
        userProfile.submitNewPassword();

        userProfile.getPasswordError()
            .should('include.text', 'Napaka: Gesli se ne ujemata.');
    });

    describe('Profile page - reset password', function() {
        after(function() {
            const userProfile = new UserProfilePage();
            userProfile.goToMenu('Sprememba gesla');
            
            userProfile.fillPassword(Cypress.env('VALID_PASSWORD'));
            userProfile.fillPasswordConfirm(Cypress.env('VALID_PASSWORD'));
            userProfile.submitNewPassword();

            userProfile.getPasswordSuccess()
                .should('include.text', 'Vaše geslo je bilo uspešno spremenjeno!');

            userProfile.goToMenu('Odjava');
        });

        it('Should successfully update password', function() {
            const userProfile = new UserProfilePage();

            userProfile.goToMenu('Sprememba gesla');
            userProfile.fillPassword('dummyPassword');
            userProfile.fillPasswordConfirm('dummyPassword');
            userProfile.submitNewPassword();

            userProfile.getPasswordSuccess()
                .should('include.text', 'Vaše geslo je bilo uspešno spremenjeno!');
        });
    });
});