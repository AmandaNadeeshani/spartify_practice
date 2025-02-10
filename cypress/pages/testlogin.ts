export class Swaglogin {

    private t_username = 'input[data-test="username"]';
    private t_password = 'input[data-test="password"]';
    private lgn_btn = '#login-button';
private urltxt ='/inventory.html';
private dashbordlogo ='.app_logo';
private bodytxt='Sauce Labs Backpack'
 
    

    public visitURL() {
        cy.visit('https://www.saucedemo.com/v1/');
        return this;

    }

    public step_enterUsername(usernamed: string) {
        cy.get(this.t_username).type(usernamed);
        return this;

    }

    public step_enterPassword(password: string) {
        cy.get(this.t_password).type(password);
        return this;
    }

    public step_clicklogin() {
        cy.get(this.lgn_btn).click();
        return this;
    }


// Assert successful login by checking URL or an element on the dashboard
public stepAssertLogin(){
    cy.url().should('include', this.urltxt); 
    cy.get(this.dashbordlogo).should('be.visible');
    cy.contains(this.bodytxt).should('be.visible');
}


}