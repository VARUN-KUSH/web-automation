import { Storage } from "@plasmohq/storage"
 
const storage = new Storage()

storage.get("usersdata").then((data) => {
    console.log(data)
}).catch()


chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({ url: "https://anandgxcr.setmore.com/beta/anand" }, (tab) => {
        // chrome.scripting.executeScript({
        // target: { tabId: tab.id },
        // files: ['content.ts']
        // });

      
    });
});



