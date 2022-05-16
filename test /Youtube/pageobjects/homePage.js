class HomePage {
  get pageHeader() {
    return $("h1");
  }
  get subHeading() {
    return $("div.banner-text-content > p.sub-text");
  }
  get customerLink() {
    return $(".nav-label[href='/customers/']");
  }
}
module.exports = new HomePage();
