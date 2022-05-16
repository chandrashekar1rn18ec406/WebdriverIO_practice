describe("check if an input string is present in any of the cells", async () => {
  it("TC001", async () => {
    await browser.url(
      "http://127.0.0.1:5500/test/Assignment_1/data/index.html"
    );
    //hold the browser window for 3 Sec
    await browser.pause(3000);
    //Find the XPath locator Assign to the Variable
    const tableData = await $$("//tr/td");

    let i;
    // Here taking the length of the cells and iterate the each row
    for (i = 0; i < (await tableData.length); i++) {
      //Here take the string value and check its include or not if string is matches print True
      if ((await tableData[i].getText()).includes("Haileemouth")) {
        console.log("True");
        //if string is matches taking screenshoot
        await tableData[i].saveScreenshot(
          "/Users/chandrashekar/Downloads/matchElement.png"
        );
        // expect(tableData[i]).toHaveTextContaining("sonland");
        break;
      }
    }
    // Doesn't find print False
    if (i === tableData.length) {
      console.log("False");
    }
  });
});
