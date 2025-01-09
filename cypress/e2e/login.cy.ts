describe("User login", () => {
  it("should allow user to log in with valid credentials and redirect to dashboard", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "Enter your email")
      .type("111202315436@mhs.dinus.ac.id")
      .should("have.value", "111202315436@mhs.dinus.ac.id");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "**********")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button#login")
      .should("be.visible")
      .click();

      cy.url().should("include", "/dashboard");

    cy.get("nav");
    cy.get("header");
    cy.wait(5000);
  });

  it("should not allow user to log in with invalid credentials and redirect to login page", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "Enter your email")
      .type("111202315436@mhs.dinus.ac.id")
      .should("have.value", "111202315436@mhs.dinus.ac.id");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "**********")
      .type("wrongpassword")
      .should("have.value", "wrongpassword");

    cy.get("button#login")
      .should("be.visible")
      .click();

    // After failed login, ensure we are redirected back to the login page
    cy.url().should("include", "/");
    
    // Optionally, you can check for an error message or an alert
    cy.get("div").contains("Wrong Password").should("be.visible");
  });
});
