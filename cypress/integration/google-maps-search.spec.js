describe('when visit google maps and search', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('page contains some elements', () => {
        cy.get('#search-input').invoke('attr', 'placeholder').should('contain', 'Search Google Maps')
        cy.contains('Borrar')
    })
    it('search can be performed', () => {
        cy.get('input').click()
        cy.get('input').type('Barcelona')
        cy.contains('Barcelona, España')
        cy.contains('Barcelona-Sants')
        cy.contains('Barcelona Airport')
    })

})

describe('when put markers on searches', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    
    it('adding markers in map', () => {
        cy.get('input').click()
        cy.get('input').type('Barcelona')
        cy.contains('Barcelona, España').click()
        cy.get('input').click().clear()
        cy.get('input').type('Badalona')
        cy.contains('Badalona, España').click()
        cy.get('input').click().clear()
        cy.get('input').type('Madrid')
        cy.contains('Madrid, España').click()
    })
})

describe('when delete markers google maps', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get('input').click()
        cy.get('input').click().clear()
        cy.get('input').type('Barcelona')
        cy.contains('Barcelona, España').click()
        cy.get('input').click().clear()
        cy.get('input').type('Badalona')
        cy.contains('Badalona, España').click()
        cy.get('input').click().clear()
        cy.get('input').type('Madrid')
        cy.contains('Madrid, España').click()
    })
    
    it('delete all markers', () => {
        cy.get('.reset').click()
    })

})
