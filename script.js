// ==UserScript==
// @name         Refresher
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Refreshes and might play sound
// @author       Jesosky
// @match        https://www.passaportonline.poliziadistato.it/CittadinoAction.do?codop=resultRicercaRegistiProvincia&provincia=MN
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(async function() {
    async function playSound(){
        // SOund player funziona solo su Firefox perché le policy di autoplay di Chrome devono morire
        var player = document.createElement('audio');
        player.src = 'https://proxy.notificationsounds.com/featured-sounds/just-saying-593/download/file-sounds-1140-just-saying.mp3';
        player.preload = 'auto';
        player.play();

        // window.alert("Disponibilià cambiata!");
        // Tolgo il window.alert() perché è bloccante, ma ha più senso che spammi il suono
    }

    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await sleep(5000); //Sleepo così aspetto in caso di ritardi
    let table = document.getElementById('98').childNodes[11];
    table.click();
    let disponibilita = table.innerHTML;
    if(disponibilita != "No"){
        await playSound();
        console.log("disponibilità diversa da no");
    }
    await sleep(5000);

    location.reload();
})();