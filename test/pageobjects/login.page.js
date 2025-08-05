import { $ } from '@wdio/globals'
import CommonClass from './commonPage';



/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends CommonClass {
    
    
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('//input[@id="email"]');
    }

    get inputPassword () {
        return $('//input[@id="password"]');
    }

    get btnSubmit () {
        return $('//button[@type="submit"]');
    }
    get loginButton(){
        return $('//div[@class="max-w-container mx-auto"]/descendant::div[6]')
    }
    get signinButton(){
        return $('//a[@href="/signin"]');
    }
    get wishlistButton(){
        return $('//a[@href="/wishlist"]');
    }
    get profileButton(){
        return $('//p[text()="Profile"]');
    }
    get profileName(){
        return $('//p[@class="mb-4"][2]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(email,password){
        await this.loginButton.click();
        await this.signinButton.click();


        await this.inputUsername.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        
        
        
        

    }
    async homePage(){
        await this.profileButton.click();
    }

    
    
}

export default new LoginPage();
