const toggles = document.querySelectorAll(".d-flex-div");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const description = toggle.nextElementSibling;
    const plusIcon = toggle.querySelector(".plus");
    const minusIcon = toggle.querySelector(".minus");

    description.classList.toggle("d-none");

    if (description.classList.contains("d-none")) {
      plusIcon.classList.remove("d-none");
      minusIcon.classList.add("d-none");
    } else {
      plusIcon.classList.add("d-none");
      minusIcon.classList.remove("d-none");
    }
  });
});
