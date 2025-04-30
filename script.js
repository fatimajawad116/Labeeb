
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");

let isOpen = false;

menuToggle.addEventListener("click", () => {
  isOpen = !isOpen;
  mobileNav.style.display = isOpen ? "flex" : "none";
  menuToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});
const sections = ["home", "about", "faq", "contact"];
const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section && window.scrollY >= section.offsetTop - 150) {
      current = id;
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

links.forEach(link => {
  link.addEventListener("click", () => {
    if (isOpen) {
      isOpen = false;
      mobileNav.style.display = "none";
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
});

  

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const btn = item.querySelector(".faq-question");
  const icon = btn.querySelector(".icon");

  btn.addEventListener("click", () => {
    item.classList.toggle("open");
    icon.textContent = item.classList.contains("open") ? "−" : "+";
  });
});


gsap.set("#mySvg", { x: "100%" });
gsap.to("#mySvg", {
  x: 0,
  duration: 1.5,
  ease: "elastic.out(1, 0.5)"
});
const element = document.getElementById("myDiv");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(element, {
            xPercent: 0,
            yPercent: 0,
            duration: 0.3,
          });
          gsap.to(element, {
            yPercent: 10, 
            duration: 2,
            repeat: -1, 
            yoyo: true, 
            ease: "power1.inOut",
          });
        }
      });
    }, {
      threshold: 0.5, 
    });
    observer.observe(element);
    gsap.set(element, {
      xPercent: -10,
      yPercent: -10,
    });

document.getElementById("year").textContent = new Date().getFullYear();
