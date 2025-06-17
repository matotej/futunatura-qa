class LoginPage {
    selectors = {
        goToLoginBtn: '.loginUser',
        emailInput: '#login-form input[name="email"]',
        passwordInput: '#login-form input[name="password"]',
        submitBtn: '#login-btn',
        errorBox: '#error-messages'
    };

    goToLogin() {
        cy.get(this.selectors.goToLoginBtn).click();
    }
  
    getLoginError() {
        return cy.get(this.selectors.errorBox);
    }
  
    fillEmail(value) {
        cy.wait(500); //wait for input to be ready
        const field = cy.get(this.selectors.emailInput);
        field.clear();
        field.type(value);
        field.should('have.value', value);
    
        return this;
    }
  
    fillPassword(value) {
        cy.wait(500); //wait for input to be ready
        const field = cy.get(this.selectors.passwordInput);
        field.clear();
        field.type(value);
        field.should('have.value', value);
    
        return this;
    }
  
    submit() {
        const button = cy.get(this.selectors.submitBtn);
        button.click();
    }
  }
  
  export default LoginPage;