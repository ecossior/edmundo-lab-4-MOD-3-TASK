import { BasePage } from "./base.page";

export class LoginPage extends BasePage{
    // Locators

    private initialSessionBtn: string = "//nav[@class='nav pre-sticky']//a[@data-testid='log_in_header']";    
    private emailTxt: string = "#email";
    private continueBtn: string = "//button[@name='dssLoginSubmit']";
    private passwordTxt: string = "#password";
    private passwordContinueLoginBtn: string = "#password-continue-login";    

    constructor(){
        super();
    }

    async clickInitialButton() {        
        await this.driver.Page.click(this.initialSessionBtn);
    }

    async setEmail(text: string) {        
        await this.driver.Page.fill(this.emailTxt, text);
    }

    async clickContinue() {
        
        await this.driver.Page.click(this.continueBtn);
    }

    async setPassword(text: string) {
        await this.driver.Page.fill(this.passwordTxt, text);
    }

    async clickContinueLogin() {
        
        await this.driver.Page.click(this.passwordContinueLoginBtn);
    }

    async Login(email: string, password: string) {
        await this.driver.Page.click(this.initialSessionBtn);        
        await this.driver.Page.fill(this.emailTxt, email);
        await this.driver.Page.click(this.continueBtn);
        await this.driver.Page.fill(this.passwordTxt, password);
        await this.driver.Page.click(this.passwordContinueLoginBtn);        
    }
}
