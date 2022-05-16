describe("find last element in array", async () => {
  xit("list in array find last element ", async () => {
    await browser.url("https://jqueryui.com/");
    var element = await $$(".menu-item");
    var elem = element[element.length - 1];
    console.log("find last element in array is ==  ", await elem.getText());
  });

  //return from any element from array
  xit("Tc002 - getting element from array", async () => {
    await browser.url("https://jqueryui.com/");
    var element = await $$(".menu-item");
    var elm = element[3];
    console.log("Getting a text of fourth item === ", await elm.getText());
  });
  xit("Tc002 - getting element from array", async () => {
    await browser.url("https://jqueryui.com/");
    var element = await $$(".menu-item");
    element.forEach(async (item) => {
      //   console.log(await item.getText());
      var itemList = await item.getText();
      console.log(itemList);
    });
  });
  xit("TC003- get all links on page using forEach function", async () => {
    await browser.url("https://jqueryui.com/");
    var element = await $$("<a />");
    console.log("Links on the Webpage");
    element.forEach(async (item) => {
      const allItem = await item.getAttribute("href");
      console.log(allItem);
    });
  });
  xit("TC003- get all links on page using map function", async () => {
    await browser.url("https://jqueryui.com/");
    var element = await $$("<a />");
    console.log("Links on the Webpage");
    element.map(async (item) => {
      const allItem = await item.getAttribute("href");
      console.log(allItem);
    });
  });
  xit("scrollintoView", async () => {
    await browser.url("https://jqueryui.com/");
    browser.saveScreenshot(
      "/Users/chandrashekar/Desktop/New WEBDriverIo/screenshots/csroll.png"
    );
    await $(".footer-site-links").scrollIntoView();
    browser.saveScreenshot(
      "/Users/chandrashekar/Desktop/New WEBDriverIo/screenshots/footer.png"
    );
  });

  xit("click functions", async () => {
    await browser.url(
      "https://the-internet.herokuapp.com/add_remove_elements/"
    );
    await browser.debug();
    await $("button[onclick='addElement()']").click();
    await browser.debug();
    await $("button[onclick='addElement()']").click({ x: 0, y: 80 });
    await browser.debug();
  });

  xit("TC029_Double Click", async () => {
    await browser.url("https://api.jquery.com/dblclick/");
    await $(".demo.code-demo").scrollIntoView();
    await browser.debug();
    await browser.switchToFrame(0);
    await $("<div />").doubleClick();
    await browser.debug();
    //    await browser.pause(4000);
  });
  xit("Right Click", async () => {
    await browser.url("https://www.saucedemo.com/");
    await $(".bot_column").click({ button: "right" });
    await browser.debug();
  });
  xit("TC032_Add Value", async () => {
    await browser.url("https://jquery.com/");
    await $('[name="s"]').setValue("Search");
    // await browser.debug();
    await browser.pause(3000);
    await $('[name="s"]').addValue("Selectors");
    await browser.pause(3000);
    // browser.debug();
  });
  xit("TC033_Keys", async () => {
    await browser.url("https://jquery.com/");
    await $('[name="s"]').click();
    await browser.keys("Selectors"); //writes Selectors
    // await browser.debug();
    await browser.keys("\uE003\uE003\uE003");
    // await browser.debug();
  });
  xit("TC001 clear_Text", async () => {
    await browser.url("https://jquery.com/");
    await $('[name="s"]').setValue("Selectors");
    await browser.pause(3000);
    // await $('[name="s"]').clearValue();
    await $('[name="s"]').clearValue();
    await browser.pause(3000);
  });
  xit("TC036_mouseMove", async () => {
    await browser.url("https://opensource-demo.orangehrmlive.com/");
    await $("#txtUsername").setValue("Admin");
    await browser.pause(5000);
    await $("#txtPassword").setValue("admin123");
    await browser.pause(5000);
    await $("#btnLogin").click();
    await browser.pause(5000);
    await $("#menu_admin_viewAdminModule").moveTo();
    await browser.pause(5000);
    await $("#menu_admin_UserManagement").moveTo();
    await browser.pause(5000);
    await $("#menu_admin_Organization").moveTo();
    await browser.pause(5000);
    await $("#menu_admin_viewCompanyStructure").moveTo();
    await browser.pause(5000);
    await $("#menu_admin_viewCompanyStructure").click();
    await browser.pause(5000);
  });
  xit("TC_Navigate_url", async () => {
    await browser.url("https://jquery.com/");
    console.log("First website Title is  : ", await browser.getTitle());
    await browser.navigateTo(
      "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
    );
    console.log("Secons website Title is : ", await browser.getTitle());
  });
  xit("TC_Navigate_url and back to url", async () => {
    await browser.url("https://jquery.com/");
    console.log("First website Title is  : ", await browser.getTitle());
    await browser.navigateTo(
      "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
    );
    console.log("Second website Title is : ", await browser.getTitle());
    await browser.back();
    console.log("back to website Title is : ", await browser.getTitle());
  });
  it("TC_Navigate_url and forward to url", async () => {
    await browser.url("https://jquery.com/");
    console.log("First website Title is  : ", await browser.getTitle());
    await browser.navigateTo(
      "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
    );
    console.log("Second website Title is : ", await browser.getTitle());
    await browser.back();
    console.log("back to website Title is : ", await browser.getTitle());
    await browser.forward();
    await browser.pause(3000);
    console.log("forward to website Title is : ", await browser.getTitle());
    await browser.refresh();
  });

});
