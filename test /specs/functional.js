const assertionexpected = require("chai").expect;
describe("Functional test", async () => {
  //scroll and mouse hover
  xit("Mouse hover test case", async () => {
    await browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");
    await $("#mousehover").scrollIntoView();
    await browser.pause(3000);
    await $("#mousehover").moveTo();
    await browser.pause(3000);
    await $("=Top").click();
    await browser.pause(3000);
  });
  it("JavaScript Alert", async () => {
    browser.url("https://only-testing-blog.blogspot.com/2014/09/");
    await browser.pause(2000);
    await $("//button").doubleClick();
    await browser.pause(2000);
    console.log(await browser.isAlertOpen());
    assertionexpected(await browser.isAlertOpen()).to.be.true;
    assertionexpected(await browser.getAlertText()).to.be.equal(
      "You double clicked me.. Thank You.."
    );

    await browser.acceptAlert();
    await browser.pause(3000);
  });
});
