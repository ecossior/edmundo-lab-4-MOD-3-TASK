import { BasePage } from "./base.page";

export class ProfilePage extends BasePage{

    private nameTxt: string = "#addProfile";
    private saveBtn: string = "//button[@aria-label='GUARDAR']";    
    private avatarProfile = async (name: string) => `//a[@data-testid="${name}"]`;
    
    constructor(){
        super();
    }

    async selectAvatar(name: string) {        
        await this.driver.Page.click(await this.avatarProfile(name));
    }

    async setProfileName(name: string) {        
        await this.driver.Page.fill(this.nameTxt, name);
    }

    async clickSave() {        
        await this.driver.Page.click(this.saveBtn);
    }
    
}
