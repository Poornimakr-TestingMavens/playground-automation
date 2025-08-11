
import CommonClass from './commonPage.js';

class LoginPage extends CommonClass {
    constructor() {
        super();

        /**
         * Page-specific elements
         */ 
        this.inputUsername = ()=>$('//input[@id="email"]');
        this.inputPassword = ()=>$('//input[@id="password"]');
        this.btnSubmit = ()=>$('//button[@type="submit"]');
        this.loginButton =()=> $('//div[@class="max-w-container mx-auto"]/descendant::div[6]');
        this.signinButton = ()=>$('//a[@href="/signin"]');
        this.wishlistButton = ()=>$('//a[@href="/wishlist"]');
        this.profileButton = ()=>$('//p[text()="Profile"]');
        this.profileName = ()=>$('//p[@class="mb-4"][2]');
    }

    /**
     * Logs in with given email and password
     */
    async login(email, password) {
        await this.loginButton().click();
        await this.signinButton().click();
        await this.inputUsername().setValue(email);
        await this.inputPassword().setValue(password);
        await this.btnSubmit().click();
    }

    async homePage() {
        await this.profileButton().click();
    }
}

export default new LoginPage();
