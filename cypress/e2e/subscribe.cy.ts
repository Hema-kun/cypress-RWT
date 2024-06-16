//how to test forms and custom cypress commands

describe("Newsletter Subscribe Form",()=>{
  //hook for visit url
    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })

    //assert user can subscribe by input email
    it("allows user to subscribe to the email list",()=>{
        cy.get("[data-test='email-input']").type("joe@gmail.com")
        cy.get("[data-test='submit-button']").click()
        cy.get("[data-test='success-message']").should("exist").contains("joe@gmail.com")
    })

    //assert user can't subscribe by input wrong email
    it("does NOT allow an invalid email address", () => {
        cy.getByData("email-input").type("tom")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
      })

    //assert user can't subscribe because already
      it("cannot subscribe because already subscribed", () => {
        cy.getByData("email-input").type(" john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains("Error: john@example.com already exists. Please use a different email address.")
      })
})

//fun getByData using some code command in support/command.ts