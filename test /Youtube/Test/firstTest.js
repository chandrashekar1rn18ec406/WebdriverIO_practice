describe("youtube first TestCase", async () => {
  xit("TC001- enter the value of input field", async () => {
    browser.url("https://www.amazon.com/");
    const enterText = await $("input#twotabsearchtextbox");
    await enterText.setValue("Macbook air");
    await browser.pause(2000);
  });

  xit("TC002- enter the value of input field and click", async () => {
    browser.url("https://www.amazon.com/");
    const enterText = await $("input#twotabsearchtextbox");
    await enterText.setValue("Macbook air");
    await browser.pause(2000);
    const searchBox = await $("input#nav-search-submit-button");
    await searchBox.click();
  });
  xit("TC003- gettext", async () => {
    browser.url("https://www.freshworks.com/");
    const getText = await $("h1").getText();
    console.log(getText);
  });

  it("TC003- gettext", async () => {
    await browser.url("https://www.freshworks.com/");
    await $(".nav-label[href='/customers/']").click();
  });
});
