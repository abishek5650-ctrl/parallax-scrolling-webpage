window.addEventListener("scroll", function () {
  document.querySelectorAll(".parallax").forEach(section => {
    let offset = window.pageYOffset;
    section.style.backgroundPositionY = offset * 0.5 + "px";
  });
});