// ==UserScript==
// @name         Roblox-Server-Joiner
// @version      1.2
// @description  Join specific Roblox servers with Place ID and Job ID.
// @author       iUnstable0
// @match        https://*.roblox.com/*
// ==/UserScript==

function urlSearchParams(search) {
	const query = window.location.search.substring(1).split("&");

	for (let index = 0; index < query.length; index++) {
		const queryName = query[index].split("=");

		if (queryName[0] == search) {
			return queryName[1];
		}
	}
}

document.body.onload = function () {
	console.log("Load");

	const placeId = urlSearchParams("placeId");
	const jobId = urlSearchParams("jobId");

	if (placeId) {
		if (jobId) {
			Roblox.GameLauncher.joinGameInstance(placeId, jobId).then(() => {
                window.close();
            })
		} else {
			Roblox.GameLauncher.joinMultiplayerGame(placeId).then(() => {
                window.close();
            })
		}
	}
};
