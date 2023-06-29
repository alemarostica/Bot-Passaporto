// ==UserScript==
// @name         Refresher
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Refreshes.
// @author       Jesosky
// @match        https://www.youtube.com/?app=desktop
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(async function() {
    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await sleep(2000);

    location.reload();
})();