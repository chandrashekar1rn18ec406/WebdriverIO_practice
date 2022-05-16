const assertChai = require("chai").expect;
describe("Web Tabel Validation", async () => {
    it("TC001_Sorting", async () => {
      await browser.url(
        "https://rahulshettyacademy.com/seleniumPractise/#/offers"
      );
      // await browser.pause(5000);
      await $("tr th:nth-child(1)").click();
      const veggielocator = await $$("tr td:nth-child(1)");
      // await browser.pause(3000);
      console.log(veggielocator);
      const newVeggies = await veggielocator.map(
        async (veg) => await veg.getText()
      );
      // await browser.pause(3000);
      console.log("newVeggies  =", newVeggies);
      const freshveg = await newVeggies.sort();
      // await browser.pause(3000);
      console.log(freshveg);
      assertChai(newVeggies).to.be.equal(freshveg);
    });

    

  browser.setTimeouts(8000, 9000, 5000);
  it("TC126_Display GetTimeout", async () => {
    browser.url("https://webdriver.io");
    console.log(await browser.getTimeouts());
  });
});
