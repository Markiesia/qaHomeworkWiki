import {BasePage} from "./basePage";
import {By} from "selenium-webdriver";

export class Google extends BasePage {
    searchBar: By = By.id("APjFqb");
    results: By = By.id('rcnt')
    constructor() {
        super({url: "https://www.google.com"});
    };
    async search(searchThingy: string) {
        return this.setInput(this.searchBar, `${searchThingy}\n`)
    };
    async getResults() {
        return this.getText(this.results)
    };
};