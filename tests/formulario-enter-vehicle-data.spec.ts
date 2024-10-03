import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { SendQuotePage } from '../pages/send-quote-page';

test.describe('Enter Vehicle Data Form Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://sampleapp.tricentis.com/101/app.php');
    await expect(page).toHaveTitle(/Vehicle Data/);
  });

  test.afterEach(async ({ page }) => {
    await page.close()
  });

  test('Enviar Enter vehicle Data Form', async ({ page }) => {
    let homePage = new HomePage(page)
    let sendQuotePagePage = new SendQuotePage(page)

    // Validar titulo ao abrir a pagina Home
    // homePage.validateTitle('Tricentis Vehicle Insurance')
    // homePage.clickGetQuoteButton()

    // Validar titulo ao abrir a pagina SendQuote
    sendQuotePagePage.validarTitle('Enter Vehicle Data')
    sendQuotePagePage.validarMakeLabel();

    // Selecionar o make
    await page.selectOption('#make', { value: 'BMW'});
    // Selecionar um modelo
    await page.selectOption('#model', { value: 'Motorcycle'});

    // Preencher campos Cylinder e Engine
    await page.fill('#cylindercapacity', '1000');
    await page.fill('#engineperformance', '200');

    // Selecionar uma data
    /* Improve */
    await page.fill('#dateofmanufacture', '10/03/2024');
    //Selecionar o numero de cadeiras
    await page.selectOption('#numberofseats', { value: '3'});

    // await page.check('input[id="righthanddriveyes"]');
    await page.selectOption('#numberofseatsmotorcycle', { value: '3'});
    await page.selectOption('#fuel', { value: 'Diesel'});
    await page.fill('#payload', '197');
    await page.fill('#totalweight', '197');
    await page.fill('#listprice', '80000');
    await page.fill('#annualmileage', '20000');
    await page.click('#nextenterinsurantdata');

    const firstNameLabel = await page.locator('label.main', { hasText: 'First Name' });
    await expect(firstNameLabel).toBeVisible();
    await page.fill('#firstname', 'Charlie');
    await page.fill('#lastname', 'Kamp');
    await page.fill('#birthdate', '10/01/2000');
    await page.selectOption('#country', { value: 'Angola'});
    await page.fill('#zipcode', '1252014');
    await page.selectOption('#occupation', { value: 'Employee'});
    const skydivingLabel = await page.locator('label:has-text(" Skydiving")');
    await skydivingLabel.click();
    // Validate that the checkbox is now checked
    await expect(skydivingLabel).toBeChecked();

    await page.click('#nextenterproductdata');

    const startDateLabel = await page.locator('label.main', { hasText: 'Start Date' });
    await expect(startDateLabel).toBeVisible();
  });
});