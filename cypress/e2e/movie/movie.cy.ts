describe("Movie Details Page", () =>{
    it("should visit the home route", () => {
        cy.visit("/");
        cy.location("pathname").should("eq", "/");
        cy.visit("/movies");
        cy.location("pathname").should("eq","/movies");
        cy.getBySel("movie-card").should("have.length", 17);
        cy.visit("/");

    });

});