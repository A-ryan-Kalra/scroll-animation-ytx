window.addEventListener("scroll", setScrollVar);

function setScrollVar() {
  const htmlElement = document.documentElement;
  const percentOfHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight;
  // console.log(htmlElement.scrollTop);
  console.log(htmlElement.scrollTop / htmlElement.clientHeight);
  htmlElement.style.setProperty(
    "--scroll",
    Math.min(percentOfHeightScrolled * 100, 100)
  );
  htmlElement.style.setProperty("--scrollZ", percentOfHeightScrolled * 100);
  // const img = document.querySelector('img[alt="deploy"]');
  // console.log(img);
  // img.style.transform = `rotate(${percentOfHeightScrolled * 100}deg)`;

  // console.log(htmlElement.style.getPropertyValue("--scrollZ"));
  //   console.log(
  //     getComputedStyle(document.querySelector(`img[alt="img-1"]`)).transform
  //   );
}
setScrollVar();

// console.log(document.querySelector("#img3"));

const observer = new IntersectionObserver((entries) => {
  for (let i = entries.length - 1; i >= 0; i--) {
    // console.log(entries[i]);
    const entry = entries[i];
    if (entry.isIntersecting) {
      document
        .querySelectorAll("[data-img]")
        .forEach((img) => img.classList.remove("show"));
      // console.log(document.querySelectorAll(".container > img"));
      const img = document.querySelector(entry.target.dataset.imgToShow);
      console.log(img);
      img.classList.add("show");
      break;
    }
  }
});

document
  .querySelectorAll("[data-img-to-show]")
  .forEach((section) => observer.observe(section));

const observer1 = new IntersectionObserver((entries) => {
  // console.log(entries);
  for (let i = entries.length - 1; i >= 0; i--) {
    const entry = entries[i];

    if (entry.isIntersecting) {
      document
        .querySelectorAll("[data-img-new]")
        .forEach((img) => img.classList.remove("active-slide"));
      // console.log(entry.target);
      const img = document.querySelector(
        `img[alt="${entry.target.dataset.imgToShowNew}"]`
      );
      console.log(img);
      img.classList.add("active-slide");
      break;
    }
  }
});

document
  .querySelectorAll("[data-img-to-show-new]")
  .forEach((section) => observer1.observe(section));

// let count = 200;
// const timer = setInterval(() => {
//   document.querySelector(".background-check").style.filter = `blur(${count}px)`;
//   document.querySelector(".background-check").style.opacity = `${count / 200}`;
//   count--;
//   if (count > 200) {
//     clearInterval(timer);
//   }
// }, 50);
