describe("Count element", async () => {
  //   it("TC024_All Links From page via MAP", async () => {
  //     browser.url("https://jqueryui.com/");
  //     var elems = await $$("<a />");
  //     console.log("Links on the webpage are: ");
  //     await elems.map(function (item) {
  //       console.log(item.getAttribute("href"));
  //     });
  //   });
  //   it("Hdbsbdd", async () => {
  //     browser.url("https://the-internet.herokuapp.com/javascript_alerts");
  //     await $("button=Click for JS Confirm").click();
  //     browser.debug();
  //     await browser.pause(3000);
  //     browser.acceptAlert();
  //     await browser.pause(3000);
  //     browser.debug();
  //     await browser.pause(3000);
  //   });

  //   it("TC062_Read Message from Alert", async () => {
  //     browser.url("https://the-internet.herokuapp.com/javascript_alerts");
  //     await $("button=Click for JS Prompt").click();
  //     browser.pause(2000);
  //     console.log("Alert says: " + (await browser.getAlertText()));
  //   });

  //   it("TC068_Get Cookies", async () => {
  //     browser.url("https://the-internet.herokuapp.com/");
  //     console.log(await browser.getCookies()); //all cookies
  //     // console.log("////////////////////////");
  //     // console.log(await browser.getCookies(["optimizelyBuckets"])); //specific cookies;
  //   });
  //   it("TC119_Pause", async () => {
  //     browser.url("https://the-internet.herokuapp.com/dynamic_loading/1");
  //     await browser.pause(3000);
  //     await $("button=Start").click();
  //     await browser.pause(3000);
  //     console.log("TEXT IS " + (await $("#finish").$("<h4/>").getText()));
  //   });
  // waitForClickable()
  it("TC120_waitForClickable", async () => {
    browser.url("https://output.jsbin.com/gecequg");
    var button = await $("#MY_ID");
    await button.waitForClickable();
    await button.click();
    console.log("Text After Button click: " + (await $("#demo").getText()));
  });
});
