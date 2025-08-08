import CommonClass from "./commonPage";

/**
 * CartPage class handles interactions with the product listing and cart functionality
 * such as selecting a product and adding it to the cart.
 */
class CartPage extends CommonClass {

    /**
     * Gets the list of all product cards displayed on the page.
     * @returns {Promise<WebdriverIO.ElementArray>}
     */
    get products() {
        return $$('//div[@class="w-full"]');
    }
    get wishListButton(){
        return $('//a[@href="/wishlist"]');
    }
    get wishListPageValidation(){
        return $('//h1[text()="Wishlist"]');
    }
    get wishListResetButton(){
        return $('//button[text()="Reset Wishlist"]');
    }
    get wishListResetSuccess(){
        return $('//h1[text()="Your Wishlist feels lonely."]');
    }

    /**
     * (Not used in current method) - Gets the 'Add to Cart' button.
     * You can use this if targeting a single static button.
     * @returns {Promise<WebdriverIO.Element>}
     */
    get addProductToCart() {
        return $('.//button[contains(normalize-space(), "Add to Cart")]');
    }

    /**
     * Gets the toast notification element that appears after adding a product to cart.
     * @returns {Promise<WebdriverIO.Element>}
     */
    get cartPageMessage() {
        return $('//div[@class="Toastify__toast-icon Toastify--animate-icon Toastify__zoom-enter"]');
    }

    /**
     * Navigates to the shop, selects a random product, and clicks 'Add to Cart'.
     * Throws an error if no products are found.
     * Waits for the product to be displayed before interacting with it.
     */
    async addRandomProductToCart() {
       
        await this.shopButton.click();

        const productList = await this.products;
        await productList[0].waitForDisplayed({ timeout: 5000 });

        const totalList = productList.length;

        if (totalList === 0) {
            throw new Error("No products Found");
        }

        
        const randomIndex = Math.floor(Math.random() * productList.length);
        const selectedProduct = productList[randomIndex];

        
        await expect(selectedProduct).toBeDisplayed();

        
        const wishListProduct = selectedProduct.$('.//button[contains(normalize-space(), "Add to Cart")]');

        await wishListProduct.click();
    }
    async 
}

export default new CartPage();
