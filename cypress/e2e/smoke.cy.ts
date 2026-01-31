describe("CV site - smoke", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("shows contact section with working links and actions", () => {
    cy.get('[data-cy="section-contact"]').scrollIntoView().should("be.visible");

    cy.get('[data-cy="btn-email"]')
      .should("have.attr", "href", "mailto:jose.angpc@gmail.com");

    cy.get('[data-cy="btn-download-cv"]')
      .should("have.attr", "href", "/CV_Jose_A.Pen_a_2026.pdf");

    cy.get('[data-cy="link-github"]')
      .should("have.attr", "href")
      .and("include", "github.com");

    cy.get('[data-cy="link-linkedin"]')
      .should("have.attr", "href")
      .and("include", "linkedin.com");
  })
/*
  it("loads home and shows hero name", () => {
    cy.get('[data-cy="hero-name"]').should("be.visible");
  });

  it("has working external links (GitHub/LinkedIn)", () => {
    cy.get('[data-cy="link-linkedin"]')
      .should("have.attr", "href")
      .and("include", "linkedin.com");

    // If github:
    // cy.get('[data-cy="link-github"]').should("have.attr", "href").and("include", "github.com");
  });

  it("download CV link exists and points to pdf in /public", () => {
    cy.get('[data-cy="btn-download-cv"]')
      .should("have.attr", "href", "/Angel_Pena_CV.pdf");
  });

  it("CV PDF responds 200", () => {
    cy.request("/Angel_Pena_CV.pdf").its("status").should("eq", 200);
  });

  it("mobile layout doesn’t break (basic)", () => {
    cy.viewport(390, 844); // iPhone-ish
    cy.visit("/");
    cy.get("body").should("be.visible");
    // si tienes menú hamburguesa:
    // cy.get('[data-cy="menu-button"]').click();
    // cy.get('[data-cy="mobile-nav"]').should("be.visible");
  });*/
});
