describe("Sign up fo the page", async () => {
  it("Login and borrow the book", async () => {
    await browser.url("https://openlibrary.org/");
    await browser.maximizeWindow();
    await browser.pause(2000);
    const searchBox = await $("input[placeholder='Search']");
    await searchBox.waitForExist();
    await searchBox.setValue("Physical Geology");
    await browser.pause(2000);
    const searchBook = await $("a[href='/works/OL2752791W']");
    await searchBox.waitForExist();
    await searchBook.click();
    const bookName = await $(
      "div[id='read-options'] a[title='Borrow ebook from Internet Archive']"
    );
    await bookName.waitForExist();
    await bookName.click();

    // sign up now link selector and click
    await browser.pause(2000);
    const accountCreate = await $("//div/a[@href='/account/create']");
    await accountCreate.click();
    await browser.pause(2000);
    const email = await $("#emailAddr");
    await email.setValue("shki23110@adasfe.com");
    await browser.pause(2000);
    const userName = await $("#username");
    await userName.setValue("tixab");
    await browser.pause(2000);
    const password = await $("#password");
    await password.setValue("123456");
    await browser.pause(2000);
    const conPassword = await $("#password2");
    await conPassword.setValue("123456");
    await browser.pause(2000);
    const checkbox = await $("#ia_newsletter");
    await checkbox.click();
    await browser.pause(2000);
    const scrollSign = await $("#signup");
    await scrollSign.scrollIntoView();
    await browser.pause(2000);
    const reCaptch = await $("//div/iframe[@title='reCAPTCHA']");
    await browser.switchToFrame(reCaptch);
    const rootBox = await $("#recaptcha-anchor-label");
    await rootBox.click();
    await browser.pause(2000);
    await browser.switchToParentFrame();
    //after filled the form and here click the signUp button
    await scrollSign.click();
    await browser.pause(2000);
    const signedUp = await $("#contentBody");
    console.log(
      "Sign Up successfully messege :- " + (await signedUp.getText())
    );
  });
});
