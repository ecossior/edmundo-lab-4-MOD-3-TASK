import { driverInstance } from "../src/core/driver";
import { LoginPage } from "../src/pages/login.page";
import { userData } from "../user-data";

describe('Feature Perform an Order', () => {
    let loginPage: LoginPage = new LoginPage();    
    
    beforeAll( async () => {
        await driverInstance.start(userData.browser);      
    }, 5000);

    it('Go To Page', async () => {
        await loginPage.navigateTo(userData.url)
    },100000);

    it('Click Initial Session', async () => {        
        await loginPage.clickInitialButton();
    },100000);

    it('Set email', async () => {        
        await loginPage.setEmail(userData.email);
    },100000);

    it('Click continue', async () => {        
        await loginPage.clickContinue();
    },100000);

    it('Set Password', async () => {        
        await loginPage.setPassword(userData.password);
    },100000);

    it('Clicks Continue login', async () => {
        
        await loginPage.clickContinueLogin();
    });

    afterAll(async () => {
        await driverInstance.closeDriver();

    });
});