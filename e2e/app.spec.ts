import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});

test.describe('Home page', () => {
  test('get started with countries app', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'World Countries' })).toBeVisible();
  });

  test('user interacts with country card', async ({ page }) => {
    const countryCard = page.getByText('europe');

    await countryCard.click();

    const navigateBackButton = page.getByRole('button', { name: 'Back to home page' });

    await expect(navigateBackButton).toBeVisible();
    await expect(countryCard).not.toBeVisible();
  });

  test('user interacts with country card and navigating back', async ({ page }) => {
    const countryCard = page.getByText('europe');

    await countryCard.click();

    const navigateBackButton = page.getByRole('button', { name: 'Back to home page' });

    await navigateBackButton.click();
    await expect(navigateBackButton).not.toBeVisible();
    await expect(countryCard).toBeVisible();
  });

  test('user select the Europe as a continent and Poland should be present as one of the result', async ({
    page
  }) => {
    const countryCard = page.getByText('europe');

    await countryCard.click();

    await expect(page.getByRole('heading', { level: 2, name: 'Poland' })).toBeVisible();
  });

  test('user select the Europe as a continent and Argentina should not be present as one of the result', async ({
    page
  }) => {
    const countryCard = page.getByText('europe');

    await countryCard.click();

    await expect(page.getByRole('heading', { level: 2, name: 'Argentina' })).not.toBeVisible();
  });
});

test.describe('Filtering countries', () => {
  test('user select the a continent and dropdown for selection subregion should be present', async ({
    page
  }) => {
    const countryCard = page.getByText('europe');

    await countryCard.click();

    await expect(page.getByTestId('region')).toBeVisible();
  });
  test('user select the a continent and dropdown for filtering countries by order should be present', async ({
    page
  }) => {
    const countryCard = page.getByText('europe');

    await countryCard.click();

    await expect(page.getByTestId('subregion')).toBeVisible();
  });

  test('user click on a dropdown button to select a region', async ({ page }) => {
    const countryCard = page.getByText('europe');

    await countryCard.click();

    await page.click('text=Select subregion');

    await expect(page.getByRole('listitem').filter({ hasText: 'Central Europe' })).toBeVisible();
  });
  test('user click on a dropdown button to select filtering option', async ({ page }) => {
    const countryCard = page.getByText('europe');

    await countryCard.click();

    await page.click('text=Order countries by');

    await expect(page.getByRole('listitem').filter({ hasText: 'Filter from A-Z' })).toBeVisible();
  });

  test('user select a region from a dropdown and countries from this region should be displayed', async ({
    page
  }) => {
    const countryCard = page.getByText('europe');

    await countryCard.click();

    await page.click('text=Select subregion');

    const centralEuropeSubregionBtn = page
      .getByRole('listitem')
      .filter({ hasText: 'Central Europe' });

    await centralEuropeSubregionBtn.click();

    await expect(page.getByText('Hungary')).toBeVisible();
    const countriesTitle = page.locator('[data-testid="subregion-country"]');

    const count = await countriesTitle.count();

    expect(count).toBe(6);
  });
  test('user select to order countries in ascending order and list of countries should be ordered by this', async ({
    page
  }) => {
    const countryCard = page.getByText('europe');

    await countryCard.click();

    await page.click('text=Select subregion');

    const centralEuropeSubregionBtn = page
      .getByRole('listitem')
      .filter({ hasText: 'Southern Europe' });

    await centralEuropeSubregionBtn.click();

    await expect(page.getByText('Cyprus')).toBeVisible();

    await page.click('text=Order countries by');

    const orderCountriesASC = page.getByRole('listitem').filter({ hasText: 'Filter from A-Z' });

    await orderCountriesASC.click();

    const countriesTitles = page.locator('[data-testid="subregion-country"]');

    await expect(countriesTitles.nth(0)).toContainText('Andorra');
  });
  test('user select to order countries in descending order and list of countries should be ordered by this', async ({
    page
  }) => {
    const countryCard = page.getByText('europe');

    await countryCard.click();

    await page.click('text=Select subregion');

    const centralEuropeSubregionBtn = page
      .getByRole('listitem')
      .filter({ hasText: 'Southern Europe' });

    await centralEuropeSubregionBtn.click();

    await expect(page.getByText('Cyprus')).toBeVisible();

    await page.click('text=Order countries by');

    const orderCountriesASC = page.getByRole('listitem').filter({ hasText: 'Filter from Z-A' });

    await orderCountriesASC.click();

    const countriesTitles = page.locator('[data-testid="subregion-country"]');

    await expect(countriesTitles.nth(0)).toContainText('Vatican');
  });
  test('switch selection on subregion should clear the selection of filter dropdown', async ({
    page
  }) => {
    const countryCard = page.getByText('europe');

    await countryCard.click();

    await page.click('text=Select subregion');

    const centralEuropeSubregionBtn = page
      .getByRole('listitem')
      .filter({ hasText: 'Southern Europe' });

    await centralEuropeSubregionBtn.click();

    await expect(page.getByText('Cyprus')).toBeVisible();

    await page.click('text=Order countries by');

    const orderCountriesASC = page.getByRole('listitem').filter({ hasText: 'Filter from Z-A' });

    await orderCountriesASC.click();

    const countriesTitles = page.locator('[data-testid="subregion-country"]');

    await expect(countriesTitles.nth(0)).toContainText('Vatican');

    await page.click('text=Southern Europe');
    await page.click('text=Southeast Europe');
    await expect(page.getByRole('heading', { name: 'Serbia' })).toBeVisible();
    const filterByOrder = page.getByTestId('subregion');
    await expect(filterByOrder).toBeVisible();
    expect(orderCountriesASC).not.toBeVisible();
  });
});
