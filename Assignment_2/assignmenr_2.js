describe("Assignment_2 ", async () => {
  it("count the number of books showing up in the page", async () => {
    await browser.url("https://openlibrary.org/");
    await browser.maximizeWindow();

    const booksLoactor = $$("div.book-cover > a>img");
    const booksCount = (await booksLoactor).length;
    console.log("Total count of books = ", booksCount);

    const kidsbooksLocator = $$("//a[text()='Kids']/../../..//div[contains(@id,'slick-slide')]//img");

    const allTitle = await kidsbooksLocator.map(async (book) => await book.getAttribute("title"));
    console.table(allTitle)

    const bookPosition = 14;
   
    const bookElement = $(`//a[text()='Kids']/../../..//*[@data-slick-index='${bookPosition-1}']`)
    
    await bookElement.scrollIntoView();
    await bookElement.waitForDisplayed();
    
    const bookImageElement = $(`//a[text()='Kids']/../../..//*[@data-slick-index='${bookPosition-1}']//img`);
    await browser.waitUntil(async ()=> (await bookImageElement.getAttribute("src")).includes(".jpg"), {timeout: 20000})

    await bookElement.saveScreenshot("bookOnly.png")
    await browser.saveScreenshot("CompletePage.png")

    // await kidsbooksLocator.map(async (book, index) => {
    //   if (index == bookPosition-1) {
    //     console.log(`14th Book: ${await book.getAttribute("title")}`)
    //     await $("//a[text()='Kids']").scrollIntoView();
    //     const nextButtonElement = $("//a[text()='Kids']/../../..//button[@aria-label='Next']");
    //     await nextButtonElement.click();
    //     await nextButtonElement.click();
    //     const bookElement = $(`//a[text()='Kids']/../../..//*[@data-slick-index='${bookPosition-1}']`)
    //     await bookElement.scrollIntoView();
    //     await bookElement.waitForDisplayed();
    //     await bookElement.saveScreenshot("bookOnly.png")
    //     await browser.saveScreenshot("CompletePage.png")
    //   }
    // })

    // let i;
    // for (i = 0; i < (await booksLoactor.length); i++) {
    //   const allTitle = await booksLoactor[i].getAttribute("title");
    //   if (
    //     await allTitle.includes(
    //       "Piers the Plowman by William Langland, E. Talbot Donaldson"
    //     )
    //   ) {
    //     console.log(
    //       "Index of the = ",
    //       allTitle.indexOf(
    //         "Piers the Plowman by William Langland, E. Talbot Donaldson"
    //       )
    //     );
    //   }
    // }


    // const eachBookText = await booksCount.getText();
    // console.log(eachBookText);

    // .book.carousel__item.slick-slide.slick-current.slick-active
    //a[contains(@aria-label, 'Bewertungspunktestand:')]

    // In addition,  save the image of the 14th book in the "Kids" section.

    // const kidSecImg = await $("#slick-slide615>div.book-cover");
    // const kidSecImg = await $(
    //   "img[title='Harry Potter and the Philosopher's Stone by J. K. Rowling']"
    // );

    // await kidSecImg.saveScreenshot("screenshots/14th.png");
  });
});
