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


async function calendarselecting() {
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

// function checkAndFetchNewData() {
//   console.log("fetch data")
//   // if (localStorage.getItem('arraysExhausted') === 'true') {
//   //   console.log('Arrays exhausted, fetching new data.');
//   //   // Fetch new data from local storage or any other logic
//   //   localStorage.removeItem('arraysExhausted');
//   // }
// }

window.addEventListener('load', () => {
  calendarselecting();

  // const intervalId = setInterval(() => {
  //   checkAndFetchNewData();
  //   if (localStorage.getItem('arraysExhausted') === 'true') {
  //     console.log('Stopping interval as arrays are exhausted.');
  //     clearInterval(intervalId);
  //   }
  //   else {
  //     window.location.href = window.location.href
  //   }
  // }, 40000);
  setInterval(() => {
    window.location.href = window.location.href
  }, 20000)
  });




