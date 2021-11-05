import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"

Given("I open my Todo App", () => {
  cy.visit("http://localhost:3000")
})

When("I enter {string} into the {string} field", (text, field) => {
  cy.findAllByLabelText(field).type(text + "{enter}")
})

Then("the {string} field clears", (field) => {
  cy.findAllByLabelText(field).should("have.value", "")
})

Then("the {string} list contains {string}", (list, text) => {
  cy.findByLabelText(list)
})
