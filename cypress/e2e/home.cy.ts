describe("home page", () => {
  //hook(mengaitkan) untuk visit url
  beforeEach(()=>{
    cy.visit("http://localhost:3000")
  })

  ///testing multiple page by using context
  context("Hero Section", ()=>{
    //Asssert h1 di home page
    it("the h1 contains the correct text", () => {
      cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
    })

    //assert list feature di home page
    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  //assert course-0 page
  context("Course section", ()=>{
    it("Course: Testing your first Next.js Application", ()=>{
      cy.get("[data-test='course-0']").find("a").contains("Get started").click()
      //assert the correct url/pathname
      // cy.url().should("include", "/testing-your-first-applicatioon")
      cy.location("pathname").should("equal", "/testing-your-first-application")
    })
  })

  //assert course-1 page
  context("Course section", ()=>{
    it("Course: Testing Foundations", ()=>{
      cy.get("[data-test='course-1']").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-foundations")
    })
  })

  //assert course-2 page
  context("Course section", ()=>{
    it("Course: Cypress Fundamentals", ()=>{
      cy.get("[data-test='course-2']").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })
  })



})