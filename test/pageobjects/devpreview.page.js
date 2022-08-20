const Page = require("./page");

class DevPreviewPage extends Page {
  get divLoginHeader() {
    return $('div[class="section user"]');
  }

  get btnLogin() {
    return $("/html/body/header/div[1]/div/div/div/a[2]");
  }

  get btnEnter() {
    return $('button[class="button is-large is-primary"]');
  }

  // This div is the parent of btnEnter. This is what we click to enter the raffle.
  get divEnter() {
    return $("/html/body/div[4]/div/div/div/div/div/controls/div[2]");
  }

  // If garry updates the site, we need to refresh the page
  get divPleaseRefresh() {
    return $('div[id="components-reconnect-modal"]');
  }

  

  open() {
    return super.open("get/developer/preview");
  }
}

module.exports = new DevPreviewPage();
