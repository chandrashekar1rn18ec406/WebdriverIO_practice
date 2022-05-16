const expectAssertion = require("chai").expect;
describe("UI Control Test Suite", async () => {
  xit("UI Control", async () => {
    await browser.url("https://www.rahulshettyacademy.com/loginpagePractise/");
    await $("input[name='username']").setValue("rahulshettyacademy");
    await $("//input[@type='password']").setValue("learning");
    //what if multiple elements
    // const radioButton = $$(".customradio");
    // const userDropdown = radioButton[1];
    // await userDropdown.$("span").click();
    // const modal = await $(".modal-body");
    // await modal.waitForDisplayed();
    // await $("#cancelBtn").click();
    // console.log(await $$(".customradio")[0].$("span").isSelected());
    const radioButtons = await $$(".customradio");
    const userDropdown = radioButtons[1];
    await userDropdown.$("span").click(); //chaining locators-
    const modal = await $(".modal-body");
    await modal.waitForDisplayed();
    await $("#cancelBtn").click();
    console.log(await $$(".customradio")[0].$("span").isSelected());
    // await browser.pause(3000);
    await userDropdown.$("span").click();
    await modal.waitForDisplayed();
    await $("#okayBtn").click();
    //validation  pop up nit displyed
    await $$(".customradio")[0].$("span").click();
    await expect(modal).not.toBeDisplayed();

    //select static dropdown
    const dropDown = $("select.form-control"); ///select Tag
    await dropDown.selectByVisibleText("Teacher");
    await browser.pause(3000);
    await dropDown.selectByAttribute("value", "consult");
    await browser.pause(2000);
    await dropDown.selectByIndex(1);
    await browser.pause(2000);
    console.log(await dropDown.getValue());

    //if we want compare the string boolean or compare actuall and expect value use CHAI Assertion
    //we want add library called chai --- npm i chai
    // and we import the asssertion in project
    expectAssertion(await dropDown.getValue()).to.equal("teach");
  });

  // RadioButton
  xit("Radio Button", async () => {
    await browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");
    await browser.pause(2000);
    await $("input[value='radio1']").click();
    await browser.pause(2000);
  });

  //  Dynamically drop down select particular  value
  xit("Dynamic drop down", async () => {
    await browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");
    await browser.pause(3000);
    $("#autocomplete").setValue("Ind");
    await browser.pause(3000);
    const item = await $$("[class='ui-menu-item'] div");
    for (let i = 0; i < (await item.length); i++) {
      if ((await item[i].getText()) === "Indonesia") {
        await item[i].click();
        await browser.pause(3000);
      }
    }
  });
  //cheackBox selection
  it("Checked Box", async () => {
    await browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");
    await browser.pause(2000);
    const ele = await $$("input[type='checkbox']");
    await ele[2].click();
    console.log(await ele[0].isSelected());
    console.log(await ele[1].isSelected());
    await browser.pause(2000);
    await browser.saveScreenshot("Screenshot.png");
  });
});
