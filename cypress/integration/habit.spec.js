/// <reference types="cypress" />

describe('Habits dashboard', () => {

    beforeEach(() => {
        cy.visit('/habits')
    })

    describe('Habits List', () => {

        const createHabit = (habitInput) => {
            cy.get("#habit-add-btn").click()

            cy.get("input[placeholder='Habit']").type(habitInput)
            cy.contains(/Save changes/i).click()
        }

        // it('should display modal when add button is clicked', () => {
        //     cy.contains('button', /add/i).click()
        //     cy.contains("Add a new habit").should('be.visible')
        // })

        it('should display habit card when new habit is added', () => {
            const habitInput= "Go to the gym"
            createHabit(habitInput)
            cy.contains(habitInput)
                .should('be.visible')
                .should("have.class", "HabitCard__habit-container")
        })

        it('should toggle icon when clicked', () => {
            const habitInput= "Go to the gym"
            createHabit(habitInput)
            cy.get("[src='/static/media/close.fa7e5ead.svg']")
                .should('be.visible')
            cy.get("img.HabitCard__completion-icon").click()
            cy.get("[src='/static/media/check.9e8832df.svg']")
                .should('be.visible')
        })
    })
})
