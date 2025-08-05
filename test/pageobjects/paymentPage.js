import CommonClass from "./commonPage";
import { fakeUser } from "./faker";

class PaymentPage extends CommonClass{
    get clickOnCheckoutButton(){
        return $('//button[text()="Proceed to Checkout"]');
    }
    get paymentPageValidation(){
        return $('//h1[@class="text-5xl text-primeColor font-titleFont font-bold"]');
    }
    get placeOrderButton(){
        return $('//button[@type="submit"]');
    }
    get orderPlacedMessage(){
        return $('//span[@class="font-semibold text-lg"]');
    }
    async fillPaymentDetails(){
        await $('//input[@name="fullName"]').setValue(fakeUser.fullName);
        await $('//input[@name="email"]').setValue(fakeUser.email);
        
        await $('//textarea[@name="address"]').setValue(
            `${fakeUser.address.street}, ${fakeUser.address.city}, ${fakeUser.address.state}, ${fakeUser.address.zip}`
        );
        await $('//input[@name="phone"]').setValue(fakeUser.phone);
    }

}

export default new PaymentPage();