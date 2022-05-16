// Question - 1;
// count the number of books showing up in the page assert if that matches an expected number.
var expect = require("chai").expect;
describe("Assignment_2 ", async () => {
  it("count the number of books showing up in the page", async () => {
    await browser.url("https://openlibrary.org/");
    //Here we maximizewindow
    await browser.maximizeWindow();
    await browser.pause(3000);
    const booksLoactor = await $$("div.book-cover > a>img");

    // It's a Dynamic webpage that's why books length will be not constant whenever page is reload or open length should be varies
    const totalLength = booksLoactor.length;
    console.log("Total number of book = " + totalLength);
    await expect(totalLength).to.be.equal(141);
    console.log(
      `Actual ${totalLength} and expected ${booksLoactor.length} length should be Matched`
    );

    // Question - 2;
    // In addition,  save the image of the 14th book in the "Kids" section ?
    //Save Screenshot
    const kidsbooksLocator = $$(
      "//a[text()='Kids']/../../..//div[contains(@id,'slick-slide')]//img"
    );
    const bookPosition = 14;

    await kidsbooksLocator.map(async (index) => {
      if (index == bookPosition - 1) {
        await $("//a[text()='Kids']").scrollIntoView();
        const nextButtonElement = $(
          "//a[text()='Kids']/../../..//button[@aria-label='Next']"
        );
        //Here we go to exatct location of page so we click the next button twice
        await nextButtonElement.click();
        await nextButtonElement.click();
        const bookElement = $(
          `//a[text()='Kids']/../../..//*[@data-slick-index='${
            bookPosition - 1
          }']`
        );
        //scroll to page use scrollIntoView method
        await bookElement.scrollIntoView();
        //wait for the display
        await bookElement.waitForDisplayed();
        await browser.pause(3000);
        await bookElement.saveScreenshot("screenshots/14bookOnly.png");
        await browser.saveScreenshot("screenshots/CompletePage.png");
      }

      // This is another method to saveScreenshot
      // Method 2
      const imageLocation = await $("#slick-slide613");
      imageLocation.saveScreenshot("screenshots/method2_14Image.png");
    });
  });
});
