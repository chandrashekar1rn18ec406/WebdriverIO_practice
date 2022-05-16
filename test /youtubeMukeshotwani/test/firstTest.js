describe("Element Command", async () => {
  xit("Filling from", async () => {
    await browser.url("https://opensource-demo.orangehrmlive.com/");
    await browser.maximizeWindow();
    await browser.pause(2000);
    const username = await $("input#txtUsername");
    const password = await $("[name='txtPassword']");
    await username.setValue("Admin");
    await browser.pause(2000);
    await username.clearValue();
    await browser.pause(2000);
    await username.setValue("Admin");
    const userValue = await username.getValue();
    console.log("User Name value", userValue);
    await password.setValue("admin123");
    const passwordValue = await password.getValue();
    console.log("Password Value", passwordValue);
    await browser.pause(2000);
    const buttonClick = $("[name='Submit']");
    const clickableStatus = await buttonClick.isClickable();
    const enableStatus = await buttonClick.isEnabled();
    const displayStatus = await buttonClick.isDisplayed();
    console.log(" Button is clickable status ?", clickableStatus);
    console.log("Login button is enable status ? ", enableStatus);
    console.log("Login button is Displayed status ?", displayStatus);
    //Expect Assertion

    // await expect(buttonClick).toBeClickable();
    // const loginButtonValue = await buttonClick.getAttribute("value");
    // console.log("Login button value", loginButtonValue);
    // const loginCssProperty = await buttonClick.getCSSProperty("font-weight");
    // console.log("CSs Property", loginCssProperty);
    // const fogotPassword = await $(
    //   "//a[contains(@href,'requestPasswordResetCode')]"
    // );
    // const fogotPasswordText = await fogotPassword.getText();
    // console.log("forgot anchor Tag text == ", fogotPasswordText);
    // await expect(fogotPassword).toHaveTextContaining("password");
    const handle = await browser.getWindowHandle();
    await browser.switchToWindow(handle[2]);

    // await buttonClick.click();
  });
  xit("Parent and Child windows switch", async () => {
    await browser.url("https://www.rahulshettyacademy.com/loginpagePractise/");
    await $(".blinkingText").click();
    const handles = await browser.getWindowHandles(); // 2 windows -
    await browser.switchToWindow(handles[1]);
    console.log(await $("h2").getText());
    console.log(await browser.getTitle()); //Rahul Shetty Academy
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
    console.log(await browser.getTitle()); //LoginPage Practise | Rahul Shetty Academy
    //*********************************** */
    await browser.newWindow("https://google.com"); //automation
    console.log(await browser.getTitle()); // Rahul Shetty Academy
    // await browser.switchWindow(
    //   "https://rahulshettyacademy.com/loginpagePractise/"
    // );
    // await $("#username").setValue("helloiswitchedback");
    // await browser.pause(3000);
  });
  xit("Dynamic Dropdown Controls Smoke", async () => {
    await browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");
    await $("#autocomplete").setValue("ind");
    await browser.pause(3000);
    let items = await $$("[class='ui-menu-item'] div");
    for (var i = 0; i < (await items.length); i++) {
      if ((await items[i].getText()) === "India") {
        await items[i].click();
        //await browser.pause(3000)
      }
    }
  });
  it("Dynamic Dropdown Controls Smoke", async () => {
    await browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");
    await $("#autocomplete").setValue("ind");
    await browser.pause(3000);
    let item = await $$("[class='ui-menu-item'] div");
    for (var i = 0; i < (await item.length); i++) {
      if ((await item[i].getText()) === "Indonesia") {
        await item[i].click();
        await browser.pause(2000);
      }
    }
  });
});
