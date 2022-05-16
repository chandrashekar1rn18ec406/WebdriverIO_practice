describe("Webdriver .io examples", async () => {
  //ID SELECTOR
  it("TC001_ID", async () => {
    await browser.url("https://www.saucedemo.com/");
    await browser.pause(3000);
    await $("#user-name").saveScreenshot(
      "/Users/chandrashekar/Downloads/TC001.png"
    );
  });
  // CLASS SELECTOR
  it("TC002_Class", async () => {
    await browser.url("https://jqueryui.com/");
    await browser.pause(5000);
    await $(".projects").saveScreenshot(
      "/Users/chandrashekar/Downloads/TC002.png"
    );
  });
  // // MULTIPLE CLASS SELECTOR
  // it("TC003_Multiple_Class ", async () => {
  //   browser.url("https://jqueryui.com/");
  //   await browser.pause(3000);
  //   $(".project.jquery-ui").saveScreenshot("ScreenShot/TC003_class.png");
  // });
  // // CLASS SELECTOR
  // it("TC003.1_Class_count", async () => {
  //   await browser.url("https://jqueryui.com/");
  //   await browser.pause(3000);
  //   var countClass = $$(".project,.jquery-ui").length;
  //   console.log("The Output is", await countClass);
  // });
  // NAME ATTRIBUTE SELECTOR
  // it("TC004_Name Attributes", async () => {
  //   browser.url("https://ultimateqa.com/complicated-page/");
  //   await browser.pause(5000);
  //   $("[name='et_builer_sumbit_button']").saveScreenshot(
  //     "Screenshot/TC004.png"
  //   );
  // });
  // TAG NAME SELECTOR
  // it("TC005_TagName", async () => {
  //   browser.url("https://www.saucedemo.com/");
  //   await browser.pause(3000);
  //   $("<img>").saveScreenshot("Screenshot/TC005.png");
  // });
  // LINK TEST
  // it("TC006_link_test", async () => {
  //   browser.url("https://ultimateqa.com");
  //   await browser.pause(5000);
  //   $("=Courses").saveScreenshot("Screenshot/TC006.png");
  // });
  // PARTIAL LINK TEST
  // it("TC007_PARTIAL LINK TEST", async () => {
  //   browser.url("https://ultimateqa.com/complicated-page/");
  //   await browser.pause(5000);
  //   $("*=Random").saveScreenshot("screenshot/TC007.png");
  // });
  // Elements with Certain Text
  // it("TC008_PARTIAL LINK TEST", async () => {
  //   browser.url("https://webdriver.io/docs/api.html");
  //   await browser.pause(5000);
  //   $("span=Webdriver Protocol").saveScreenshot("screenshot/TC008.png");
  // });
  // it("TC008_Element With Certain Text", async () => {
  //   browser.url("https://webdriver.io/docs/api.html");
  //   await browser.pause(3000);
  //   $("span=Webdriver Protocol").saveScreenshot(
  //     "Screenshots/TC008_CrtnTxt.png"
  //   );
  // });
  // Element with PARTIAL text
  // it("TC007_PARTIAL LINK TEST", async () => {
  //   browser.url("https://ultimateqa.com/complicated-page/");
  //   await browser.pause(5000);
  //   $("p*=notifications").saveScreenshot("Screenshots/TC009_Partial.png");
  // });
  // CSS QUERY SELECTOR
  // it("TC009_CSS_Query_selector", async () => {
  //   browser.url("https://www.saucedemo.com/");
  //   await browser.pause(5000);
  //   $('div[class="login_credentials"]').saveScreenshot(
  //     "screenshot/TC009_Css Query selector.png"
  //   );
  // });

  // XPath
  // it("TC010_XPath", async () => {
  //   browser.url("https://www.saucedemo.com/");
  //   await browser.pause(3000);
  //   $('//input[@id="login-button"]').saveScreenshot(
  //     "Save Screenshot/Tc010.png"
  //   );
  // });

  // xit("Login  Fail page", async () => {
  //   await browser.url("https://www.rahulshettyacademy.com/loginpagePractise/");
  //   console.log(await browser.getTitle());
  //   await expect(browser).toHaveTitleContaining("Rahul Shetty Academy");
  //   await $("input[name='username']").setValue("rahulshettyacademy");

  //   await $("//input[@type='password']").setValue("learninags");
  //   // await browser.pause(3000);
  //   await $("#signInBtn").click();
  //   // await browser.pause(3000);
  //   await console.log(await $(".alert-danger").getText());
  //   await browser.waitUntil(
  //     async () => (await $("#signInBtn").getAttribute("value")) === "Sign In",
  //     {
  //       timeout: 5000,
  //       timeoutMsg: "Error message doent show",
  //     }
  //   );
  //   await console.log(await $(".alert-danger").getText());
  // });

  // xit("Log in successfull landed", async () => {
  //   await browser.url("https://www.rahulshettyacademy.com/loginpagePractise/");
  //   await $("input[name='username']").setValue("rahulshettyacademy");
  //   await $("input[name='password']").setValue("learning");
  //   await $("input[value='Sign In']").click();
  //   //wait until checkout  button is displayed
  //   await $(".btn-primary").waitForExist();
  //   await expect(browser).toHaveUrlContaining("shop");
  //   await expect(browser).toHaveTitle("ProtoCommerce");
  // });

  // it("Login Success page title", async () => {
  //   browser.url("https://www.rahulshettyacademy.com/loginpagePractise/");
  //   await $("input[name='username']").setValue("rahulshettyacademy");
  //   const password = $("//input[@type='password']");
  //   await password.setValue("learning");
  //   await $("#signInBtn").click();
  //   //wait until checkout button is displayed
  //   await $(".btn-primary").waitForExist();
  //   await expect(browser).toHaveUrlContaining("shop");
  //   await expect(browser).toHaveTitle("ProtoCommerce");
  // });
});
