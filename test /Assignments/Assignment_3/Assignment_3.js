describe("Use the hooks feature provided by wdio and generate log file", async () => {
  //First testCase is Passed
  it("TC001- click", async () => {
    await browser.url("https://www.freshworks.com/");
    await $(".nav-label[href='/customers/']").click();
  });
  //Second test case is passed
  it("Tc002 - getting element from array", async () => {
    await browser.url("https://jqueryui.com/");
    var element = await $$(".menu-item");
    var elm = element[3];
    console.log("Getting a text of fourth item === ", await elm.getText());
  });
  //Third test case failed
  it("TC003 -list in array find last element ", async () => {
    await browser.url("https://jqueryui.com/");
    var element = await $$(".menus-item");
    var elem = element[element.length - 1];
    console.log("find last element in array is ==  ", await elem.getText());
  });

  //Forth Test case pas
  it("TC004 - gettext", async () => {
    browser.url("https://www.freshworks.com/");
    const getText = await $("h1").getText();
    console.log(getText);
  });
  //Five Test case failed
  it("TC005 - Add Value", async () => {
    await browser.url("https://jquery.com/");
    await $('[namae="s"]').setValue("Search");
    await browser.pause(3000);
    await $('[name="s"]').addValue("Selectors");
    await browser.pause(3000);
  });
});
