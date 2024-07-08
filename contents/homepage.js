export const config = {
    matches: ["https://anandgxcr.setmore.com/beta/anand",
      "https://indiamd.setmore.com/beta/book"
    ],
    all_frames: true,
    world: "MAIN"
}

console.log("hello home page")

function clickVisaLinks() {
  // Get all <a> tags in the body
  const main = document.querySelector('main')
  const allLinks = main.querySelectorAll('div > div > h3 > a');
  console.log(allLinks);
  console.log("here")

  // Iterate through all <a> tags
  allLinks.forEach((link) => {
    console.log(link.innerText);

    // Check if the inner text of the <a> tag is "visa a" or "visa b"
    if (link.innerText === 'visa b (counter 2)' || link.innerText === 'visa b') {
      // Open the link in a new tab
      console.log(link.href)
      const url = link.href;
      if (url) {
        
        const newWindow = window.open(url, '_blank');
    

      }
    }
  });
}

// Call the function after the DOM is fully loaded
window.addEventListener('load', clickVisaLinks);

