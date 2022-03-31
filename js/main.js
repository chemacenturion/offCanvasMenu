// Start writing JavaScript here!
const button = document.querySelector("button");
const body = document.body;

// button.addEventListener("click", (event) => {
//   if (body.classList.contains("offsite-is-open")) {
//     body.classList.remove("offsite-is-open");
//   } else {
//     body.classList.add("offsite-is-open");
//   }
// });

button.addEventListener('click', event => {
    body.classList.toggle('offsite-is-open')
})