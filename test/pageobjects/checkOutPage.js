import CommonClass from "./commonPage.js";


class CheckOutPage extends CommonClass {
    constructor() {
        super();

        /**
         * Page-specific elements
         */ 
        this.cartAddIcon = ()=>$('//p[text()="Buy Now"]');
        this.cartPageValidation = ()=>$('//h1[text()="Cart"]');
        this.resetCartButtonvalidation = ()=>$('//button[text()="Reset cart"]');
        this.resetSuccessMessage = ()=>$('//h1[@class="font-titleFont text-xl font-bold uppercase"]');
        this.subtotal = ()=>$('//p[contains(text(),"Subtotal")]//span[@class="font-semibold tracking-wide font-titleFont"]');
        this.shippingCharge = ()=>$('//p[contains(text(),"Shipping Charge")]//span[@class="font-semibold tracking-wide font-titleFont"]');
        this.total = ()=>$('//p[contains(text(),"Total")]//span[@class="font-bold tracking-wide text-lg font-titleFont"]');
    }

    /**
     * Clicks the "Buy Now" button to navigate to the cart page.
     */
    async buyNowPage() {
        await this.cartAddIcon().click();
    }

    /**
     * Validates that the cart total = subtotal + shipping charge.
     */
    async priceValidationOfCart() {
    const parsePrice = (text) => parseFloat(String(text).replace('$', '').trim());

    const subtotalText = await this.subtotal().getText();
    const shippingText = await this.shippingCharge().getText();
    const totalText = await this.total().getText();

    const subtotal = parsePrice(subtotalText);
    const shipping = parsePrice(shippingText);
    const total = parsePrice(totalText);

    const expectedTotal = subtotal + shipping;
    await expect(total).toBeCloseTo(expectedTotal, 2);
    }

}

export default new CheckOutPage();
