const assert = require("chai");
describe("FaceBook login ", async () => {
  it("open facebook login page", async () => {
    await browser.url("https://www.facebook.com/");
    await browser.pause(2000);
    await browser.maximizeWindow();
    const signUp = $("//a[text()='Create New Account']");
    await browser.pause(2000);
    await signUp.click();
    const userFirstName = await $("input[name='firstname']");
    userFirstName.setValue("Gombe");
    await browser.pause(2000);
    const userLastName = await $("input[name='lastname']");
    userLastName.setValue("Siri");
    await browser.pause(2000);
    const mobORemail = await $("input[name='reg_email__']");
    mobORemail.setValue("9535262717");
    await browser.pause(2000);
    const newPassword = await $("input[data-type='password']");
    newPassword.setValue("QWERTYUI");
    await browser.pause(2000);
    const selectDay = await $("#day");
    selectDay.selectByAttribute("value", "30");
    await browser.pause(2000);
    const selectMonth = await $("//select[@id='month']");
    selectMonth.selectByVisibleText("Sep");
    await browser.pause(2000);
    const selectYear = await $("//select[@id='year']");
    await selectYear.selectByIndex(23);
    const getYear = await selectYear.getValue();
    console.log("Year ", getYear);
    await browser.pause(2000);
    const selectGender = await $("span > label._58mt");
    selectGender.click();
    await browser.pause(2000);
    const signUpButton = await $("#u_k_s_2l");
    signUpButton.click();
    await browser.pause(2000);
    await assert.equal(getYear, 1999);
    // console.log("Year ", await year.getValue());
    // console.log("Year ", selectMonth.selectByVisibleText("Sep"));
  });
});
