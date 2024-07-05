console.log("hello sir")

import type { PlasmoCSConfig } from "plasmo"

export const config:PlasmoCSConfig = {
  matches: ["https://anandgxcr.setmore.com/beta/anand?step=time-slot&products*",
    "https://indiamd.setmore.com/beta/book?step=time-slot&products*"
  ],
  all_frames: true,
  world: "MAIN"
}

console.log(window.location.href)

// function clickVisaLinks(): void {
//   // Get all <a> tags in the body
//   const allLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('div > div > h3 > a');
//   console.log(allLinks);
//   console.log("here")

//   // Iterate through all <a> tags
//   allLinks.forEach((link: HTMLAnchorElement) => {
//     console.log(link.innerText);

//     // Check if the inner text of the <a> tag is "visa a" or "visa b"
//     if (link.innerText === 'Visa B' || link.innerText === 'Visa B (Counter no. 2)') {
//       // Open the link in a new tab
//       console.log(link.href)
//       const url: string | null = link.href;
//       if (url) {
//         const newWindow = window.open(url, '_blank');
//         console.log("arrived")
//         console.log(newWindow)
//         if (newWindow) {
//           // Wait for the new window to load and inject the content script
//           newWindow.onload = () => {
//             injectContentScript(newWindow);
//           };
//         }

//       }
//     }
//   });
// }

// // Call the function after the DOM is fully loaded
// window.addEventListener('load', clickVisaLinks);


// function injectContentScript(win: Window): void {
//   console.log("insidenewpage")
//   const script = document.createElement('script');
//   script.textContent = `
//     function scrapeAndRefresh() {
//       const allDivs = document.querySelectorAll('body > div[id=__next] > div > main > div > div');
//       console.log(allDivs)
//       let found = false;

//       allDivs.forEach(div => {
//         const svg = div.querySelector('svg');
//         const span = div.querySelector('span');
//         const button = div.querySelector('button');

//         if (svg && span && button) {
//           console.log('Found div with SVG, span, and button:', div);
//           console.log(span.innerText)
//           if (span.innerText === 'No slots available') {
//             found = true;
//             console.log('No slots available, refreshing the page in 1 minute');
//           }
//         }
//       });

//       if (found) {
//         setTimeout(() => {
//           location.reload();
//         }, 60000); // Refresh the page after 1 minute (60000 ms)
//       }
//     }
//     scrapeAndRefresh();
//   `;
//   win.document.body.appendChild(script);
  
// }
function calendarselecting() {
   const script = document.createElement('script');
   console.log("inside")
  //  const listItems = main.querySelector('div:nth-child(2) > div > div:nth-child(1) > div > div > div > div:nth-child(2) > ul[aria-labelledby="heading-slot-date"] > li');
  script.textContent =  `(function() {
    setTimeout(() => {
      const up = document.querySelector('body')
      const main = up.querySelector('div[id="brand-provider"] > main')
      console.log(main)
      const listItems = main.querySelector('div:nth-child(2) > div');
      console.log(listItems);
      const container = listItems.querySelector('div:nth-child(1)')
      console.log(container)
      const insidecontainer = container.querySelector('div > div')
      console.log(insidecontainer)
      const slotcontainer = insidecontainer.querySelector('div:nth-child(1)')
      console.log(slotcontainer)
      const wholeselect = slotcontainer.querySelector('div:nth-child(2)')
      console.log(wholeselect)
      const timeselect = wholeselect.querySelector('ul')
      console.log("timeselect:", timeselect)
      const link = timeselect?.querySelector("a")
      const href = link?.href
      console.log(href)
       if (href) {
        window.open(href, '_blank');
        // console.log("newWindow:", newWindow);
      } else {
        console.log("No href found, reloading the page.");
        window.location.reload();
      }
    }, 1000);
   })();`

 
  document.body.appendChild(script);
}


window.addEventListener('load', () => {
  calendarselecting();
  setInterval(window.location.reload, 40000)
  });



