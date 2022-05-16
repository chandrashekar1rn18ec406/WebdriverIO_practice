const homePage = require("../pageobjects/homePage");

describe("Home Page elements", async () => {
  it("Verify home page elents", async () => {
    await browser.url("https://www.freshworks.com/");
    homePage.pageHeader.getText();
    const subHead = await homePage.subHeading.getText();
    console.log(subHead);
    await browser.pause(2000);
    await homePage.customerLink.click();
    await browser.pause(2000);
  });
});
