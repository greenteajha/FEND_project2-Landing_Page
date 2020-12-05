/* ----------------------------------- */
/* SECTION 1'S CONTENT CHANGE FUNCTION */
const activeSectionOneOptionOne = document.querySelector('.section1-menu-link-option-one');
const activeSectionOneOptionTwo = document.querySelector('.section1-menu-link-option-two');
const sectionOneImage = document.querySelector('#section1-embeded-image');
const sectionOneText = document.querySelector('#section1-information-text');


activeSectionOneOptionOne.addEventListener("mouseover",function(){
    activeSectionOneOptionOne.setAttribute('class','section1-menu-link-option-one active');
    sectionOneImage.setAttribute('src','images/section1-image-what-do-we-sell.PNG');
    sectionOneText.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    if (activeSectionOneOptionTwo.classList.contains('active')){
        activeSectionOneOptionTwo.setAttribute('class','section1-menu-link-option-two');
    }
});

activeSectionOneOptionTwo.addEventListener("mouseover",function(){
    activeSectionOneOptionTwo.setAttribute('class','section1-menu-link-option-two active');
    sectionOneImage.setAttribute('src','images/section1-image-types-of-ingredients.png');
    sectionOneText.textContent = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
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
            const sectionOneContainer = document.querySelector('#section1-container');
            const sectionOneRect = sectionOneContainer.getBoundingClientRect();

            /* If section 1 top border disappear below the screen height... */
            if (sectionOneRect.top > (window.innerHeight || document.documentElement.clientHeight)){
                
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