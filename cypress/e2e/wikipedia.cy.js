
// Define scenario using Cypress library


describe('Wikipedia ', () => {
    it('We need to find an article and go to its page', () => {


        // Open the browser and visit the Wikipedia site
       // cy.visit('https://www.wikipedia.org/');
        cy.visit('https://www.wikipedia.org/wiki/Nikola_Tesla');

        // Find the search box and search for "Nikola Tesla"
       // cy.get('#searchInput').type('Nikola Tesla');
       // cy.get('.pure-button').click();

        //Verify that the URL is "https://en.wikipedia.org/wiki/Nikola_Tesla" as expected
        cy.url().should('eq', 'https://en.wikipedia.org/wiki/Nikola_Tesla');

        // I would like to see a picture on the right side under the title "Nikola Tesla"
        cy.get('.infobox img').should('be.visible');

        // I want to read "Born," "Died," and "Education" information on the right side
        cy.get('.infobox')
            .contains('Born')
            .should('be.visible');
        cy.get('.infobox')
            .contains('Died')
            .should('be.visible');
        cy.get('.infobox')
            .contains('Education')
            .should('be.visible');

        // I want to read the "Early Years" chapter
        cy.contains('Early Years').should('be.visible');


    });
});