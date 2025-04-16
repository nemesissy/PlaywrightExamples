const {test, expect} =  require('@playwright/test');
const { HomePage } = require('../pages/amsPages');
const { ResultsPage } = require('../pages/amsPages');
const { ArticlesPage } = require('../pages/amsPages');

test.beforeEach('Login', async ({ page }) => 
{
    await page.goto("https://www.amsmeteors.org/");
});

test('Verify Home Link', async ({page}) =>
{    
    const homePage = new HomePage(page);

    await homePage.homeButton.click();
    expect(homePage.meteorsButton).toBeEnabled;

});

test.only('Verify Searching for an Article', async ({page}) =>
{
    const homePage = new HomePage(page);

    await homePage.searchInput.fill("Fireball");
    await homePage.searchInput.press('Enter');
    
    const resultsPage = new SearchResultsPage(page);

    await resultsPage.a

});