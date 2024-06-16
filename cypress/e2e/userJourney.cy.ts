//how to test user journeys

describe("User journey", () => {
  it(" a user can find a course on the home page and complete the course lessons", () => {
    //visit to url
    cy.visit("http://localhost:3000")

    //get to location by click get started
    cy.get("[data-test='course-0']").find("a").contains("Get started").click()

    //assert that the “Get started” button has navigated the user to the correct course page.
    cy.location("pathname").should("equal", "/testing-your-first-application")

    //get to location by click start course
    cy.get("[data-test='next-lesson-button']").click()

    //assert that "Start Course" button has navigated to correct lesson page
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/app-install-and-overview"
    )

    //complete the quiz 0
    cy.get("[data-test='challenge-answer-0']").click()

    //assert the "Next Lesson" button has appeared on the page and click
    cy.get("[data-test='next-lesson-button']").should("exist").click()

    //final assert the "Next Lesson" takes user to correct page
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    )

    //complete the quiz 1
    cy.get("[data-test='challenge-answer-0']").click()
    cy.get("[data-test='next-lesson-button']").should("exist").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/setting-up-data-before-each-test"
    )

    //complete the quiz 3 and finished to home page
    cy.get("[data-test='challenge-answer-0']").click()
    cy.get("[data-test='next-lesson-button']").should("exist").click()
    cy.location("pathname").should("equal", "/")
  })
})
