import CommonClass from "./commonPage";
import { fakeUser } from "./faker";

/**
 * PaymentPage handles user interactions on the final checkout/payment page.
 */
class PaymentPage extends CommonClass {

    /**
     * Returns the "Proceed to Checkout" button element.
     */
    get clickOnCheckoutButton() {
        return $('//button[text()="Proceed to Checkout"]');
    }

    /**
     * Returns the header element to validate if the user is on the payment page.
     */
    get paymentPageValidation() {
        return $('//h1[@class="text-5xl text-primeColor font-titleFont font-bold"]');
    }

    /**
     * Returns the "Place Order" button element.
     */
    get placeOrderButton() {
        return $('//button[@type="submit"]');
    }

    /**
     * Returns the confirmation message element after an order is placed.
     */
    get orderPlacedMessage() {
        return $('//span[@class="font-semibold text-lg"]');
    }

    /**
     * Fills the payment form using fake user data.
     * Uses name, email, full address (concatenated), and phone number from `faker.js`.
     */
    async fillPaymentDetails() {
        await $('//input[@name="fullName"]').setValue(fakeUser.fullName);
        await $('//input[@name="email"]').setValue(fakeUser.email);

        
        await $('//textarea[@name="address"]').setValue(
            `${fakeUser.address.street}, ${fakeUser.address.city}, ${fakeUser.address.state}, ${fakeUser.address.zip}`
        );

        await $('//input[@name="phone"]').setValue(fakeUser.phone);
    }
}

export default new PaymentPage();
