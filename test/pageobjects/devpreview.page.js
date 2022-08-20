const Page = require("./page");

class DevPreviewPage extends Page {
  get divLoginHeader() {
    return $('div[class="section user"]');
  }

  get btnLogin() {
    return $(
      'a[href="https://steamcommunity.com/openid/login?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.mode=checkid_setup&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.return_to=https%3A%2F%2Fasset.party%2F.login%2F&openid.realm=https%3A%2F%2Fasset.party"]'
    );
  }

  get btnEnter() {
    return $('button[class="button is-large is-primary"]');
  }

  // This div is the parent of btnEnter. This is what we click to enter the raffle.
  get divEnter() {
    return $('button[class="button is-large is-primary"]').parentElement();
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
