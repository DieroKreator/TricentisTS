import { test, expect, Locator } from '@playwright/test';

test.describe('Enter Vehicle Data Form Tests', () => {

  class LandingPage {

    private page: any;
    readonly nextButton: Locator;

    constructor(page: any) {
      this.page = page;
      this.nextButton = page.locator('#nextenterinsurantdata');
    }

    async validateTitle(title){
      await expect(this.page).toHaveTitle(title);
    }

    async clickNextButton(){
      await this.nextButton.click();
    }
  }

  test.beforeEach(async ({ page }) => {
    await page.goto('https://sampleapp.tricentis.com/101/app.php');
    await expect(page).toHaveTitle(/Vehicle Data/);
  });

  test.afterEach(async ({ page }) => {
    await page.close()
  });

  test('Preencher Enter vehicle Data Form', async ({ page }) => {
    await page.locator('') //make title
    await page.selectOption('#make', { value: 'BMW'});
    await page.selectOption('#model', { value: 'Motorcycle'});
    await page.fill('#cylindercapacity', '1000');
    await page.fill('#engineperformance', '200');
    await page.fill('#dateofmanufacture', '10/01/2024');
    await page.selectOption('#numberofseats', { value: 'Motorcycle'});
    await page.check('input[id="righthanddriveyes"]');
    await page.selectOption('#numberofseatsmotorcycle', { value: '3'});
    await page.selectOption('#fuel', { value: 'Diesel'});
    await page.fill('#payload', '197');
    await page.fill('#totalweight', '197');
    await page.fill('#listprice', '80000');
    await page.fill('#annualmileage', '20000');
    await page.click('#nextenterinsurantdata');
  });
});