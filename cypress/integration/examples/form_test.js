describe("Test our form inputs", function() {
    beforeEach(function () {
        cy.visit("http://localhost:3003");
    });
    it("Test name, multiple toppings, submit", function() {
        cy.contains('Order Pizza').click();
        cy.get('[data-cy="name"]').type("Derek").should("have.value", "Derek");
        cy.get('[data-cy="size"]').select("small");
        cy.get('[name="Pepperoni"]').check().should("be.checked");
        cy.get('[name="Sausage"]').check().should("be.checked");
        cy.get('[name="Onions"]').check().should("be.checked");
        cy.get('[name="Pineapple"]').check().should("be.checked");
        cy.get('[name="Pepperoni"]').check().should("be.checked");
        cy.get('[name="Canadian Bacon"]').check().should("be.checked");
        cy.get('[name="Extra Cheese"]').check().should("be.checked");
        cy.get('[name="Diced Tomatoes"]').check().should("be.checked");
        cy.get('[name="instructions"]').type("These are special instructions").should("have.value", "These are special instructions");
        cy.contains('Add to Order').click();
    });
  })
