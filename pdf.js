import { writeFile } from 'fs/promises';
import puppeteer from 'puppeteer';

const printPdf = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle0' });
  const pdf = await page.pdf({ format: 'A4' });

  await browser.close();
  return pdf;
};

const content = await printPdf();

writeFile('./public/saarinen_atte_cv.pdf', content)
  .then(() => console.log('PDF created'))
  .catch((err) => {
    if (err) {
      console.error(err);
    }

    console.log('PDF created');
  });
