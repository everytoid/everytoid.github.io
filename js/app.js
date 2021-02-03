const container = document.querySelector(".container");
const posts = [
  {
    name: "Magento",
    image: "images/magento-blog.png",
    url: "https://magento.com/blog/technical/how-elogic-became-magento-solution-partner-5-lessons-learned"
  },
  {
    name: "Oxford Biolabs",
    image: "images/oxbio.png",
    url: "https://www.oxfordbiolabs.com/blogs/research-publications/the-truth-about-biotin-and-hair-growth/"
  },
  {
    name: "MedGadget",
    image: "images/medgadget.png",
    url: "https://www.medgadget.com/2017/09/wireless-handheld-ultrasound-ios-android-interview-laurent-pelissier-ceo-clarius-mobile-health.html"
  },
  {
    name: "WealthTech Club",
    image: "images/wtc-club.png",
    url: "https://wealth.insart.com/ibm-cloud-for-financial-services/"
  },
];
const showPosts = () => {
  let output = "";
  posts.forEach(
    ({ name, image, url }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="${url}" target="_blank">Read More</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showPosts);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
