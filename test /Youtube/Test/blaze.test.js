const blaze = require("../pageobjects/blazeMeter");

describe("Blaze Meter page", async () => {
  xit("TC001 - filter list", async () => {
    await browser.url("https://www.blazemeter.com/");
    await blaze.getTextForLiList();
    await blaze.getTextForLi();
    await blaze.tryLiList();
    console.log("first li element", await blaze.specificElement(1).getText());
  });
  xit("TC002- main heading Exitsing", async () => {
    await browser.url("https://www.blazemeter.com/");
    await blaze.textExit.isDisplayed();
    console.log("MAIN HEADING === ", await blaze.textExit.getText());
  });
  xit("TC003- Enabled", async () => {
    await browser.url("https://www.blazemeter.com/");
    await blaze.textExit.isEnabled();
  });
  xit("TC004- Existing", async () => {
    await browser.url("https://www.blazemeter.com/");
    await blaze.textExit.isExisting();
    // console.log("MAIN HEADING === ", await blaze.textExit.getText());
  });
  xit("TC005 - Viewport", async () => {
    await browser.url("https://www.blazemeter.com/");
    await blaze.textExit.isDisplayedInViewport();
    // console.log("MAIN HEADING === ", await blaze.textExit.getText());
  });
  it("TC006 - Product link click", async () => {
    await browser.url("https://www.blazemeter.com/");
    await browser.pause(2000);
    await blaze.productLinkClick();
    // console.log("MAIN HEADING === ", await blaze.textExit.getText());
  });
});
