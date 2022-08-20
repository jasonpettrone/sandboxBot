const DevPreviewPage = require("../pageobjects/devpreview.page");
import moment from "moment";

describe("My S&box bot application", () => {
  it("should open the dev preview page", async () => {
    await DevPreviewPage.open();
  });
  it("should wait for me to login to my Steam account", async () => {
    await DevPreviewPage.btnLogin.click();
    await DevPreviewPage.divLoginHeader.waitForDisplayed({ timeout: 180000 }); // 3 minutes max to login
  });
  it("should navigate back to the dev preview page", async () => {
    await DevPreviewPage.open();
  });
  it("should click the enter button when it is clickable", async () => {
    try {
      while (true) {
        // Click the enter button if it's enabled
        if (await DevPreviewPage.btnEnter.isClickable()) {
          await DevPreviewPage.divEnter.click();
          let timestamp = moment()
            .format("MM-DD-hh-mm-ss-A")
            .replace(/:|\s/g, "");
          await browser.saveScreenshot(
            "./screenshots/RAFFLE-" + timestamp + ".png"
          );
        }
        // Refresh the page if the page refresh prompt displays
        if (await DevPreviewPage.divPleaseRefresh.isDisplayed()) {
          await DevPreviewPage.open();
          let timestamp = moment()
            .format("MM-DD-hh-mm-ss-A")
            .replace(/:|\s/g, "");
          await browser.saveScreenshot(
            "./screenshots/REFRESH-" + timestamp + ".png"
          );
        }
      }
    } catch (e) {
      console.log(e);
      for (let i = 0; i < 10; i++) {
        let timestamp = moment()
          .format("MM-DD-hh-mm-ss-A")
          .replace(/:|\s/g, "");
        await browser.saveScreenshot(
          "./screenshots/ERROR-" + timestamp + ".png"
        );
        await browser.pause(3000);
      }
    }
  });
});
