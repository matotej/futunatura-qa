import '../support/commands'
import CartPage from '../support/pageObjects/cartPage';
import ProductPage from '../support/pageObjects/productPage';
import ShopPage from '../support/pageObjects/shopPage';

beforeEach(function() {
    cy.visit('/');
    cy.confirmCookies();
})

describe('Store', () => {
    it('Should search for a product and open product page', () => {
        const shop = new ShopPage();
        const product = new ProductPage();
        const productName = 'Tekoče prehransko dopolnilo za otroke - pomiritev';

        shop.searchForItem(productName);

        shop.getResultRows()
            .should('have.length', 1)
            .contains(productName)
            .click();

        product.getProductTitle()
            .should('include.text', productName);

        product.getProductQuantity()
            .should('include.text', 'Vsebina: 125 ml');
        
        product.getProductAdvantages()
            .should('include.text', 'z vitaminom B6')
            .should('include.text', 'živčni sistem')
            .should('include.text', 'naravni izvlečki');
    });

    it('Should search for a product and add it to cart', () => {
        const shop = new ShopPage();
        const product = new ProductPage();
        const cart = new CartPage();
        const productName = 'Napitek v vrečkah proti slabosti';

        shop.searchForItem(productName);

        shop.getResultRows()
            .should('have.length', 1)
            .contains(productName)
            .click();

        product.getProductTitle()
            .should('include.text', productName);

        product.getAddToCartButton()
            .click();

        product.getModalAlert()
            .should('have.text', 'Izdelek je bil dodan v vašo košarico.');
        product.getModalProduct()
            .should('have.text', productName);

        product.getModalGoToCart().click();

        cart.getProductTitle()
            .should('have.text', productName);

        cart.increaseProductAmountForProduct(productName);
        cart.getQuantityForProduct(productName, 2);        
    });


    it('Should search for all products of a company and filter them', () => {
        const shop = new ShopPage();
        const company = 'pediakid';
        shop.searchForItem(company);

        shop.getResultRows()
            .should('have.length', 5)

        shop.getAllResultsButton().click();

        shop.getSearchTitle()
            .should('have.text', '“pediakid”');
        shop.getCategoryInfo()
            .should('have.text', '33 izdelkov');
        shop.getFilterInfo()
            .should('include.text', 'Prikazanih 1-20 od 33 rezultatov');

        shop.getFilter().click();
        shop.getFilterCategory('Oblika').click();

        shop.getFilterOption('prah')
            .find('span.mfilter-counter')
            .should('have.text', '3')
            .click();

        shop.getActiveFilter()
            .should('include.text', 'prah');
        
        shop.getFilterResults()
            .should('have.length', 3);
    });
});