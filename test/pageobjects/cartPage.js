import CommonClass from "./commonPage.js";


class CartPage extends CommonClass {
    constructor() {
        super();

        /**
         * Page-specific elements
         */ 
        this.products =()=> $$('//div[@class="w-full"]');
        this.wishListButton = ()=> $('//a[@href="/wishlist"]');
        this.wishListPageValidation =()=>  $('//h1[text()="Wishlist"]');
        this.wishListResetButton = ()=>$('//button[text()="Reset Wishlist"]');
        this.wishListResetSuccess = ()=>$('//h1[text()="Your Wishlist feels lonely."]');
        this.addProductToCart = ()=>$('.//button[contains(normalize-space(), "Add to Cart")]');
        this.cartPageMessage = ()=>$('//div[@class="Toastify__toast-icon Toastify--animate-icon Toastify__zoom-enter"]');
    }

    /**
     * Navigates to the shop, selects a random product, and clicks 'Add to Cart'.
     */
    async addRandomProductToCart() {
        await this.shopButton().click();

        const productList = await this.products();
        if (productList.length === 0) {
            throw new Error("No products Found");
        }

        await productList[0].waitForDisplayed({ timeout: 5000 });

        const randomIndex = Math.floor(Math.random() * productList.length);
        const selectedProduct = productList[randomIndex];

        await expect(selectedProduct).toBeDisplayed();

        const addToCartButton = selectedProduct.$('.//button[contains(normalize-space(), "Add to Cart")]');
        await addToCartButton.click();
    }
}

export default new CartPage();
