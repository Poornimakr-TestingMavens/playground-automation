import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import homePage from '../pageobjects/homePage.js'
import loginDetails from '../data/loginDetails.json'
import cartPage from '../pageobjects/cartPage.js'
import checkOutPage from '../pageobjects/checkOutPage.js'



describe('Playground Reset', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(loginDetails.email, loginDetails.password);
        await LoginPage.wishlistButton.waitForDisplayed({timeout:5000});
        await LoginPage.homePage();
        await expect(LoginPage.profileName).toBeDisplayed({timeout:5000});

    })
    it('Homepage displays all categories to buy',async()=>{
        await homePage.shopButton.click();

        await expect(homePage.categoryButton).toBeDisplayed({timeout:5000});
        await expect(homePage.brandButton).toBeDisplayed({timeout:5000});
        await expect(homePage.shopByColor).toBeDisplayed();
    })
   
    it('Add a product to cart',async()=>{
        await cartPage.addRandomProductToCart();
        await expect(cartPage.cartPageMessage).toBeDisplayed();
    })
    it('go to buy now page of cart',async()=>{
        await checkOutPage.buyNowPage();
        await expect(checkOutPage.cartPageValidation).toBeDisplayed();
        await checkOutPage.priceValidationOfCart();
        await expect(checkOutPage.resetCartButtonvalidation).toBeDisplayed();
    })
    it('working of reset cart button',async()=>{
        await checkOutPage.resetCartButtonvalidation.click();
        await expect(checkOutPage.resetSuccessMessage).toBeDisplayed();


    })
    it('working of reset wishlist button',async()=>{
        await cartPage.wishListButton.click();
        await expect(cartPage.wishListPageValidation).toBeDisplayed();
        await cartPage.wishListResetButton.click();
        await expect(cartPage.wishListResetSuccess).toBeDisplayed();



    })

})


