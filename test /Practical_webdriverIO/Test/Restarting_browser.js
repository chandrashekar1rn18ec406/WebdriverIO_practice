describe("Readload  Session", async () => {
  xit("Session ID", async () => {
    await browser.url("https://jqueryui.com/");
    console.log("session ID 1 = " + (await browser.sessionId));
    await browser.pause(2000);
    await browser.reloadSession();
    console.log("session ID 2 = " + (await browser.sessionId));
  });
  xit("get window size and position", async () => {
    await browser.url("https://jqueryui.com/");
    console.log("Size and position" + (await browser.getWindowRect()));
  });
  xit("Setwindow customized", async () => {
    await browser.url("https://jqueryui.com/");

    await browser.maximizeWindow();
    await browser.pause(3000);

    console.log("set the window size x & y Axis");

    //x: 0, y: 0 i.e. Top Left
    await browser.setWindowRect(0, 0, 400, 400);
    console.log(await browser.getWindowRect());
    await browser.pause(3000);

    //x:0 , y:500 i.e Bottom left
    await browser.setWindowRect(0, 500, 400, 400);
    console.log(await browser.getWindowRect());
    await browser.pause(3000);

    //x:500, y:0 i.e Top Right
    await browser.setWindowRect(500, 0, 400, 0);
    console.log(await browser.getWindowRect());
    await browser.pause(3000);

    //x: 500, y: 500 i.e. Bottom Right
    await browser.setWindowRect(500, 400, 0, 400);
    console.log(await browser.getWindowRect());
    await browser.pause(3000);

    console.log("Changing Window Size through height & Width-");
    //height: 400, width: 400
    await browser.setWindowRect(0, 0, 400, 400);
    console.log(await browser.getWindowRect());
    await browser.pause(3000);
    //height: 400, width: 800
    await browser.setWindowRect(0, 0, 400, 800);
    console.log(await browser.getWindowRect());
    await browser.pause(3000);
    //height: 800, width: 400
    await browser.setWindowRect(0, 0, 800, 400);
    console.log(await browser.getWindowRect());
    await browser.pause(3000);
    //height: 800, width: 800
    await browser.setWindowRect(0, 0, 800, 800);
    console.log(await browser.getWindowRect());
    await browser.pause(3000);
  });

  xit("get element size", async () => {
    await browser.url("https://jqueryui.com/");
    console.log("Logo Size: " + (await $(".logo").getSize()));
  });

  xit("TC047_Minimize Window", async () => {
    await browser.url("https://www.google.com/");
    await browser.pause(3000);
    await browser.minimizeWindow();
    await browser.pause(3000);
    await browser.maximizeWindow();
    await browser.pause(3000);
  });

  xit("TC048_Full Screen Window", async () => {
    await browser.url("https://jqueryui.com/");
    await browser.fullscreenWindow();
    await browser.pause(3000);
  });

  xit("TC049_Open New Tab", async () => {
    await browser.url("https://jqueryui.com/");
    await browser.newWindow("https://google.com");
    await browser.pause(3000);
  });

  xit("TC050_Open New Tab with Specifications", async () => {
    await browser.url("https://jqueryui.com/");
    // await browser.pause(3000);
    await browser.newWindow(
      "https://google.com/",
      "Google",
      "width=200, height=400, resizable, scrollbars=yes"
    );
    // browser.pause(3000);
    await browser.debug();
  });
  xit("TC051_GetURL", async () => {
    await browser.url("https://jqueryui.com/");
    const url = await browser.getUrl();
    console.log("URL is: " + url);
  });

  xit("TC052_Should inject javascript on the page", async () => {
    await browser.url("https://the-internet.herokuapp.com/");
    const result = await browser.execute(
      (a, b, c, d) => {
        return a + b + c + d;
      },
      1,
      2,
      3,
      4
    );
    console.log("Result is: " + result);
  });
  // browser.switchToFrame();
  xit("TC057_Switch between frames", async () => {
    await browser.url("https://the-internet.herokuapp.com/iframe");
    await browser.pause(2000);
    await browser.switchToFrame(0);
    console.log("Text inside frame: " + (await $("<p>").getText()));
    await browser.switchToParentFrame();
    console.log(
      "Webpage Heading on parent frame: " + (await $("<h3>").getText())
    );
  });

  xit("TC058_Closing the tab", async () => {
    await browser.url("https://the-internet.herokuapp.com");
    await browser.pause(1000);
    await browser.newWindow("https://google.com");
    await browser.pause(2000);
    await browser.closeWindow();
  });

  // browser.deleteSession();
  it("TC059_Delete Session", async () => {
    await browser.url("https://the-internet.herokuapp.com/");
    await browser.pause(2000);
    await browser.closeWindow();
    await browser.deleteSession();
  });
});
