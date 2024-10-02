import { expect, Locator, Page } from "@playwright/test";


export class HomePage{
    readonly page: Page
    readonly nextButton: Locator;

    constructor(page: Page) {
        this.page=page
        this.nextButton = page.locator('#nextenterinsurantdata');
    }

    async validateTitle(title){
        await expect(this.page).toHaveTitle(title);
      }
  
    async clickNextButton(){
    await this.nextButton.click();
    }
}