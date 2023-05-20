/// <reference types="cypress" />

describe('Locators', () => {

    beforeEach(() => {
        cy.visit('/elements')
    })

    it('should locate elements with GET command', () => {
        cy.get('button')
        cy.get('h3')
        cy.get(".btn-with-class")
        cy.get("[class='Elements-btn btn-with-class more-btn-classes']")
        cy.get("[type='submit']")
        cy.get("button.btn-with-class")
        cy.get(".Elements-btn[data-cy='btn-id-1']")
    })

    it('should locate elements with GET CUSTOM command', () => {
        cy.getByCyId('btn-id-1')
    })

    it('should locate elements with CONTAINS command', () => {
        cy.contains('Unique Text')
        cy.contains('Not Unique Text')
        cy.contains('.Elements-btn', 'Not Unique Text')
        cy.contains(".Elements-btn[type='submit']", 'Not Unique Text')
        cy.contains("form", 'Not Unique Text')
    })

    it('should locate elements with FIND command', () => {
        cy.get('#form-1').find('.btn-2')
    })
})
