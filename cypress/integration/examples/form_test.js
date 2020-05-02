describe("Test our form inputs", function() {
    beforeEach(function () {
        cy.visit("http://localhost:3003");
    });
    it("Test name, multiple toppings, submit", function() {
        cy.contains('Order Pizza').click();
        cy.get('[data-cy="name"]').type("Derek").should("have.value", "Derek");
        cy.get('[data-cy="size"]').select("small");
        cy.get('[name="Pepperoni"]').check()
        cy.get('[name="Sausage"]').check()
        cy.get('[name="Onions"]').check()
        cy.get('[name="Pineapple"]').check()
        cy.get('[name="Pepperoni"]').check()
        cy.contains('Add to Order').click();
    });
  })
