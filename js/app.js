/* ------------------------------------------ */
/* SECTION 1'S CONTENT CHANGE FUNCTION */
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


/* -------------------------------------------------------------- */
/* "IF SECTION IS ACTIVE, HIGHLIGHT NAVIGATION BAR LINK" FUNCTION */
/* Function to check if DOM element is in frame */
function isInViewport(element) {

    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

/* Function to check if sections are in viewport */
const sectionBoxes = document.querySelectorAll(".sections");
let isActive = false;

for (let sectionBox of sectionBoxes){

    /* On scroll function */
    document.addEventListener("scroll", function(){    

        const sectionViewport = isInViewport(sectionBox);
        const activeLink = document.querySelector('#'+sectionBox.id+"A");
        const navBoxes = document.querySelectorAll('#nav-bar-section-links a');

        /* If sections is in viewport... */
        if (sectionViewport){            
            for (let navBox of navBoxes){
                if(navBox.classList.contains('active')){
                    navBox.classList.remove('active');
                }
            }

            activeLink.classList.add('active');
          
        }else{

            /* If sections is not in viewport... */
            const bannerContainer = document.querySelector('.banner-container');
            const bannerRect = bannerContainer.getBoundingClientRect();

            /* If banner is IN viewport but not sections... */
            if (bannerRect.top >= 0 && bannerRect.bottom <= (window.innerHeight || document.documentElement.clientHeight)){
                
                for (let navBox of navBoxes){
                    if(navBox.classList.contains('active')){
                        navBox.classList.remove('active');
                    }
                }
            }

        }
    });
}


/* ----------------------------------------- */
/* FUNCTION TO CREATE DYNAMIC NAVIGATION BAR */
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
    navLinksA.setAttribute('id',sectionName.id+"A");
    navLinksLI.appendChild(navLinksA);
    navLinksUL.appendChild(navLinksLI);
}

/* Add dynamic links to the unordered list */
navLinks.appendChild(navLinksUL);
navLinksFragment.appendChild(navLinks);

/* Add unordered list to navigation bar container */
const abc = document.querySelector('.nav-bar-container');
abc.appendChild(navLinksFragment);


/* STICKY NAVIGATION BAR FUNCTION */
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

/* ----------------------------------------------------- */
/* BUTTON FUNCTION TO SCROLL BACK TO THE TOP OF THE PAGE */
topButton.addEventListener("click", function(){
    topFunction();
});

function topFunction() {
    document.documentElement.scrollTo({
        top: 0, behavior: "smooth"
    })
}