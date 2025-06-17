class CartPage {
    selectors = {
        productTitle: '.cart_p_text span',
        productRow: '.cart_white_box',
        increaseProductAmount: 'button.quantity-button-plus',
        productPrice: '.cart_unit_price',
        productQuantityInput: 'input.quantity-input'
    };

    getProductTitle() {
        return cy.get(this.selectors.productTitle);
    }

    increaseProductAmountForProduct(product) {
        this.getProductRow(product)
            .within(() => {
                cy.get(this.selectors.increaseProductAmount).click();
            });
    }

    getQuantityForProduct(product, quantity) {
        this.getProductRow(product)
            .within(() => {
                cy.get(this.selectors.productQuantityInput)
                    .should('have.value', quantity);
            });
    }


    getProductRow(product) {
        return cy.contains(product)
                    .parents(this.selectors.productRow);
    }

}

export default CartPage;