class ProductPage {
    selectors = {
        title: 'div.product_description h1.product_title',
        quantity: 'div.product_description .product_content_text',
        advantages: '.advantages',
        addToCartBtn: '#button-cart',
        cartModalAlert: '.modal-alert',
        cartModalProduct: '.modal-product-title > a',
        cartModalGoToCartBtn: '.modal-buttons > a'
    };

    getProductTitle() {
        return cy.get(this.selectors.title);
    }

    getProductQuantity () {
        return cy.get(this.selectors.quantity);
    }

    getProductAdvantages() {
        return cy.get(this.selectors.advantages);
    }

    getProductAdvantages() {
        return cy.get(this.selectors.advantages);
    }

    getAddToCartButton() {
        return cy.get(this.selectors.addToCartBtn);
    }

    getModalAlert() {
        return cy.get(this.selectors.cartModalAlert);
    }

    getModalProduct() {
        return cy.get(this.selectors.cartModalProduct);
    }

    getModalGoToCart() {
        return cy.get(this.selectors.cartModalGoToCartBtn);
    }
}

export default ProductPage;