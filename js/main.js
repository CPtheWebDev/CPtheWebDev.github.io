// Global Variables
const dropdown = document.querySelector(".menu-ul");
const navbar = document.querySelector(".main-nav");
const header = document.querySelector("header");
const sticky = navbar.offsetTop;
const projects = document.querySelectorAll(".project");
const slideTriggers = document.querySelectorAll(".trigger");
let slideIndex = 0;
let timeOut;  

// displays a list upon clicking the menu button
window.addEventListener('click', (event) => {
  // html to insert into list item
  const html = [
    `<a href="#about">About</a>`,
    `<a href="#projects">Projects</a>`,
    `<a href="#contact">Contact</a>`
  ];
  // checks if user clicked the menu button and that there are no list items
  if (event.target.className === "menu-button" && dropdown.childElementCount === 0) {
    for (let i = 0; i < html.length; i++) {
      const li = document.createElement("LI");
      li.innerHTML = html[i];
      dropdown.appendChild(li);
    }
  // clears list items whenever the use clicks on the screen
  } else if (dropdown.childElementCount > 0) {
    for (let i = 0; i < html.length; i++) {
      dropdown.removeChild(dropdown.lastChild);
    }
  }
});

// When the user scrolls the page add the sticky class to the navbar when its scroll position is reached. 
// Remove "sticky" when you leave the scroll position
window.onscroll = () => {
  if (screen.width >= 1024) {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
      header.style.marginTop = "136px";
    } else {
      navbar.classList.remove("sticky");
      header.style.marginTop = "0";
    }
  }
}

// displays project divs as a slider
function showSlides() { 
	slideIndex++; 

	// checks for boundary to loop slider
	if (slideIndex > projects.length) { 
		slideIndex = 1; 
  } 
  
  if (screen.width >= 1024) {
    // removes display from all slides
    // removes active class from all triggers
    for (let i = 0; i < projects.length; i++) { 
      projects[i].style.display = "none"; 
      slideTriggers[i].className = slideTriggers[i].className.replace(" active", "");
    } 

    // inserts project div and changes current trigger to active
    projects[slideIndex - 1].style.display = "flex"; 
    slideTriggers[slideIndex - 1].className += " active"; 	
  }
  timeOut = setTimeout(showSlides, 6000);
} 

showSlides();

// Stops showSlides from running at smaller screens
// also prevents multiple setTimeout functions from running
window.addEventListener('resize', () => {
  clearTimeout(timeOut);
  if (screen.width >= 1024) {
    showSlides();
  }
  else {
    header.style.marginTop = "0";
    // keeps static display at smaller screen sizes
    for (let i = 0; i < projects.length; i++) { 
      projects[i].style.display = "flex";
    }
  }
});
