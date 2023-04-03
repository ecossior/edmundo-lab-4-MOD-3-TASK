import { driverInstance } from "../src/core/driver";
import { LoginPage } from "../src/pages/login.page";
import { ProfilePage } from "../src/pages/profile.page";
import { ProfilesPage } from "../src/pages/profiles.page";
import { userData } from "../user-data";

describe('Feature to review if a new profile is created in Start account', () => {
    let loginPage: LoginPage = new LoginPage();    
    let profilePage: ProfilePage = new ProfilePage();
    let profilesPage: ProfilesPage = new ProfilesPage();
    
    beforeAll( async () => {
        await driverInstance.start(userData.browser);
        await loginPage.navigateTo(userData.url);
        await loginPage.Login(userData.email, userData.password);      
    }, 100000);

    test('Add a profile to list ', async () => {
        let avatarName = "Bart Simpson";
        let profileName = "Edmundo"
        await profilesPage.clickCreateProfile();
        await profilePage.selectAvatar(avatarName);
        await profilePage.setProfileName(profileName);
        await profilePage.clickSave();
        const response = await profilesPage.isProfileAdded(profileName);
        expect(response).not.toBeFalsy();        
    }, 300000);

    afterAll(async () => {
        await driverInstance.closeDriver();

    });
});