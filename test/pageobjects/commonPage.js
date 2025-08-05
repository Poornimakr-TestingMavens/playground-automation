/**
 * CommonClass provides shared methods and element getters 
 * that are reused across multiple pages.
 */
export default class CommonClass {

    /**
     * Navigates to the Playground website's homepage.
     * @returns {Promise<void>}
     */
    async open() {
        await browser.url('https://www.playground.testingmavens.tools/');
    }

    /**
     * Returns the 'Shop' navigation link element in the header.
     * @returns {Promise<WebdriverIO.Element>}
     */
    get shopButton() {
        return $('//ul[@class="md:flex items-center gap-4 hidden"]//a[@href="/shop"]');
    }

    /**
     * Returns the 'Shop by Category' filter element.
     * @returns {Promise<WebdriverIO.Element>}
     */
    get categoryButton() {
        return $('//span[text()="Shop by Category"]');
    }

    /**
     * Returns the 'Shop by Brand' filter element.
     * @returns {Promise<WebdriverIO.Element>}
     */
    get brandButton() {
        return $('//span[text()="Shop by Brand"]');
    }

    /**
     * Returns the 'Shop by Color' filter element.
     * @returns {Promise<WebdriverIO.Element>}
     */
    get shopByColor() {
        return $('//span[text()="Shop by Color"]');
    }
}
