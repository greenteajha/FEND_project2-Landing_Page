/* ----------------------------------- */
/* SECTION 1'S CONTENT CHANGE FUNCTION */
const activeSectionOneOptionOne = document.querySelector('.section1-menu-link-option-one');
const activeSectionOneOptionTwo = document.querySelector('.section1-menu-link-option-two');
const sectionOneImage = document.querySelector('#section1-embeded-image');
const sectionOneText = document.querySelector('#section1-information-text');


activeSectionOneOptionOne.addEventListener("mouseover",function(){
    sectionOneImage.setAttribute('src','images/section1-image-what-do-we-sell.PNG');
    sectionOneText.textContent = "Bubble Tea. Chinese Deserts.";
    activeSectionOneOptionOne.classList.toggle('active');
    //activeSectionOneOptionOne.setAttribute('class','section1-menu-link-option-one active');
    if (activeSectionOneOptionTwo.classList.contains('active')){
        activeSectionOneOptionTwo.classList.toggle('active');
    }
});

activeSectionOneOptionTwo.addEventListener("mouseover",function(){
    sectionOneImage.setAttribute('src','images/section1-image-types-of-ingredients.png');
    sectionOneText.textContent = "Fresh Ingredients. Locally Sourced. Organic.";
    activeSectionOneOptionTwo.classList.toggle('active');
    //activeSectionOneOptionTwo.setAttribute('class','section1-menu-link-option-two active');
    if (activeSectionOneOptionOne.classList.contains('active')){
        activeSectionOneOptionOne.classList.toggle('active');
    }
});

/* -------------------------------------------------------------- */
/* "IF SECTION IS ACTIVE, HIGHLIGHT NAVIGATION BAR LINK" FUNCTION */
/* Function to check if DOM element is in frame */
function isInViewport(element) {

    const elementBoundry = element.getBoundingClientRect();
    return (
        elementBoundry.top >= 0 &&
        elementBoundry.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function isNavActive(elements) {
    for (let element of elements){
        if(element.classList.contains('active')){
            element.classList.remove('active');
        }
    }
}

/* Function to check if sections are in viewport */
const sectionBoxes = document.querySelectorAll(".sections");
let isActive = false;

for (let sectionBox of sectionBoxes){

    /* On scroll function */
    document.addEventListener("scroll", function(){    

        const sectionViewport = isInViewport(sectionBox);
        const activeLink = document.getElementById(sectionBox.id+'A');
        const navBoxes = document.querySelectorAll('.navButtons');

        /* If sections is in viewport... */
        if (sectionViewport){            
            isNavActive(navBoxes);
            activeLink.classList.add('active');          
        }else{

            /* If sections is not in viewport... */
            const bannerContainer = document.querySelector('.banner-container');
            const bannerRect = bannerContainer.getBoundingClientRect();

            /* If banner top border is within screen, remove active states from navigation links */
            if (bannerRect.top >= 0){
                isNavActive(navBoxes);
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
    navLinksA.textContent = sectionName.getAttribute('value');
    //navLinksA.setAttribute('href','#'+sectionName.id);
    navLinksA.classList.add("navButtons");
    navLinksA.setAttribute('id',sectionName.id+'A');
    navLinksA.setAttribute('value',sectionName.id);
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

/* -------------------------------- */
/* SCROLL TO CLICKED NAVIGATION BAR */
const navButtons = document.getElementsByClassName('navButtons');

for (let navButton of navButtons){
    const navValue = navButton.getAttribute('value');
    const sectionID = document.getElementById(navValue);

    navButton.addEventListener("click", function(){
        sectionID.scrollIntoView();
    });
}