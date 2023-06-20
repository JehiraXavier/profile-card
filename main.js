const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");
const handleButtonClick = (e) => {
  const target_section = e.target.getAttribute("data-section");
  const section = document.querySelector(target_section);
  target_section !== "#about"
    ? card.classList.add("is-active")
    : card.classList.remove("is-active");
  card.setAttribute("data-state", target_section);
  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};
buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});
