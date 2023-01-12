/// <reference types="cypress" />

describe("Kata1", () => {
  it("scenario1", () => {
    cy.visit("index.html");
    cy.get("label").should("be.visible");
    cy.get("input").should("be.visible");
  });
  it("scenario2", () => {
    cy.visit("index.html");
    cy.get(".radio > :nth-child(1) > input").check();
    cy.log("Bonne réponse");
    cy.get(".checkbox > :nth-child(1) > input").check();
    cy.log("Bonne réponse");
  });
  it("scenario3", () => {
    cy.visit("index.html");
    cy.get(".radio > :nth-child(2) > input").check();
    cy.log("Mauvaise réponse");
    cy.get(".radio > :nth-child(3) > input").check();
    cy.log("Mauvaise réponse");
  });
});
