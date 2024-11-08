//amazon.spec.ts
import { test, expect } from '@playwright/test';
import { AmazonClass } from '../../pages/amazon.page';

const product = "Apple iPhone 13 (128GB) - Midnight";

test('Navigate to Amazon.in', async ({ page }) => {
  await page.goto('https://amazon.in/');
  const url = await page.url();
  expect(url).toContain('amazon');
});
test(`Search for product - ${product}`, async ({ page }) => {
  const expAmazonTitle = "Amazon.in : iPhone";
  await page.goto('https://amazon.in/');
  let amazontest = new AmazonClass(page);
  await amazontest.typeSearchText();
  await amazontest.pressEnter();
  await amazontest.searchResult(expAmazonTitle);
});
test(`Buy iPhone - ${product}`, async ({ page, context }) => {
  const expAmazonTitle = "Amazon.in : iPhone";
  await page.goto('https://amazon.in/');
  let amazontest = new AmazonClass(page);
  await amazontest.typeSearchText();
  await amazontest.pressEnter();
  await amazontest.searchResult(expAmazonTitle);
  await amazontest.buyProduct(context, product);
});