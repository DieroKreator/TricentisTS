import { expect, Locator, Page } from "@playwright/test";


export class SendQuotePage{
    readonly page: Page
    readonly makeLabel: Locator;
    readonly modelDropdown: Locator;

    constructor(page: Page) {
        this.page=page
        this.makeLabel = page.locator('label.main', { hasText: 'Make' });
        // this.modelDropdown = page.locator('#make', { value: 'BMW' });
    }

    async validarTitle(title){
        await expect(this.page).toHaveTitle(title);
    }

    async validarMakeLabel(){
        await expect(this.makeLabel).toBeVisible();
    }
  
    // async selecionarMake(){
    //     await this.modelDropdown.selectOption('#make', { value: 'BMW'});
    //     await expect(this.quoteButton).toBeVisible();
    //     await this.quoteButton.click();
    // }
    
    // async selecionarModelo(){
    //     await modelDropdown.selectOption('#make', { value: 'BMW'});
    // }
}