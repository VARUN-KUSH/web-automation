chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({ url: "https://anandgxcr.setmore.com/beta/anand" }, (tab) => {
        // chrome.scripting.executeScript({
        // target: { tabId: tab.id },
        // files: ['content.ts']
        // });

      
    });
});

