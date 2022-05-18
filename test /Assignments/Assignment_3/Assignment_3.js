describe("Use the hooks feature provided by wdio and generate log file", async () => {
  //First testCase is Passed
  it("First test case", async () => {
    const urlLink = "https://openlibrary.org/";
    await browser.url(urlLink);
    const title = await browser.getTitle();
    console.log("Title is :- " + title);
  });
  //Second test case is Failed
  it("count the number of books showing up in the page", async () => {
    await browser.url("https://openlibrary.org/");
    //Here we maximizewindow
    await browser.maximizeWindow();
    await browser.pause(3000);
    const booksLoactor = await $$("div.book-cover > a>img");
    const totalLength = booksLoactor.length;
    console.log("Total number of book = " + totalLength);
    await expect(totalLength).to.be.equal(167);
  });
  //Third test case passed
  it("list in array find last element ", async () => {
    await browser.url("https://jqueryui.com/");
    var element = await $$(".menu-item");
    var elem = element[element.length - 1];
    console.log("find last element in array is ==  ", await elem.getText());
  });

  //Forth Test case failed
  it("TC002- enter the value of input field and click", async () => {
    browser.url("https://www.amazon.com/");
    const enterText = await $("input#twotabsearchtextbox");
    await enterText.setValue("Macbook air");
    await browser.pause(2000);
    const searchBox = await $("input#nav-qsearch-submit-button");
    await searchBox.click();
  });
  //Five Test case passed
  it("Dynamic Dropdown Controls Smoke", async () => {
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
});
