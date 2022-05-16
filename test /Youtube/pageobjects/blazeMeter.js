class BlazePage {
  //nav link li
  get parent() {
    return $("ul.list-nav-links");
  }
  get child() {
    return this.parent.$$("li");
  }
  getTextForLiList() {
    return this.child.filter(async (elem) => {
      console.log(await elem.getText());
    });
  }
  //fotter li
  get elementText() {
    return $$("div#main_b_footer_second_block>ul>li");
  }
  getTextForLi() {
    return this.elementText.filter(async (elem) => {
      console.log(await elem.getText());
      //   browser.pause(3000)
    });
  }
  //   Try list
  get tryList() {
    return $$("div#main_b_footer_third_block>ul>li");
  }
  tryLiList() {
    return this.tryList.filter(async (item) => {
      console.log(await item.getText());
    });
  }
  //specific li element
  specificElement(index) {
    return this.parent.$(`li:nth-child(${index})`);
  }

  //textExisting or not
  get textExit() {
    return $(".home_video__title");
  }

  //Product link CLick
  get productLink() {
    return $("//a[text()='PRODUCT']");
  }

  productLinkClick() {
    if (this.productLink.isDisplayed() === true) {
      this.productLink.click();
    }
  }
}
module.exports = new BlazePage();
