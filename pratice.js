describe("Assignment_2 ", async () => {
  it("count the number of books showing up in the page", async () => {
    await browser.url("https://openlibrary.org/");
    await browser.pause(3000);
    const booksLoactor = await $$("div.book-cover > a>img");
    const booksCount = booksLoactor.length;
    console.log("Total count of books = ", booksCount);

    const allTitle = await booksLoactor.map(async (item) => {
      return await item.getAttribute("title");
    });
    console.log(
      "All Title = " +
        allTitle.indexOf("On systems analysis by David Berlinski")
    );

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
