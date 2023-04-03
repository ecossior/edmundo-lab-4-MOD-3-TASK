import { BasePage } from "./base.page";

export class ProfilesPage extends BasePage{

    private whoAreLbl= async (itemName: string) =>  `//font[contains(text(),"${itemName}")] `;
    private createProfileBtn: string = "//h3[contains(@class,'padding--top-6')]";
    private profile = async (name: string) => `//h3[text()='${name}']`; 

    constructor(){
        super();
    }

    async getWhoAreLbl(itemName: string) {        
        let test = await this.driver.isElementDisplayed(await this.whoAreLbl(itemName))
        return test;
    }

    async clickCreateProfile() {        
        await this.driver.Page.click(this.createProfileBtn);
    }

    async isProfileAdded(name: string) {
        await this.driver.Page.waitForTimeout(2000);
        return this.driver.isElementDisplayed(await this.profile(name));
    }

}



