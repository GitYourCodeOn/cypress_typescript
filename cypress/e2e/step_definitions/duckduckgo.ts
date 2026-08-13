import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
  cy.visit("/");
});

Then("I should see a search bar", () => {
  cy.get("#searchbox_input, input[name='q'], input[type='text']")
    .first()
    .should("be.visible");
});

When("I search for {string}", (query: string) => {
  cy.get("#searchbox_input, input[name='q'], input[type='text']")
    .first()
    .clear()
    .type(`${query}{enter}`);
});

Then("I should see results related to {string}", (term: string) => {
  cy.get("[data-testid='result'], #links, article, li")
    .should("be.visible");
  cy.get("body").invoke("text").should("match", new RegExp(term, "i"));
});
