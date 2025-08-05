import CommonClass from "./commonPage";

/**
 * CheckOutPage handles all cart and checkout-related interactions.
 */
class CheckOutPage extends CommonClass {

    /**
     * Returns the "Buy Now" button element on the product card.
     */
    get cartAddIcon() {
        return $('//p[text()="Buy Now"]');
    }

    /**
     * Returns the cart page title element used for validation.
     */
    get cartPageValidation() {
        return $('//h1[text()="Cart"]');
    }

    /**
     * Returns the "Reset cart" button on the cart page.
     */
    get resetCartButtonvalidation() {
        return $('//button[text()="Reset cart"]');
    }

    /**
     * Returns the success message element after cart is reset.
     */
    get resetSuccessMessage() {
        return $('//h1[@class="font-titleFont text-xl font-bold uppercase"]');
    }

    /**
     * Returns the element displaying the subtotal amount in the cart.
     */
    get subtotal() {
        return $('//p[contains(text(),"Subtotal")]//span[@class="font-semibold tracking-wide font-titleFont"]');
    }

    /**
     * Returns the element displaying the shipping charge in the cart.
     */
    get shippingCharge() {
        return $('//p[contains(text(),"Shipping Charge")]//span[@class="font-semibold tracking-wide font-titleFont"]');
    }

    /**
     * Returns the element displaying the total price in the cart.
     */
    get total() {
        return $('//p[contains(text(),"Total")]//span[@class="font-bold tracking-wide text-lg font-titleFont"]');
    }

    /**
     * Clicks the "Buy Now" button to navigate to the cart page.
     */
    async buyNowPage() {
        await this.cartAddIcon.click();
    }

    /**
     * Validates that the cart total = subtotal + shipping charge.
     * Fails the test if the displayed total does not match the expected calculation.
     */
    async priceValidationOfCart() {
        
        function parsePrice(text) {
            return parseFloat(String(text).replace('$', '').trim());
        }

        
        const subtotalText = await this.subtotal.getText();
        console.log("Subtotal Text:", subtotalText);
        const shippingText = await this.shippingCharge.getText();
        const totalText = await this.total.getText();

        const subtotal = parsePrice(subtotalText);
        const shipping = parsePrice(shippingText);
        const total = parsePrice(totalText);

       
        const expectedTotal = subtotal + shipping;
        await expect(total).toBeCloseTo(expectedTotal, 2); 
    }

}

export default new CheckOutPage();
