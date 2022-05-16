// Accepting an Alert
describe("Alert", async () => {
  xit("TC060_Accept Alert", async () => {
    await browser.url("https://the-internet.herokuapp.com/javascript_alerts");
    await $("button=Click for JS Confirm").click();
    await browser.debug();
    await browser.acceptAlert();
    await browser.debug();
  });

  xit("TC061_Dismiss Alert", async () => {
    await browser
      .url("https://the-internet.herokuapp.com/javascript_alerts")
      .$("button=Click for JS Confirm")
      .click();
    await browser.debug();
    await browser.dismissAlert();
    await browser.debug();
  });

  xit("TC062_Send Message to Alert", async () => {
    await browser.url("https://the-internet.herokuapp.com/javascript_alerts");
    await $("button=Click for JS Prompt").click();
    await browser.pause(2000);
    await browser.sendAlertText("csg is Awesome!!!");
    await browser.pause(2000);
    await browser.acceptAlert();
    await browser.pause(5000);
    // await browser.saveScreenshot(
    //   "/Users/chandrashekar/Desktop/New WEBDriverIo/screenshots/TC062_sendAlertText.png"
    // );
  });
  it("TC062_Read Message from Alert", async () => {
    await browser.url("https://the-internet.herokuapp.com/javascript_alerts");
    await $("button=Click for JS Prompt").click();
    await browser.pause(2000);
    console.log("Alert says: " + (await browser.getAlertText()));
  });
});
