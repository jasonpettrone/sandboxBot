/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://asset.party/${path}`)
    }

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    saveScreenshotAsTimestamp (path) {
        let timestamp = moment()
        .format("MM-DD-hh-mm-ss-A")
        .replace(/:|\s/g, "");
        await browser.saveScreenshot("./screenshots/" + timestamp + ".png");
   }
}
