import CommonClass from "./commonPage";

class CheckOutPage extends CommonClass{
    get cartAddIcon(){
        return $('//p[text()="Buy Now"]')

    }
    get cartPageValidation(){
        return $('//h1[text()="Cart"]')
    }
    
    get resetCartButtonvalidation(){
        return $('//button[text()="Reset cart"]')
    }
    get resetSuccessMessage(){
        return $('//h1[@class="font-titleFont text-xl font-bold uppercase"]');
    }

get subtotal() {
    return $('//p[contains(text(),"Subtotal")]//span[@class="font-semibold tracking-wide font-titleFont"]');
}

get shippingCharge() {
    return $('//p[contains(text(),"Shipping Charge")]//span[@class="font-semibold tracking-wide font-titleFont"]');
}

get total() {
    return $('//p[contains(text(),"Total")]//span[@class="font-bold tracking-wide text-lg font-titleFont"]');
}

async buyNowPage(){
    await this.cartAddIcon.click();
}

async priceValidationOfCart(){
     function parsePrice(text) {

        return parseFloat(String(text).replace('$', '').trim());
    }
   

    const subtotalText = await this.subtotal.getText();
    console.log("Subtotal Text:", subtotalText);
    const shippingText = await this.shippingCharge.getText();
    const totalText = await this.total.getText();

    const subtotal = parsePrice(subtotalText);       
    const shipping = parsePrice(shippingText);       // e.g. 20
    const total = parsePrice(totalText);             

    const expectedTotal = subtotal + shipping;
    await expect(total).toBeCloseTo(expectedTotal,2);
   




}

}

export default new CheckOutPage();