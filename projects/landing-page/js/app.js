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

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Scroll to anchor ID using scrollTO event

/*
const scrollTo = (target) => {
    var page = document.getElementById(target)
    page.scrollIntoView({behavior: "smooth"});
}
*/

// build the nav
const sections = Array.from(document.getElementsByTagName("section"))
//const sections = document.getElementsByTagName("section");
const navbar = document.getElementById("navbar__list");
const addLiToNav = (sectionArray) => {
  for (const sec of sectionArray) {
    // Iterate through the sections, creating a <li> for each.
    const newNavbarItem = document.createElement("li");
    newNavbarItem.className = "menu__link";

    // Add anchor links to each item
    newNavbarItem.innerHTML += `${sec.getElementsByTagName("h2")[0].innerText}`;
    newNavbarItem.setAttribute("data-target", document.getElementById(sec.id));
    newNavbarItem.addEventListener("click", function () {
      sec.scrollIntoView({ behavior: "smooth" });
    });

    // Add the link to the navbar
    navbar.appendChild(newNavbarItem);
  }
};

// Change CSS class when div is in view

// Add class 'active' to section when near top of viewport

// window.addEventListener("load", (event) => {
/*  boxElement = document.querySelectorAll("section"); 
  
    createObserver();
  }, false);
*/

// boxElement = document.querySelector("#section3") // FOR TESTING observer.observe

function createObserver() {
  let observer;

  let options = {
    root: null, // null = the viewport.
    rootMargin: "0px", // no added or subtracted spaces
    threshold: 1.0, // 1.0 = every pixel of the target section must be visible.
  };

  observer = new IntersectionObserver(intersectFunc, options);
  sections.forEach(section => observer.observe(section));
}


const intersectFunc = (secs, observer) => {
  secs.forEach((sec) => {
    if (sec.intersectionRatio === 1) {
      console.log((JSON.stringify(sec.target.id) + " is now IN view"));
      sec.target.classList.add("your-active-class")
    } else {
        console.log((JSON.stringify(sec.target.id) + " is now OUT of view"));
        sec.target.classList.remove("your-active-class")
    }
  });
};

document.addEventListener(
    "DOMContentLoaded",
    addLiToNav(sections),
    createObserver()
  );
  

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

