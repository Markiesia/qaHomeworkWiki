import {Google} from './googlePage';
const bacon = new Google();
const fs = require('fs');

test('do a search', async () => {
    await bacon.navigate();
    await bacon.search("Different Types of Reese's");
    let text = await bacon.getResults();
    expect(text).toContain("Reese's");
    await fs.writeFile(`${__dirname}/reeses.png`,
     await bacon.driver.takeScreenshot(), 'base64',
     (e) => {
         if (e) console.error(e)
         else console.log('Save Succesful')
     });
     await bacon.driver.quit();
});