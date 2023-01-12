describe('Happy path spec', () => {
  for (let i = 1; i <= 24; i++) {
    it('Category[' + i + '] Game run successful', () => {
      cy.visit('https://trivia-quiz-mluisamc.netlify.com/')

      cy.get(':nth-child(' + i + ') > .v-card > .v-card__title').should("exist").click()
      for (let j = 0; j < 10; j++) {
        cy.get(':nth-child(1) > .v-card > .v-card__title').should("exist").click()
        cy.wait(1500)
      }

      cy.location("pathname").should(
        "eq",
        "/result"
      )

      cy.get('.v-btn').should("exist").click()
      cy.location("pathname").should(
        "eq",
        "/"
      )
    })
  }
})