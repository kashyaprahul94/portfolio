import { Readable } from "stream";
import puppeteer from "puppeteer";

import { APP_NAME, APP_VERSION } from "./config";

class Service {
  public async getSystemHealth() {
    return {
      status: "OK",
      name: APP_NAME,
      version: APP_VERSION,
    };
  }

  public async generatePDFFromURL(url: string) {
    const browser = await puppeteer.launch({
      headless: true,
      devtools: false,
    });
    const page = await browser.newPage();

    await page.goto(url);

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      scale: 0.77,
    });

    await browser.close();

    const pdfStream = new Readable({});
    pdfStream.push(pdfBuffer);
    pdfStream.push(null);

    return {
      pdfStream,
    };
  }
}

const service = new Service();

export default service;
export { Service };
