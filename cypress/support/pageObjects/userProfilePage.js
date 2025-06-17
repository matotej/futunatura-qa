class UserProfilePage {
    selectors = {
        profilePageTitle: 'h1.customer_name',
        menuOption: '#column-left a',
        submitNewPasswordBtn: '[value="Shrani"]',
        passwordInput: '#input-password',
        passwordConfirmInput: '#input-confirm',
        passwordError: '.profile_danger',
        passwordSuccess: '.success_content',
    };

  
    getProfileUser() {
        return cy.get(this.selectors.profilePageTitle);
    }

    getPasswordError() {
        return cy.get(this.selectors.passwordError);
    }

    getPasswordSuccess() {
        return cy.get(this.selectors.passwordSuccess);
    }

    goToMenu(menu) {
        cy.get(this.selectors.menuOption).contains(menu).click();
    }

    fillPassword(value) {
        cy.wait(500); //wait for input to be ready
        const field = cy.get(this.selectors.passwordInput);
        field.clear();
        field.type(value);
        field.should('have.value', value);
    
        return this;
    }

    fillPasswordConfirm(value) {
        cy.wait(500); //wait for input to be ready
        const field = cy.get(this.selectors.passwordConfirmInput);
        field.clear();
        field.type(value);
        field.should('have.value', value);
    
        return this;
    }

    submitNewPassword() {
        cy.get(this.selectors.submitNewPasswordBtn).contains('Shrani').click();
    }


}

export default UserProfilePage;