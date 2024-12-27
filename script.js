window.addEventListener("scroll", setScrollVar);

function setScrollVar() {
  const htmlElement = document.documentElement;
  const percentOfHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight;

  htmlElement.style.setProperty(
    "--scroll",
    Math.min(percentOfHeightScrolled * 100, 100)
  );
  console.log(htmlElement.style.getPropertyValue("--scroll"));
  console.log(
    getComputedStyle(document.querySelector(`img[alt="img-1"]`)).transform
  );
}
setScrollVar();
