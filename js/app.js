const container = document.querySelector(".container");
const coffees = [
  {
    name: "Magento",
    image: "images/magento-blog.png"
  },
  {
    name: "Oxford Biolabs",
    image: "images/oxbio.png"
  },
  {
    name: "MedGadget",
    image: "images/medgadget.png"
  },
  {
    name: "WealthTech Club",
    image: "images/wtc-club.png"
  },
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Read More</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
