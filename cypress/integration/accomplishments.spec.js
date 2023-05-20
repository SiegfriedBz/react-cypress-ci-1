/// <reference types="cypress" />

describe('Accomplishments dashboard', () => {

    beforeEach(() => {
        cy.visit('/accomplishments')
    })

    const submitForm = () => {
        cy.contains('Submit Accomplishment')
            .should('be.visible')
            .click()
    }

    const fillForm = () => {
        cy.getByCyId('accomplishment-title-input')
            .type('My Accomplishment Title')
        cy.getByCyId('accomplishment-input')
            .type('My Accomplishment Description')
        cy.get('input[type="checkbox"]')
            .check()
    }

    it('should display an error message if 1 field is empty', () => {
        cy.getByCyId('accomplishment-title-input')
            .type('My Accomplishment Title')
        cy.getByCyId('accomplishment-input')
            .type('My Accomplishment Description')
        submitForm()
        cy.contains('Complete the items above to continue')
            .should('be.visible')
    })

    it('should display loading spinner after form is submitted', () => {
        fillForm()
        submitForm()
        // cy.contains('Accomplishment-spinner-container').should('be.visible')
        cy.contains('This Accomplisment was Successfully Submitted').should('be.visible')
    })

    it('should go back to accomplishments dashboard when go back button is clicked', () => {
        fillForm()
        submitForm()
        cy.contains('Go Back').click()
        cy.getByCyId('accomplishment-title-input')
            .should('be.visible')
            .and('be.empty')
        cy.getByCyId('accomplishment-input')
            .should('be.visible')
            .and('be.empty')
        cy.get('input[type="checkbox"]')
            .should('be.visible')
            .and('not.be.checked')
    })
})
