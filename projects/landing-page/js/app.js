/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

// Define Global Variables
const sections = Array.from(document.getElementsByTagName("section"));
const navbar = document.getElementById("navbar__list");

// build the Navbar function
const addLiToNav = (sectionArray) => {
  for (const sec of sectionArray) {
    // Iterate through the sections, creating a <li> for each.
    const newNavbarItem = document.createElement("li");
    newNavbarItem.className = "menu__link";

    // Add anchor links to each item
    newNavbarItem.innerHTML += `${sec.getElementsByTagName("h2")[0].innerText}`;
    newNavbarItem.setAttribute("data-target", document.getElementById(sec.id));

    // Give it an ID of navbar_ followed by the section ID
    const idString = sec.id.toString();
    newNavbarItem.setAttribute("id", "navbar_" + idString);

    // Scroll to it when clicked
    newNavbarItem.addEventListener("click", function () {
      sec.scrollIntoView({ behavior: "smooth" });
    });

    // Add the link to the navbar
    navbar.appendChild(newNavbarItem);
  }
};

// Change CSS class when div is in view, using the Intersection Observer API
function createObserver() {
  let observer;
  let options = {
    root: null, // null = the viewport.
    rootMargin: "0px", // no added or subtracted spaces
    threshold: 1.0, // 1.0 = every pixel of the target section must be visible.
  };
  observer = new IntersectionObserver(intersectFunc, options);
  sections.forEach((section) => observer.observe(section));
}

const intersectFunc = (secs, observer) => {
  secs.forEach((sec) => {
    const NavbarButtonId = "navbar_" + sec.target.id.toString();
    const relevantNavbarButton = document.getElementById(NavbarButtonId);

    // Change the CSS class of both the section and the corresponding Nav button, if the section is fully in view, remove it when not true
    if (sec.intersectionRatio === 1) {
      console.log(JSON.stringify(sec.target.id) + " is now fully IN view");
      sec.target.classList.add("your-active-class");
      relevantNavbarButton.classList.add("active-navbar-button");
    } else {
      console.log(
        JSON.stringify(sec.target.id) +
          " is now partially or completely OUT of view"
      );
      sec.target.classList.remove("your-active-class");
      relevantNavbarButton.classList.remove("active-navbar-button");
    }
  });
};

// Begin events when the DOM has loaded content
document.addEventListener(
  "DOMContentLoaded",
  addLiToNav(sections),
  createObserver()
);
