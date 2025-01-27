// =============================== Toggle Icon Navbar ===============================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#nav-menu');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// =============================== GitHub Calendar ===============================
GitHubCalendar(".calendar", "OwaiseAahmed", { responsive: true });

// Optional: Use a proxy (if required for API access)
GitHubCalendar(".calendar", "OwaiseAahmed", {
  proxy(username) {
    return fetch(`https://your-proxy.com/github?user=${username}`);
  }
});

// =============================== Resume Open in New Tab ===============================
let resume1 = document.getElementById("resume-button-1");
let resume2 = document.getElementById("resume-button-2");

resume1.addEventListener("click", openResume);
resume2.addEventListener("click", openResume);

function openResume() {
  window.open(
    "https://drive.google.com/file/d/1QtgdXRNzszqwpgYlskjQ3phvAZlKc94h/view?usp=sharing",
    "_blank"
  );
}

// =============================== Scroll Sections Active Link ===============================
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky Navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);


  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .skills-container, .project-card, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "left" });

const typed = new Typed(".multiple-text", {
  strings: ["Full Stack Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const homeSection = document.querySelector(".home");
homeSection.style.opacity = "0";
homeSection.style.transform = "translateY(50px)";

setTimeout(() => {
  homeSection.style.opacity = "1";
  homeSection.style.transform = "translateY(0)";
}, 500);
