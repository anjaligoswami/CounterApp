let countEl = document.querySelector(".count")
let saveEl = document.querySelector(".save-el")

let count =0
function increment() {
      // console.log("button is clicked");
      count += 1
      countEl.innerText = count
};

function save() {
     saveEl.innerText += count
     saveEl.innerText += "- "
     count =0
     countEl.innerText = count
}