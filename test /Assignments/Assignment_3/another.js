const moment = require("moment");
describe("main test case", async () => {
  before("", async () => {
    console.log(
      moment().format("DD-MM-YYYY HH:mm:ss") + " Enter test-case-name-1"
    );
    await browser.pause(4000);
  });

  before("", async () => {
    console.log(
      moment().format("DD-MM-YYYY HH:mm:ss") + " Exit test-case-name-1"
    );
  });

  after("", async () => {
    console.log(
      moment().format("DD-MM-YYYY HH:mm:ss") + " Enter test-case-name-2"
    );
    await browser.pause(4000);
  });

  after("", async () => {
    console.log(
      moment().format("DD-MM-YYYY HH:mm:ss") + " Exit test-case-name-2"
    );
  });
});
