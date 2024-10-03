import { expect, Locator, Page } from "@playwright/test";


export class SendQuotePage{
    readonly page: Page
    readonly makeLabel: Locator;
    readonly nextButton: Locator;
    readonly firstNameLabel: Locator;
    readonly skydivingLabel: Locator;
    readonly nextProductButton: Locator;
    readonly startDateLabel: Locator;

    constructor(page: Page) {
        this.page=page
        this.makeLabel = page.locator('label.main', { hasText: 'Make' });
        this.nextButton = page.locator('#nextenterinsurantdata');
        this.firstNameLabel = page.locator('label.main');
        this.skydivingLabel = page.locator('label:has-text("Skydiving")');
        this.nextProductButton = page.locator('#nextenterproductdata');
        this.startDateLabel = page.locator('label.main');
    }

    async validarTitle(title){
        await expect(this.page).toHaveTitle(title);
    }

    async validarMakeLabel(){
        await expect(this.makeLabel).toBeVisible();
    }

    // Metodo pra selecionar do dropdown
    async selecionarMake(make: string) {
        await this.page.selectOption('#make', { value: make });
    }

    async selecionarModel(model: string) {
        await this.page.selectOption('#model', { value: model });
    }

    // Método pra preencher um campo
    async preencherCylinderCapacity(cylinderCapacity: string) {
        await this.page.fill('#cylindercapacity', cylinderCapacity);
    }

    async preencherEnginePerformance(enginePerformance: string) {
        await this.page.fill('#engineperformance', enginePerformance);
    }

    async selecionarNumberofseats(numberofseats: string) {
        await this.page.selectOption('#numberofseats', { value: numberofseats });
    }

    async selecionarNumberofseatsmotorcycle(numberofseatsmotorcycle: string) {
        await this.page.selectOption('#numberofseatsmotorcycle', { value: numberofseatsmotorcycle });
    }

    async selecionarFuel(fuel: string) {
        await this.page.selectOption('#fuel', { value: fuel });
    }

    async preencherPayload(payload: string) {
        await this.page.fill('#payload', payload);
    }

    async preencherTotalweight(totalweight: string) {
        await this.page.fill('#totalweight', totalweight);
    }

    async preencherListprice(listprice: string) {
        await this.page.fill('#listprice', listprice);
    }

    async preencherAnnualmileage(annualmileage: string) {
        await this.page.fill('#annualmileage', annualmileage);
    }

    async clickNextButton(){
        await this.nextButton.click();
    }

    async validarFirstNameLabel(label: string){
        await expect(this.firstNameLabel).toBeVisible();
        await expect(this.firstNameLabel).toHaveText(label)
    }

    async preencherFirstName(firstname: string) {
        await this.page.fill('#firstname', firstname);
    }

    async preencherLastName(lastname: string) {
        await this.page.fill('#lastname', lastname);
    }

    async preencherBirthdate(birthdate: string) {
        await this.page.fill('#birthdate', birthdate);
    }

    async selecionarCountry(country: string) {
        await this.page.selectOption('#country', { value: country });
    }

    async preencherZipcode(zipcode: string) {
        await this.page.fill('#zipcode', zipcode);
    }

    async selecionarOccupation(occupation: string) {
        await this.page.selectOption('#occupation', { value: occupation });
    }

    async selecionarHobbies() {
        await this.skydivingLabel.click();
        await expect(this.skydivingLabel).toBeChecked();
    }

    async clickNextProductButton(){
        await this.nextProductButton.click();
    }

    async validarStartDateLabel(label: string){
        await expect(this.startDateLabel).toBeVisible();
        await expect(this.startDateLabel).toHaveText(label)
    }
}