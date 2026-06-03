const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  mobileToggle = body.querySelector(".mobile-sidebar-toggle"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  if (window.innerWidth <= 900) {
    sidebar.classList.toggle("open");
  } else {
    sidebar.classList.toggle("close");
  }
});

if (mobileToggle) {
  mobileToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
  sidebar.classList.add("open");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});

var typed = new Typed(".input", {
  strings: ["Siswa SMK TELKOM BANDUNG", "kelas 10 PPLG 1", "Siap Untuk dibimbing menuju lebih baik"],
  typeSpeed: 100,
  backSpeed: 55,
  loop: true,
});
