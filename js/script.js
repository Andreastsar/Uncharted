const body = document.querySelector("body");
const header = document.querySelector(".header");

const mobileNavButton = document.querySelector(".btn-mobile--nav");
mobileNavButton.addEventListener("click", () => {
   header.classList.toggle("nav-open");
});

// Activities cards
const cards = document.querySelectorAll(".card-activity");

cards.forEach((card) => {
   card.addEventListener("click", () => {
      cards.forEach((card) => {
         card.classList.remove("active");
      });
      card.classList.add("active");
   });
});

// Date inputs
const todayDate = new Date().toISOString().split("T")[0];
const startingDate = document.getElementById("start-date");
startingDate.setAttribute("min", todayDate);

// Smooth Scrolling
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
   link.addEventListener("click", (e) => {
      e.preventDefault();

      // read the href of the link
      const href = link.getAttribute("href");

      switch (href) {
         case "#":
            window.scrollTo({
               top: 0,
               behavior: "smooth",
            });
            break;

         default:
            const sectionEl = document.querySelector(href);

            sectionEl.scrollIntoView({ behavior: "smooth" });
            break;
      }

      // Close mobile navigation after clicking on the menu button
      if (link.classList.contains("main-nav-link")) {
         header.classList.toggle("nav-open");
      }
   });
});

// Sticky navigation
const sectionHeroEl = document.querySelector(".hero");

const observer = new IntersectionObserver(
   (entries) => {
      const entry = entries[0];

      if (!entry.isIntersecting) {
         body.classList.add("sticky");
      } else {
         body.classList.remove("sticky");
      }
   },
   {
      // In the viewport
      root: null,
      threshold: 0,
   }
);

// the section we want to observe is the hero section
observer.observe(sectionHeroEl);
