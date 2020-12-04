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

/* Document fragment for section 1's image*/

const section1imagefragment = document.createDocumentFragment();

const section1whatdowesell = document.createElement('img');
section1whatdowesell.setAttribute('src','images/section1-image-what-do-we-sell.PNG');

section1imagefragment.appendChild(section1whatdowesell);

const section1imagenode = document.querySelector('#section1-information-image');

section1imagenode.appendChild(section1imagefragment);