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
    let sendQuotePage = new SendQuotePage(page);

    // Validar titulo ao abrir a pagina Home
    /* homePage.validateTitle('Tricentis Vehicle Insurance')
    homePage.clickGetQuoteButton()*/

    // Validar titulo ao abrir a pagina SendQuote
    sendQuotePage.validarTitle('Enter Vehicle Data');
    sendQuotePage.validarMakeLabel();

    sendQuotePage.selecionarMake('BMW');
    sendQuotePage.selecionarModel('Motorcycle');

    // Preencher campos 
    await sendQuotePage.preencherCylinderCapacity('1000');
    await sendQuotePage.preencherEnginePerformance('200');

    // Selecionar uma data
    /* Improve */
    await page.fill('#dateofmanufacture', '10/03/2024');

    //Selecionar o numero de cadeiras
    await sendQuotePage.selecionarNumberofseats('3');

    // await page.check('input[id="righthanddriveyes"]');
    await sendQuotePage.selecionarNumberofseatsmotorcycle('3');
    await sendQuotePage.selecionarFuel('Diesel');

    //Preencher campos
    await sendQuotePage.preencherPayload('197');
    await sendQuotePage.preencherTotalweight('197');
    await sendQuotePage.preencherListprice('80000');
    await sendQuotePage.preencherAnnualmileage('20000');

    /* Click over Next button and navigate to next screen */
    await sendQuotePage.clickNextButton();
    /* Validar elemento na nova tela */
    sendQuotePage.validarFirstNameLabel('First Name');

    sendQuotePage.preencherFirstName('Charlie');
    sendQuotePage.preencherLastName('Kamp');
    sendQuotePage.preencherBirthdate('10/01/2000');
    sendQuotePage.selecionarCountry('Angola');
    sendQuotePage.preencherZipcode('1252014');
    sendQuotePage.selecionarOccupation('Employee');

    // Tried different strategies to interact with this element but without success,
    // I would ask on development if they can improve this. 
    // Checkbox input itself is hidden using position: absolute; left: -9999px
    
    /* Selecionar Hobbies com validação */
    await page.check('input[value="Skydiving"]');
    await sendQuotePage.selecionarHobbies();

    /* Navegar a proxima tela do formulario com validação */
    sendQuotePage.clickNextProductButton();
    sendQuotePage.validarStartDateLabel('Start Date');
  });
});