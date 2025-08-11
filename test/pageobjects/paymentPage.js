import CommonClass from "./commonPage.js";
import { fakeUser } from "./faker.js";


class PaymentPage extends CommonClass {
    constructor() {
        super();

        /**
         * Page-specific elements
         */ 
        this.clickOnCheckoutButton = () => $('//button[text()="Proceed to Checkout"]');
        this.paymentPageValidation =() => $('//h1[@class="text-5xl text-primeColor font-titleFont font-bold"]');
        this.placeOrderButton = () => $('//button[@type="submit"]');
        this.orderPlacedMessage = ()=>$('//span[@class="font-semibold text-lg"]');
        this.fullNameInput = () => $('//input[@name="fullName"]');
        this.emailInput = () => $('//input[@name="email"]');
        this.addressTextarea = () => $('//textarea[@name="address"]');
        this.phoneInput = () => $('//input[@name="phone"]');
    }

    /**
     * Fills the payment form using fake user data.
     */
    async fillPaymentDetails() {
         await this.fullNameInput().setValue(fakeUser.fullName);
    await this.emailInput().setValue(fakeUser.email);
    await this.addressTextarea().setValue(`${fakeUser.address.street}, ${fakeUser.address.city}, ${fakeUser.address.state}, ${fakeUser.address.zip}`
    );
    await this.phoneInput().setValue(fakeUser.phone);
     
      
    }
    async clickCheckout() {
    await this.clickOnCheckoutButton().click();
    }
    async placeOrder(){
    await this.placeOrderButton().click();
    }

}

export default new PaymentPage();
