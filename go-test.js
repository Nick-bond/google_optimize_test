const puppeteer = require('puppeteer');
const URL = '<URL>';
const quantityOfTestRun = 20;

let result = 1;

const testEnvForExper = () => {
  if (result === quantityOfTestRun) {
    clearInterval(timer);
    return;
  }

  (async () => {
    const browser = await puppeteer.launch();
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    await page.goto(URL);
    const status = await page.evaluate(() => {
      return {
        go_status: window.google_optimize.get(<Experiment_Id>),
        window_global_var_status: window.<Global_variable>,
      };
    });
    console.log(status)
    await browser.close();
  })();

  result += 1;
};

const timer = setInterval(testEnvForExper, 1000);
