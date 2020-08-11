// Global Variables
const dropdown = document.querySelector(".menu-ul");
const slideContainer = document.querySelector(".slide-container");
const slideTriggers = document.querySelectorAll(".trigger");
let slideIndex = 0; 

// an array of projects to display as slides
const projects = [
  `<div class="project flex fade">
    <h3>Resgistration Form</h3>
    <p>This project displays a responsive form for users signing up for a newsletter. It uses the different form types available in HTML.</p>
    <a href="https://cpthewebdev.github.io/techdegree-project-3/">
      <img src="images/Projects/online-web-form.png" alt="Online Web Form">
    </a>
  </div>`,
  `<div class="project flex fade">
    <h3>Web Style Guide</h3>
    <p>This project uses the Sass extension language to create a style guide that can be used to prototype websites.</p>
    <a href="https://cpthewebdev.github.io/techdegree-project-4/">
      <img src="images/Projects/web-style-guide.png" alt="Web Style Guide">
    </a>
  </div>`,
  `<div class="project flex fade">
    <h3>Game Show App</h3>
    <p>This project is an interactive game using Javascript where a users attempts to guess a random phrase with a limited amount of attmepts.</p>
    <a href="https://cpthewebdev.github.io/techdegree-project-6/">
      <img src="images/Projects/game-show-app.png" alt="Game Show App">
    </a>
  </div>`,
  `<div class="project flex fade">
    <h3>WebApp Dashboard</h3>
    <p>This project displays the landing page for a WebApp Dashboard and uses a Javascript chart library.</p>
    <a href="https://cpthewebdev.github.io/techdegree-project-7/">
      <img src="images/Projects/web-app-dashboard.png" alt="Web App Dashboard">
    </a>
  </div>`,
  `<div class="project flex fade">
    <h3>Employee directory</h3>
    <p>Using fetch this project grabs information for 12 random employees from an API and diplays the employess in a directory.</p>
    <a href="https://cpthewebdev.github.io/techdegree-project-8/">
      <img src="images/Projects/employee-directory.png" alt="Employee Directory">
    </a>
  </div>`
];

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

// displays project divs as a slider
function showSlides() { 
	slideIndex++; 

	// checks for boundary to loop slider
	if (slideIndex > projects.length) { 
		slideIndex = 1; 
	} 

  // removes active class from all triggers
  for (let i = 0; i < slideTriggers.length; i++) { 
		slideTriggers[i].className = slideTriggers[i].className.replace(" active", ""); 
	} 

  // inserts project div and changes current trigger to active
  slideContainer.innerHTML = projects[slideIndex - 1]; 
	slideTriggers[slideIndex - 1].className += " active"; 	

  // change div every 6 seconds 
  setTimeout(showSlides, 6000); 
} 

showSlides();
