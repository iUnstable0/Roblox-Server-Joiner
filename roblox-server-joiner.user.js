// ==UserScript==
// @name         Roblox-Server-Joiner
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Join specific roblox servers with Job ID.
// @author       Unstable0
// @match        https://*.roblox.com/home*
// @grant        none
// ==/UserScript==

function urlSearchParams(search) {
    const query = window.location.search.substring(1).split("&");
  
    for (let index = 0; index < query.length; index++) {
        const queryName = query[index].split("=");
      
        if (queryName[0] == search){
            return queryName[1];
        };
    };
};

document.body.onload = function() {
    console.log("Load")
    
    const placeId = urlSearchParams("placeid");
    const jobId = urlSearchParams("jobid");
  
    if (placeId){
        if (jobId) {
            Roblox.GameLauncher.joinGameInstance(placeId, jobId);
        } else {
            Roblox.GameLauncher.joinMultiplayerGame(placeId);
        };
    };
};
