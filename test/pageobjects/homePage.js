import CommonClass from "./commonPage";

/**
 * Homepage class handles interactions on the homepage like accessing products
 * and adding a random product to the wishlist.
 */
class Homepage extends CommonClass {

    /**
     * Returns all product card elements displayed on the shop page.
     * @returns {Promise<WebdriverIO.ElementArray>}
     */
    get products() {
        return $$('//div[@class="w-full"]');
    }


    /**
     * Gets the toast message element displayed after adding a product to the wishlist.
     * @returns {Promise<WebdriverIO.Element>}
     */
    get wishListedMessage() {
        return $('//div[@class="Toastify__toast-icon Toastify--animate-icon Toastify__zoom-enter"]');
    }

    /**
     * Clicks the 'Shop' button, waits for products to load, and adds a random product to the wishlist.
     * Throws an error if no products are found.
     * Waits for the selected product to be displayed before clicking the wishlist button inside it.
     * @returns {Promise<void>}
     */
    async addRandomProductToWishlist() {
        
        await this.shopButton.click();

        
        const productList = await this.products;
        if (productList.length === 0) {
            throw new Error("No products Found");
        }
        await productList[0].waitForDisplayed({ timeout: 5000 });

        
        const randomIndex = Math.floor(Math.random() * productList.length);
        const selectedProduct = productList[randomIndex];

        
        await expect(selectedProduct).toBeDisplayed();

        
        const wishListProduct = selectedProduct.$('//button[contains(text(), "Wish List")]');
        await wishListProduct.scrollIntoView();

        
        await wishListProduct.waitForDisplayed({ timeout: 10000 });


        
        await wishListProduct.click();
    }
}

export default new Homepage();
