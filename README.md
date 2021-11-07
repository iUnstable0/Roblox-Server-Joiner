# Roblox-Server-Joiner

This userscript allows you to join a specific Roblox server with the server Job Id.
Useful for game moderation.

Job Id can be obtained with [`game.JobId`](https://developer.roblox.com/en-us/api-reference/property/DataModel/JobId).

## Installation

Please make sure you have these extensions installed:
- [Safari](https://apps.apple.com/th/app/userscripts/id1463298887?mt=12)
- [Chromium Browsers (Google Chrome, Opera, Microsoft Edge, Firefox, etc.)](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)

After you installed the extension, Click [here](https://raw.githubusercontent.com/Unstable0/Roblox-Server-Joiner/main/roblox-server-joiner.user.js).

If you are using Chromium Browsers, you will be redirected to installation page after clicking on that link.

For Safari, Press `Command + ,` to open Preferences, go to Extensions and enable `Userscripts` extension.
After you enabled it, click on the Userscript icon

![Screen Shot 2564-11-07 at 1 43 30 PM](https://user-images.githubusercontent.com/46888825/140635228-528e680f-f8c6-48da-bb8a-d46b31668340.png)

Make sure enable injection is turned on

![Screen Shot 2564-11-07 at 1 52 06 PM](https://user-images.githubusercontent.com/46888825/140635484-5ce5801c-13da-4c25-81f1-9b3efbcd4cf6.png)

then click Open

![Screen Shot 2564-11-07 at 1 43 30 PM](https://user-images.githubusercontent.com/46888825/140635297-24277581-9a73-46dd-9049-372e5b5ef199.png)

After you click Open you will see this Page

![Screen Shot 2564-11-07 at 1 45 07 PM](https://user-images.githubusercontent.com/46888825/140635273-6624e6f4-e325-470b-8aea-0ea0ffdcb4f0.png)

On the top left corner, click Add

![Screen Shot 2564-11-07 at 1 46 44 PM](https://user-images.githubusercontent.com/46888825/140635363-277fb930-ffc3-407f-9364-739df19f066b.png)

And select New JavaScript

![Screen Shot 2564-11-07 at 1 47 11 PM](https://user-images.githubusercontent.com/46888825/140635373-b8f9ba9d-8198-4dc9-ade6-7986f06fb8c3.png)

Remove everything in the editor and copy paste this [code](https://raw.githubusercontent.com/Unstable0/Roblox-Server-Joiner/main/roblox-server-joiner.user.js)

![Screen Shot 2564-11-07 at 1 50 43 PM](https://user-images.githubusercontent.com/46888825/140635427-409b44f0-0621-477c-b5a9-935eb8d0d52b.png)

On bottom right corner, click Save

![Screen Shot 2564-11-07 at 1 51 02 PM](https://user-images.githubusercontent.com/46888825/140635439-0db50ace-392a-43ff-afb4-607b55d670f8.png)

*If it doesn't launch Roblox, try refreshing the page.

## Usage

Add `?placeid=PLACE_ID_HERE&jobid=JOB_ID_HERE` to the URL `https://www.roblox.com/home` on your web browsers search bar and press Enter
This will automatically launch Roblox like VIP server link does.

## Examples

- [https://www.roblox.com/home__**?placeid=663655429&jobid=956650df-5554-453a-adc7-9cf67600a9c9**__](https://www.roblox.com/home?placeid=663655429&jobid=956650df-5554-453a-adc7-9cf67600a9c9)
