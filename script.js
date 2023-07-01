// ==UserScript==
// @name         Refresher
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Refreshes.
// @author       Jesosky
// @match        https://www.passaportonline.poliziadistato.it/CittadinoAction.do?codop=resultRicercaRegistiProvincia&provincia=MN
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_getResourceText
// @resource     https://www.passaportonline.poliziadistato.it/CittadinoAction.do?codop=resultRicercaRegistiProvincia&provincia=MN
// ==/UserScript==

(async function() {
    function playSound(){
        var player = document.createElement('audio');
        player.src = 'https://proxy.notificationsounds.com/featured-sounds/just-saying-593/download/file-sounds-1140-just-saying.mp3';
        player.preload = 'auto';
        player.play();
    }

    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await sleep(1000);
    playSound();
    const pageText = GM_getResourceText('https://www.passaportonline.poliziadistato.it/CittadinoAction.do?codop=resultRicercaRegistiProvincia&provincia=MN');
    const aaa = document.createElement("p");
    aaa.textContent = pageText;
    document.body.appendChild(aaa);
    await sleep(100000);
    

    location.reload();
})();