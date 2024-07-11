// import { Storage } from "@plasmohq/storage"

// const storage = new Storage()

// export const config = {
//   matches: [
//     "https://anandgxcr.setmore.com/beta/anand?step=user-details&products*"
//   ]
// }

// console.log("in formfill")

// function generateUniqueIdentifier() {
//   return crypto.randomUUID();
// }

// async function getvalue() {
//   console.log("inside form page")
//   const data = await storage.get("usersdata") // "value"
//   console.log(data)
//   return data
// }

// async function fillsandsubmitsvalue() {
//   // const uuid = generateUniqueIdentifier();
//   // console.log(uuid)
//   // let pageIdentifier = sessionStorage.getItem('pageIdentifier');

//   // if (!pageIdentifier) {
//   //   pageIdentifier = generateUniqueIdentifier();
//   //   sessionStorage.setItem('pageIdentifier', pageIdentifier);
//   // }
  
//   const data = await getvalue()
//   // let val = data? data[1]: null
//   // console.log(val)
//   //got the data from excelsheet
//   //fill the page with 0th index
//   // if filled and clicked
//   //if clicked and windows.href = submitted
//   //delete the 0th index data
//   //close the page
//   //
//   // if(!val) {
//   //   window.close()
//   // }
//   setTimeout(() => {
//     let form = document.querySelector(
//       'main > div:nth-child(2) > div > div:nth-child(1) > div > form[id="userDetails"]'
//     )

//     // let checkmeetingtime = document.querySelector(
//     //   "main > div:nth-child(2) > div > div:nth-child(2)"
//     // )
//     // console.log(checkmeetingtime)
//     // // const timefind = checkmeetingtime.querySelector('div:nth-child(2) > div > span[]')
//     // const timefind = checkmeetingtime.querySelectorAll(
//     //   "div > div:nth-child(2) > div"
//     // )

//     // console.log(timefind)

//     // // Ensure there are at least 5 elements in the NodeList
//     // if (timefind.length >= 5) {
//     //   const fifthElement = timefind[4] // NodeList is zero-indexed, so 5th element is at index 4
//     //   const targetSpan = Array.from(fifthElement.querySelectorAll("span")).find(
//     //     (span) => span.innerText === "15 Minutes Meeting"
//     //   )
//     //   if (targetSpan) {
//     //     val = data[0]
//     //     console.log("Found the span:", targetSpan)
//     //   } else {
//     //     console.log("No span with the specified innerText found.")
//     //   }
//     // } else {
//     //   console.log("Less than 5 elements in the NodeList.")
//     // }

   
//     const script = document.createElement("script")
//     script.textContent = `(function() {
//         let form = document.querySelector(
//     'main > div:nth-child(2) > div > div:nth-child(1) > div > form[id="userDetails"]')
//      form.setAttribute('novalidate', true);
//      form.addEventListener('submit', function(e) {
//         e.preventDefault(); // Prevent default form submission
//         // Additional logic for handling form submission here if needed
//      });
//     })()`
//     document.body.appendChild(script)
//     console.log(form)

//     let inputfield = form.querySelectorAll("div > fieldset > div > div")
//     console.log(inputfield)
    
//     inputfield.forEach((field, index) => {
//       console.log(index)
//       console.log(field)
//       if (index == 0) {
//         let label = field.querySelector("label")
//         let inputContainer = field.querySelector("div:nth-child(2) > div")
//         let input = inputContainer.querySelector('input[id="name"]')
//         console.log("input:", input.value)
//         console.log(label.innerText.toLowerCase)

//         if (label && input) {
//           console.log(label.innerText)
//           if (label.innerText.includes("Name")) {
//             console.log("here")
//             input.value = val.name
//             input.dispatchEvent(new Event("input", { bubbles: true }))
//             input.dispatchEvent(new Event("change", { bubbles: true }))
//           }
//         }
//       }

//       if (index == 1) {
//         console.log("hy")
//         let label = field.querySelector("div[id='phone-legend']")
//         let input = field.querySelector("input[id='phone-number']")
//         console.log(input)
//         console.log(label)
//         if (label.innerText.includes("Phone")) {
//           input.value = val.phone

//           input.dispatchEvent(new Event("input", { bubbles: true }))
//           input.dispatchEvent(new Event("change", { bubbles: true }))
//         }
//       }

//       if (index == 2) {
//         let label = field.querySelector("label[id='email--label']")
//         let input = field.querySelector("input[id='email']")
//         console.log(input)
//         console.log(label)
//         if (label.innerText.includes("Email")) {
//           input.value = val.email
//           input.dispatchEvent(new Event("input", { bubbles: true }))
//           input.dispatchEvent(new Event("change", { bubbles: true }))
//         }
//       }
//     })
//     console.log("button")

//     const submit = form.querySelector("button[form='userDetails']")
//     console.log(submit)
//     if (submit) {
//       try {
//         submit.click()
//         // console.log(window.location.href) 
//         // for (const key in data) {
//         //     console.log(data[key])
//         //     if (val == data[key]) {
//         //       delete data[key];
//         //       console.log(`Deleted key: ${key} with value: ${val}`);
//         //     }
//         // }
//         // async function setstorage() {
//         //   await storage.set("usersdata", data)
//         // }
        
//         // setstorage()
//         // console.log(data)
//         // console.log(typeof(data))

//         window.close()
       
//       } catch (error) {
//         console.log("here inside error")
//         console.error(error)
//         window.close()
//       }
//       // Programmatically click the submit button
//     } else {
//       console.error("Submit button not found in the form.")
//     }
//   }, 1000)
// }

// window.addEventListener("load", fillsandsubmitsvalue)



import { Storage } from "@plasmohq/storage";

const storage = new Storage();

export const config = {
  matches: [
    "https://anandgxcr.setmore.com/beta/anand?step=user-details&products*"
  ],
  all_frames: true
};

console.log("in formfill");

function generateUniqueIdentifier() {
  return crypto.randomUUID();
}

async function getvalue() {
  console.log("inside form page");
  const data = await storage.get("usersdata"); // "value"
  console.log(data);
  return data;
}

async function clearData() {
  const val = await storage.remove("usersdata")
  console.log(val)
  localStorage.removeItem('usedArrays');
}

async function getUniqueArray() {
  const data = await getvalue();
  // localStorage.setItem('arraysExhausted', 'false');
  if (!data || !Array.isArray(data) || data.length === 0) {

    console.error('Invalid or empty data retrieved.');
    return null;
  }


  let pageIdentifier = sessionStorage.getItem('pageIdentifier');
  if (!pageIdentifier) {
    pageIdentifier = generateUniqueIdentifier();
    sessionStorage.setItem('pageIdentifier', pageIdentifier);
  }

  let usedArrays = JSON.parse(localStorage.getItem('usedArrays')) || [];
  let usedArrays_value = JSON.parse(localStorage.getItem('usedArraysValue')) || [];

  if (usedArrays.length >= data.length) {
    console.error('No more unique arrays available.');
    localStorage.setItem('arraysExhausted', 'true');
    localStorage.removeItem('pageIdentifier');
    sessionStorage.removeItem('pageIdentifier');
    await clearData()
   
    localStorage.removeItem('uniqueArray');
    window.close()
    alert('all values are filled now start again')
   
    // return null;
  }

  let uniqueArray = null;

  // Find an unused array index
  for (let i = 0; i < data.length; i++) {
    if (!usedArrays.includes(i)) {
      uniqueArray = data[i];
      usedArrays.push(i);
      usedArrays_value.push[data[i]]
      localStorage.setItem('usedArraysValue', JSON.stringify(usedArrays_value))
      localStorage.setItem('usedArrays', JSON.stringify(usedArrays));
      localStorage.setItem(pageIdentifier, JSON.stringify(uniqueArray));
      console.log('Used array index:', i);
      break;
    }
  }

  if (!uniqueArray) {
    console.error('No unused array found.');
    return null;
  }

  console.log('Used arrays:', usedArrays);
  console.log('Unique array:', uniqueArray);
  return uniqueArray;
}


async function fillsandsubmitsvalue() {
  let pageIdentifier = sessionStorage.getItem('pageIdentifier');

  if (!pageIdentifier) {
    pageIdentifier = generateUniqueIdentifier();
    sessionStorage.setItem('pageIdentifier', pageIdentifier);
  }

  const val = await getUniqueArray();
  if (!val) {
    alert('fill the values in excel sheet and then retry')
    console.error('No unique array found.');
    window.close()
  }

  setTimeout(() => {
    let form = document.querySelector(
      'main > div:nth-child(2) > div > div:nth-child(1) > div > form[id="userDetails"]'
    );

    const script = document.createElement("script");
    script.textContent = `(function() {
        let form = document.querySelector(
    'main > div:nth-child(2) > div > div:nth-child(1) > div > form[id="userDetails"]')
     form.setAttribute('novalidate', true);
     form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        // Additional logic for handling form submission here if needed
     });
    })()`;
    document.body.appendChild(script);
    console.log(form);

    let inputfield = form.querySelectorAll("div > fieldset > div > div");
    console.log(inputfield);

    inputfield.forEach((field, index) => {
      console.log(index);
      console.log(field);
      if (index == 0) {
        let label = field.querySelector("label");
        let inputContainer = field.querySelector("div:nth-child(2) > div");
        let input = inputContainer.querySelector('input[id="name"]');
        console.log("input:", input.value);
        console.log(label.innerText.toLowerCase);

        if (label && input) {
          console.log(label.innerText);
          if (label.innerText.includes("Name")) {
            console.log("here");
            input.value = val.name;
            input.dispatchEvent(new Event("input", { bubbles: true }));
            input.dispatchEvent(new Event("change", { bubbles: true }));
          }
        }
      }

      if (index == 1) {
        console.log("hy");
        let label = field.querySelector("div[id='phone-legend']");
        let input = field.querySelector("input[id='phone-number']");
        console.log(input);
        console.log(label);
        if (label.innerText.includes("Phone")) {
          input.value = val.phone;

          input.dispatchEvent(new Event("input", { bubbles: true }));
          input.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }

      if (index == 2) {
        let label = field.querySelector("label[id='email--label']");
        let input = field.querySelector("input[id='email']");
        console.log(input);
        console.log(label);
        if (label.innerText.includes("Email")) {
          input.value = val.email;
          input.dispatchEvent(new Event("input", { bubbles: true }));
          input.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }
    });
    console.log("button");

    const submit = form.querySelector("button[form='userDetails']");
    console.log(submit);
    if (submit) {
      try {
        submit.click();
        setTimeout(() => {
          window.close()
        }, 5000)
        // Programmatically click the submit button
        // alert("form filled successfully")
        // window.close();
      } catch (error) {
        console.log("here inside error");
        console.error(error);
        window.close();
      }
    } else {
      console.error("Submit button not found in the form.");
    }
  }, 1000);
}

window.addEventListener("load", fillsandsubmitsvalue);
