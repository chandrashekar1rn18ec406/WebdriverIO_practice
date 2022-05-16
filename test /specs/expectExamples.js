describe("Expects Examples", async () => {
  //BROWSER MATCHERS
  // - toHaveUrl
  // - toHaveUrlContaining
  // - toHaveTitle
  // - toHaveTitleContaining

  // toHaveUrl
  //   xit("TC001_toHaveUrl", async () => {
  //     browser.url("https://webdriver.io/");
  //     await expect(browser).toHaveUrl("https://webdriver.io/");
  //   });

  //   // toHaveUrl
  //   xit("TC001.1_toHaveUrl", async () => {
  //     browser.url("https://webdriver.io/");
  //     await expect(browser).toHaveUrl("https://webdriver.io");
  //   });

  // toHaveUrlContaining
  //   xit("TC002_toHaveUrlContaining", async () => {
  //     browser.url("https://webdriver.io/");
  //     await expect(browser).toHaveUrlContaining("webdriver");
  //   });

  //toHaveTitle
  //   xit("TC003 _toHaveTitle()", async () => {
  //     browser.url("https://webdriver.io/");
  //     await expect(browser).toHaveTitle(
  //       "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
  //     );
  //   });
  //   //toHaveTitle
  //   xit("TC003.1_toHaveTitle", async () => {
  //     browser.url("https://webdriver.io");
  //     await expect(browser).toHaveTitle(
  //       "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js"
  //     );
  //   });
  //   //toHaveTitleContaining
  //   xit("TC004_toHaveTitleContaining", async () => {
  //     browser.url("https://webdriver.io");
  //     await expect(browser).toHaveTitleContaining("WebdriverIO · Next-gen ");
  //   });

  //   //ELEMENT MATCHERS
  //   // - toBeDisplayed()
  //   // - toExist()
  //   // - toBePresent()
  //   // - toBeExisting()
  //   // - toBeFocused()
  //   // -
  //   // -
  //   // -
  //   // -

  //   //toBeDisplayed
  //   xit("TC005_toBeDisplyed", async () => {
  //     browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");
  //     const element = $("h1");
  //     await expect(element).toBeDisplayed();
  //   });

  //   //toExist()
  //   xit("TC006_toExist", async () => {
  //     browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");
  //     const element = $("h1");
  //     await expect(element).toExist();
  //   });

  //   //toBePresent()
  //   xit("TC007_toBePresent", async () => {
  //     browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");
  //     const element = $("h2");
  //     await expect(element).toBePresent();
  //   });

  //   //toBeExisting
  //   xit("TC008_toBeExisting", async () => {
  //     browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");
  //     const element = $("h2");
  //     await expect(element).toBeExisting();
  //   });
  //   isExisting()
  //   it("TC071_isExisting()", async () => {
  //     browser.url("https://the-internet.herokuapp.com/dynamic_loading/2");
  //     var elem = await $("#finish");

  //     await $("button=Start").click();
  //     browser.pause(6000);
  //     console.log("Existence of element after Startbutton is clicked= ");
  //     console.log(await elem.isExisting());
  //     browser.pause(10000);
  //     var elem = $("#finish");
  //     console.log("Existence of element after a 10second pause= ");
  //     console.log(elem.isExisting());
  //   });

  //   //toBeFocused()
  //   xit("TC009-toBefocused", async () => {
  //     browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");
  //     const element = $("#enter-name");
  //     await expect(element).toBeFocused();
  //   });

  //   xit("TC09.1_toBeFocused()", async () => {
  //     browser.url("https://the-internet.herokuapp.com/inputs");
  //     console.log("When input box is not clicked= ");
  //     var inputBox = await $('input[type="number"]');
  //     await expect(inputBox).toBeFocused();
  //   });

  //   //toHaveAttributes
  //   xit("TC010_toHaveAttribute", async () => {
  //     browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");
  //     const myInput = $("#opentab");
  //     await expect(myInput).toHaveAttribute(
  //       "href",
  //       "https://www.rahulshettyacademy.com/"
  //     );
  //   });

  //   xit("TC010_toHaveAttribute()", async () => {
  //     browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");
  //     const elem = await $(".logoClass");
  //     await expect(elem).toHaveAttribute("src", "images/rs_logo.png");
  //   });

  //   //toHaveAttr
  //   xit("TC0011_toHaveAttr()", async () => {
  //     browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");
  //     const elem = await $(".logoClass");
  //     await expect(elem).toHaveAttr("src", "images/rs_logo.png");
  //   });

  //toHaveAttributeContaining
  //   xit("TC011_toHaveAttributeContaining", async () => {
  //     browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");
  //     const elem = await $(".logoClass");
  //     await expect(elem).toHaveAttributeContaining("src", "images/rs_lo");
  //   });

  //toHaveElementClass
  //   xit("TC012_toHaveClass()", async () => {
  //     browser.url("https://the-internet.herokuapp.com/");
  //     var HeadingTag = await $("<h1>");
  //     await expect(HeadingTag).toHaveElementClass("heading");
  //   });
  //toHaveElementClassContaining
  //   xit("TC0013_toHaveElementClassContaining", async () => {
  //     browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");
  //     var HeadingTag = await $("#autocomplete");
  //     await expect(HeadingTag).toHaveElementClassContaining(
  //       " ui-autocomplete-input"
  //     );
  //   });

  //toHaveElementProperty
  //   xit("TC098_toHaveElementProperty()", async () => {
  //     browser.url("https://the-internet.herokuapp.com/broken_images");
  //     const elem = await $$("<img>");
  //     await expect(elem).toHaveElementProperty("translate", true);
  //   });

  //   toHaveValue();
  //   it("TC099_toHaveValue()", async () => {
  //     browser.url("https://jqueryui.com/");
  //     var elem = await $('option[value="https://jqueryui.com/demos/"]');
  //     await expect(elem).toHaveValue("https://jqueryui.com/demos/", {
  //       ignoreCase: true,
  //     });
  //   });

  //   toHaveHref();
  //   it("TC100_toHaveHref()", async () => {
  //     browser.url("https://jqueryui.com/");
  //     var elem = await $("=Demos");
  //     await expect(elem).toHaveHref("https://jqueryui.com/demos/");
  //   });
  //toHaveHrefContaining
  //   it("TC0101_toHaveHrefContaining", async () => {
  //     browser.url("https://jqueryui.com/");
  //     var elem = await $("=Demos");
  //     await expect(elem).toHaveHrefContaining("/demos");
  //   });

  //toHaveLink()
  //   it("TC102_toHavelink", async () => {
  //     browser.url("https://jqueryui.com/");
  //     var elem = await $("=Download");
  //     await expect(elem).toHaveLink("https://jqueryui.com/download/");
  //   });

  // toHaveLinkContaining()
  //   it("TC103_toHaveLinkContaining",async () => {
  //     browser.url("https://jqueryui.com/");
  //     const link = await $("=About");
  //    await expect(link).toHaveLinkContaining("/about/");
  //   });

  //   toHaveText();
  //   it("TC104_toHaveText", async () => {
  //     browser.url("https://the-internet.herokuapp.com/");
  //     const text = await $("<h1>");
  //     await expect(text).toHaveText("Welcome to the-internet");
  //   });

  //   toHaveTextContaining();
  //   it("TC105_toHaveTextContaining", async () => {
  //     browser.url("https://the-internet.herokuapp.com/");
  //     const text = await $("<h1 />");
  //     await expect(text).toHaveTextContaining("internet");
  //   });

  // toHaveId();
  // it("TC106_toHaveId", async () => {
  //   browser.url("https://the-internet.herokuapp.com/");
  //   const text = await $$(".large-12.columns")[0];
  //   await expect(text).toHaveId("content");
  // });

  // toBeElementsArrayOfSize();
  // it("TC107_Count of Element Returned", async () => {
  //   browser.url("https://the-internet.herokuapp.com/checkboxes");
  //   console.log("");
  //   const elems = await $$("<input>");
  //   await expect(elems).toBeElementsArrayOfSize({ lte: 10 });
  // });

  //    toBeDisabled();
  // it("TC077_toBeDisabled()", async () => {
  //   browser.url("https://the-internet.herokuapp.com/dynamic_controls");
  //   var elem = await $('input[type="text"]');
  //   expect(elem).toBeDisabled();
  // });

  // it("should get element", async () => {
  //   browser.url("https://the-internet.herokuapp.com/");
  //   const ewb = await $("ul");
  //   // ewb.click();
  //   await browser.pause(5000);
  //   console.log("Text is  =  ", await $$("li").getText());
  // });

  // it("should get all the plugin wrapper buttons", async () => {
  //   await browser.url("https://webdriver.io");
  //   await browser.addLocatorStrategy("myStrat", (selector) => {
  //     return document.querySelectorAll(selector);
  //   });
  //   const pluginWrapper = await browser.custom$$("myStrat", ".pluginWrapper");
  //   console.log(await pluginWrapper.length); //
  // });

  // it("should switch to another window", async () => {
  //   // open url
  //   await browser.url("https://google.com");
  //   browser.pause(2000);

  //   // create new window
  //   await browser.newWindow("https://webdriver.io");
  //   browser.pause(2000);

  //   // switch back via url match
  //   await browser.switchWindow("google.com");
  //   browser.pause(2000);

  //   // switch back via title match
  //   await browser.switchWindow(
  //     "Next-gen browser and mobile automation test framework for Node.js"
  //   );
  //   browser.pause(2000);
  // });

  //
  xit("should print parent 2 child child element", async () => {
    browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");
    const text = await $("#radio-btn-example fieldset legend").getText();
    console.log(text);
  });
  xit("radio button click", async () => {
    browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");
    await browser.pause(3000);
    await $("//label/input[@value='radio1']").click();
    await browser.pause(3000);
  });
  it("tag selector", async () => {
    browser.url("https://www.blazemeter.com/product/");
    const getText = await $(".product-advantages_title").getText();
    console.log(getText);
  });
});
