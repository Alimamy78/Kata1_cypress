/// <reference types="cypress" />

describe("Kata1", () => {
  it("scenario1", () => {
    cy.visit("index.html");
    cy.get('[data-questions="label"]').should("be.visible");
    cy.get('[data-response="input"]');
    cy.get('[data-champ="name"]').should("be.enabled");
  });
  it("scenario2", () => {
    cy.visit("index.html");
    cy.get('[type="submit"]')
      .click()
      .should("be.enabled", "have.text", "Veuillez renseigner cet champ.")
      .should("be.visible");
  });
  it.only("scenario3", () => {
    cy.visit("index.html");
    cy.get("#lastName").type("Dramé");
    cy.get("#firstName").type("Alimamy");
    cy.get("#email").type("alidrams@hotmail.fr");
    cy.get('[type="text"]').type("41");
    cy.get(".radio > :nth-child(1) > input").click();
    cy.get(".checkbox > :nth-child(1) > input").click();
    cy.get("select").select("medium");
    cy.get("#suggestions").type("more exercices");
    cy.get('[type="submit"]').click();
  });
});
