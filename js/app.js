/* Hover effect over section 1's menu buttons */
let section1menuitems = document.querySelectorAll(".section1-menu a");

for (let section1menuitem of section1menuitems){
    section1menuitem.addEventListener("mouseover", function(){
        section1menuitem.style.backgroundColor = "#730c02";
        section1menuitem.style.color = "#f2ae2e";
    });

    section1menuitem.addEventListener("mouseout", function(){
        section1menuitem.style.backgroundColor = "#f2ae2e";
        section1menuitem.style.color = "#730c02";
    });
}

/* Function to check if component is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const sect1box = document.querySelector('.section1-container');
const rect = isInViewport(sect1box);
console.log(rect);
*/


const navLinksFragment = document.createDocumentFragment();

/* Create div container for navigation menu */
const navLinks = document.createElement('div');
navLinks.setAttribute('id','nav-bar-section-links');

/* Search for section names */
const sectionNames = document.querySelectorAll('.sections');
console.log(sectionNames[0].id);

/* Create unordered list */
const navLinksUL = document.createElement('ul');

/* Create dynamic list items and links */
for (let sectionName of sectionNames){
    let navLinksLI = document.createElement('li');
    let navLinksA = document.createElement('a');
    navLinksA.textContent = sectionName.id;
    navLinksLI.appendChild(navLinksA);
    navLinksUL.appendChild(navLinksLI);
}

navLinks.appendChild(navLinksUL);
navLinksFragment.appendChild(navLinks);

const abc = document.querySelector('.nav-bar-container');
abc.appendChild(navLinksFragment);

