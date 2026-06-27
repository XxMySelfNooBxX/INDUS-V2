const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  const categories = [
    { name: 'Haulage', url: 'https://www.farmkingindia.com/categories/haulage.html' },
    { name: 'Harvesting', url: 'https://www.farmkingindia.com/categories/harvesting.html' },
    { name: 'Crop Production', url: 'https://www.farmkingindia.com/categories/crop-production.html' }
  ];

  let allData = {};

  for (const category of categories) {
    allData[category.name] = [];
    console.log(`Scraping category: ${category.name}`);
    await page.goto(category.url, { waitUntil: 'domcontentloaded' });
    
    const productLinks = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('a[href*="/product/"]')).map(a => a.href);
    });
    
    // Remove duplicates
    const uniqueLinks = [...new Set(productLinks)];
    console.log(`Found ${uniqueLinks.length} products in ${category.name}`);
    
    for (const link of uniqueLinks) {
      console.log(`Scraping product: ${link}`);
      try {
        await page.goto(link, { waitUntil: 'domcontentloaded' });
        const productData = await page.evaluate(() => {
          const title = document.querySelector('h1')?.innerText || document.querySelector('h2')?.innerText || '';
          
          // Get all tables
          const tables = Array.from(document.querySelectorAll('table')).map(table => {
            const rows = Array.from(table.querySelectorAll('tr')).map(row => {
              return Array.from(row.querySelectorAll('th, td')).map(cell => cell.innerText.trim());
            });
            return rows;
          });

          // Get all paragraphs
          const paragraphs = Array.from(document.querySelectorAll('p')).map(p => p.innerText.trim()).filter(p => p.length > 0);

          return {
            url: location.href,
            title,
            tables,
            paragraphs
          };
        });
        allData[category.name].push(productData);
      } catch (err) {
        console.error(`Error scraping ${link}:`, err.message);
      }
    }
  }

  await browser.close();
  fs.writeFileSync('farmking_data.json', JSON.stringify(allData, null, 2));
  console.log('Scraping complete.');
})();
