/* Hover effect over section 1's menu buttons */
let section1menuitems = document.querySelectorAll(".section1-menu a");
let section1imagetag = document.querySelector('#section1-embeded-image');

for (let section1menuitem of section1menuitems){
    section1menuitem.addEventListener("mouseover", function(){
        section1menuitem.style.backgroundColor = "#730c02";
        section1menuitem.style.color = "#f2ae2e";
        section1imagetag.setAttribute('src','images/section1-image-types-of-ingredients.png');
    });

    section1menuitem.addEventListener("mouseout", function(){
        section1menuitem.style.backgroundColor = "#f2ae2e";
        section1menuitem.style.color = "#730c02";
    });
}

/* Function to check if component is in viewport */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const sectionBoxes = document.querySelectorAll(".sections");

for (let sectionBox of sectionBoxes){
    document.addEventListener("scroll", function(){    

        const sectionViewport = isInViewport(sectionBox);

        if (sectionViewport){

            console.log(sectionBox.id+" is in viewport");
        }
    
    });
}

/*
document.addEventListener("scroll", function(){
    const sect1vp = isInViewport(sect1box);
    const sect2vp = isInViewport(sect2box);
    const sect3vp = isInViewport(sect3box);
    if (sect1vp == true){
        console.log("Section 1 is in viewport");
    }else if (sect2vp == true){
        console.log("Section 2 is in viewport");
    }else if (sect3vp == true){
        console.log("Section 3 is in viewport");
    }else{
        console.log("Everything is spoiling!");
    }
    
});
*/

/* Create a document fragment to store dynamic menu */
const navLinksFragment = document.createDocumentFragment();

/* Create div container for navigation menu */
const navLinks = document.createElement('div');
navLinks.setAttribute('id','nav-bar-section-links');

/* Search for section names */
const sectionNames = document.querySelectorAll('.sections');

/* Create unordered list */
const navLinksUL = document.createElement('ul');

/* Create dynamic list items and links */
for (let sectionName of sectionNames){
    let navLinksLI = document.createElement('li');
    let navLinksA = document.createElement('a');
    navLinksA.textContent = sectionName.id;
    navLinksA.setAttribute('href','#'+sectionName.id);
    navLinksLI.appendChild(navLinksA);
    navLinksUL.appendChild(navLinksLI);
}

navLinks.appendChild(navLinksUL);
navLinksFragment.appendChild(navLinks);

const abc = document.querySelector('.nav-bar-container');
abc.appendChild(navLinksFragment);


/* Sticky Navigation Bar */
document.onscroll = function() {myFunction()};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  /* Scroll button back to the top */
const topButton = document.getElementById('scroll-back-to-top-button');

topButton.addEventListener("click", function(){
    topFunction();
});

function topFunction() {
    document.documentElement.scrollTo({
        top: 0, behavior: "smooth"
    })
}