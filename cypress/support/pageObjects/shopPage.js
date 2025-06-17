class ShopPage {
    selectors = {
        searchInput: '#search > input',
        searchTitle: 'h1',
        resultsRow: '.live_row',
        allResultsBtn: '.smartsearch-bottom a',
        categoryInfo: '#category-items-info',
        filterInfo: '#filter-items-info',
        filter: '.filter_title',
        filterCategory: '.mfilter-heading',
        filterOption: '.mfilter-option label',
        filterActive: '.mfilter-input-active',
        filterResults: '.item_box'
    };

    searchForItem(value) {
        const field = cy.get(this.selectors.searchInput);
        field.clear();
        field.type(value);
        field.should('have.value', value);
    
        return this;
    }

    getSearchTitle() {
        return cy.get(this.selectors.searchTitle);
    }

    getResultRows() {
        return cy.get(this.selectors.resultsRow);
    }

    getAllResultsButton() {
        return cy.get(this.selectors.allResultsBtn);
    }

    getCategoryInfo() {
        return cy.get(this.selectors.categoryInfo);
    }

    getFilterInfo() {
        return cy.get(this.selectors.filterInfo);
    }

    getFilter() {
        return cy.get(this.selectors.filter);
    }

    getFilterCategory(filterCategory) {
        return cy.get(this.selectors.filterCategory).contains(filterCategory);
    }

    getFilterOption(filterOption) {
        return cy.get(this.selectors.filterOption).contains(filterOption);
    }

    getActiveFilter() {
        return cy.get(this.selectors.filterActive)
                    .find('label');
    }

    getFilterResults() {
        return cy.get(this.selectors.filterResults);
    }
}

export default ShopPage;