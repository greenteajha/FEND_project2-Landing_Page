/* ----------------------------------- */
/* SECTION 1'S CONTENT CHANGE FUNCTION */
const activeSectionOneOptionOne = document.querySelector('.section1-menu-link-option-one');
const activeSectionOneOptionTwo = document.querySelector('.section1-menu-link-option-two');
const sectionOneImage = document.querySelector('#section1-embeded-image');
const sectionOneText = document.querySelector('#section1-information-text');


activeSectionOneOptionOne.addEventListener("mouseover",function(){
    activeSectionOneOptionOne.setAttribute('class','section1-menu-link-option-one active');
    sectionOneImage.setAttribute('src','images/section1-image-what-do-we-sell.PNG');
    sectionOneText.textContent = "Bubble Tea. Chinese Deserts.";
    if (activeSectionOneOptionTwo.classList.contains('active')){
        activeSectionOneOptionTwo.setAttribute('class','section1-menu-link-option-two');
    }
});

activeSectionOneOptionTwo.addEventListener("mouseover",function(){
    activeSectionOneOptionTwo.setAttribute('class','section1-menu-link-option-two active');
    sectionOneImage.setAttribute('src','images/section1-image-types-of-ingredients.png');
    sectionOneText.textContent = "Fresh Ingredients. Locally Sourced. Organic.";
    if (activeSectionOneOptionOne.classList.contains('active')){
        activeSectionOneOptionOne.setAttribute('class','section1-menu-link-option-one');
    }
});

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

            /* If banner top border is within screen, remove active states from navigation links */
            if (bannerRect.top >= 0){

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
    navLinksA.textContent = sectionName.getAttribute('value');
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