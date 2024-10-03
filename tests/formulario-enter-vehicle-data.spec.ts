import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { SendQuotePage } from '../pages/send-quote-page';

test.describe('Enter Vehicle Data Form Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://sampleapp.tricentis.com/101/app.php');
    /* Validar a pagina abriu */
    await expect(page).toHaveTitle(/Vehicle Data/);
  });

  test.afterEach(async ({ page }) => {
    await page.close()
  });

  test('Enviar Enter vehicle Data Form', async ({ page }) => {
    let homePage = new HomePage(page);
    let sendQuotePagePage = new SendQuotePage(page);

    // Validar titulo ao abrir a pagina Home
    /* homePage.validateTitle('Tricentis Vehicle Insurance')
    homePage.clickGetQuoteButton()*/

    // Validar titulo ao abrir a pagina SendQuote
    sendQuotePagePage.validarTitle('Enter Vehicle Data');
    sendQuotePagePage.validarMakeLabel();

    sendQuotePagePage.selecionarMake('BMW');
    sendQuotePagePage.selecionarModel('Motorcycle');

    // Preencher campos 
    await sendQuotePagePage.preencherCylinderCapacity('1000');
    await sendQuotePagePage.preencherEnginePerformance('200');

    // Selecionar uma data
    /* Improve */
    await page.fill('#dateofmanufacture', '10/03/2024');

    //Selecionar o numero de cadeiras
    await sendQuotePagePage.selecionarNumberofseats('3');

    // await page.check('input[id="righthanddriveyes"]');
    await sendQuotePagePage.selecionarNumberofseatsmotorcycle('3');
    await sendQuotePagePage.selecionarFuel('Diesel');

    //Preencher campos
    await sendQuotePagePage.preencherPayload('197');
    await sendQuotePagePage.preencherTotalweight('197');
    await sendQuotePagePage.preencherListprice('80000');
    await sendQuotePagePage.preencherAnnualmileage('20000');

    /* Click over Next button and navigate to next screen */
    await sendQuotePagePage.clickNextButton();
    /* Validar elemento na nova tela */
    sendQuotePagePage.validarFirstNameLabel('First Name');

    sendQuotePagePage.preencherFirstName('Charlie');
    sendQuotePagePage.preencherLastName('Kamp');
    sendQuotePagePage.preencherBirthdate('10/01/2000');
    sendQuotePagePage.selecionarCountry('Angola');
    sendQuotePagePage.preencherZipcode('1252014');
    sendQuotePagePage.selecionarOccupation('Employee');

    /* Selecionar Hobbies com validação */
    await sendQuotePagePage.selecionarHobbies();

    /* Navegar a proxima tela do formulario com validação */
    sendQuotePagePage.clickNextProductButton();
    sendQuotePagePage.validarStartDateLabel('Start Date');
  });
});