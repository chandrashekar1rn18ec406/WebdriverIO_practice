// Selecting from a Drop-Down
// Syntax
// browser.selectByAttribute()
// browser.selectByIndex()
// browser.selectByVisibleText()

describe("Select dropDown", async () => {
  it('TC063_Select dropdown by "Attribute"', async () => {
    await browser.url("https://the-internet.herokuapp.com/dropdown");
    await browser.pause(2000);
    await $("#dropdown").selectByAttribute("value", "1");
    await browser.pause(3000);
    // await browser.debug();


    
  });
});
