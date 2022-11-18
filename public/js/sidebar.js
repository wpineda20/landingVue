let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".menu");
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  if (sidebar.classList.contains("animate__slideOutLeft")) {
    sidebar.classList.remove("animate__animated", "animate__slideOutLeft");
  }
  sidebar.classList.add("animate__animated", "animate__slideInLeft");
});

let closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
  if (sidebar.classList.contains("animate__slideInLeft")) {
    sidebar.classList.remove("animate__animated", "animate__slideInLeft");
  }
  sidebar.classList.add("animate__animated", "animate__slideOutLeft");

  setTimeout(() => {
    sidebar.classList.toggle("close");
  }, 500);
});
