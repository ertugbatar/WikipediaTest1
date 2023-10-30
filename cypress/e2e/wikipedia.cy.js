// Cypress kütüphanesini kullanarak senaryoyu tanımlayın
describe('Wikipedia Arama', () => {
    it('Bir makale bulmalı ve sayfasına gitmeliyiz', () => {
        // Tarayıcıyı açın ve Wikipedia sitesini ziyaret edin
        cy.visit('https://en.wikipedia.org');

        // Arama kutusunu bulun ve "Nikola Tesla"yı arayın
        cy.get('input[type="search"]').type('Nikola Tesla').type('{enter}');

        // URL'nin beklendiği gibi "https://en.wikipedia.org/wiki/Nikola_Tesla" olduğunu doğrulayın
        cy.url().should('eq', 'https://en.wikipedia.org/wiki/Nikola_Tesla');

        // Sağ tarafta "Nikola Tesla" başlığının altında bir resim görmek istiyoruz
        cy.get('.infobox img').should('be.visible');

        // Sağ tarafta "Born," "Died," ve "Education" bilgilerini okumak istiyoruz
        cy.get('.infobox')
            .contains('Born')
            .should('be.visible');
        cy.get('.infobox')
            .contains('Died')
            .should('be.visible');
        cy.get('.infobox')
            .contains('Education')
            .should('be.visible');

        // "Early Years" bölümünü okumak istiyoruz
        cy.contains('Early Years').click();
    });
});