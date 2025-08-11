import CommonClass from "./commonPage.js";

class HomePage extends CommonClass {
    constructor() {
        super();

        /**
         * Page-specific elements
         */ 
         
        this.products = () => $$('//div[@class="w-full"]');
        this.wishListedMessage = () => $('//div[contains(@class,"Toastify__toast-icon")]');
    }

    /**
     * Clicks the 'Shop' button, waits for products to load, and adds a random product to the wishlist.
     */
    async addRandomProductToWishlist() {
        await this.shopButton().click();

        
        await browser.waitUntil(async () => {
            const products = await this.products();
            return products.length > 0;
        }, {
            timeout: 10000,
            timeoutMsg: 'Products did not load in time'
        });

        const productList = await this.products();  

        if (productList.length === 0) {
            throw new Error("No products Found");
        }

        /**
         * Pick random product
         */ 
        const randomIndex = Math.floor(Math.random() * productList.length);
        const selectedProduct = productList[randomIndex];

        await selectedProduct.waitForDisplayed({timeout:8000,timeoutMsg:"Selected product is not displayed even after 8 seconds"});

        /**
         * Find the wishlist button inside the product
         */ 
        const wishListProduct = await selectedProduct.$('.//button[contains(text(), "Wish List")]');
        await wishListProduct.waitForExist({ timeout: 10000, timeoutMsg: 'Wish List button did not exist in time' });

        await wishListProduct.waitForDisplayed({ 
            timeout: 10000, 
            timeoutMsg: 'Wish List button was not displayed within 10 seconds inside the selected product' 
        });
        await wishListProduct.scrollIntoView();
      
        await wishListProduct.click();
    }
}

export default new HomePage();
