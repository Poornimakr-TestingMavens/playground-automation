import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import homePage from '../pageobjects/homePage.js'
import loginDetails from '../data/loginDetails.json'
import cartPage from '../pageobjects/cartPage.js'
import checkOutPage from '../pageobjects/checkOutPage.js'
import paymentPage from '../pageobjects/paymentPage.js'


describe('Playground Product Purchase', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(loginDetails.email, loginDetails.password);
        await LoginPage.wishlistButton().waitForDisplayed({timeout:10000,timeoutMsg:"Wishlist button did not exist in time."});
        await LoginPage.homePage();
        await expect(LoginPage.profileName()).toBeDisplayed();

    })
    it('Homepage displays all categories to buy',async()=>{
        await homePage.shopButton().click();
        await homePage.shopButton().waitForDisplayed({timeout:10000,timeoutMsg:"Shop button is not displayed even after 10 seconds."})

        await expect(homePage.categoryButton()).toBeDisplayed();
        await expect(homePage.brandButton()).toBeDisplayed();
        await expect(homePage.shopByColor()).toBeDisplayed();
    })
    it('add a product to wishlist',async () =>{
        await homePage.addRandomProductToWishlist();
        await expect(homePage.wishListedMessage()).toBeDisplayed();
    })
    it('Add a product to cart',async()=>{
        await cartPage.addRandomProductToCart();
        await expect(cartPage.cartPageMessage()).toBeDisplayed();
    })
    it('go to buy now page of cart',async()=>{
        await checkOutPage.buyNowPage();
        await expect(checkOutPage.cartPageValidation()).toBeDisplayed();
        await checkOutPage.priceValidationOfCart();
        await expect(checkOutPage.resetCartButtonvalidation()).toBeDisplayed();
    })
  
    it('successfully go to the payment page',async()=>{
        await paymentPage.clickCheckout();
        await expect(paymentPage.paymentPageValidation()).toBeDisplayed();
        await paymentPage.fillPaymentDetails();
        await paymentPage.placeOrder();
        await expect(paymentPage.orderPlacedMessage()).toBeDisplayed();


    })


})
