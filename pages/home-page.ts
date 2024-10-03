import { expect, Locator, Page } from "@playwright/test";


export class HomePage{
    readonly page: Page
    readonly quoteButton: Locator;

    constructor(page: Page) {
        this.page=page
        this.quoteButton = page.locator('#get_camper');
    }

    async validateTitle(title){
        await expect(this.page).toHaveTitle(title);
    }
  
    async clickGetQuoteButton(){
        await expect(this.quoteButton).toBeVisible();
        await this.quoteButton.click();
    }
}