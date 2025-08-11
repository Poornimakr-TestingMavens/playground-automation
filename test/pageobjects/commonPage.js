
export default class CommonClass {
    constructor() {
        /**
         * Initialize commonly used elements
         */ 
        this.shopButton =()=> $('//ul[@class="md:flex items-center gap-4 hidden"]//a[@href="/shop"]');
        this.categoryButton = ()=>$('//span[text()="Shop by Category"]');
        this.brandButton = ()=>$('//span[text()="Shop by Brand"]');
        this.shopByColor = ()=>$('//span[text()="Shop by Color"]');
    }

    /**
     * Navigates to the Playground website's homepage.
     * @returns {Promise<void>}
     */
    async open() {
        await browser.url('https://www.playground.testingmavens.tools/');
    }
}
