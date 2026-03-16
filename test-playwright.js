const { chromium } = require('playwright');

(async () => {
  // Launch browser
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Navigate to a test site
  await page.goto('https://example.com');
  
  // Take screenshot
  await page.screenshot({ path: 'example-test.png' });
  
  // Get page title
  const title = await page.title();
  console.log('Page title:', title);
  
  // Close browser
  await browser.close();
  
  console.log('Playwright test completed successfully!');
})();