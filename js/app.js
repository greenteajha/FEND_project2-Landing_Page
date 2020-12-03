let a = document.querySelectorAll(".section1-menu a");
console.log(a[0].innerText);

for (let b of a){
    b.addEventListener("mouseover", function(){
        b.style.backgroundColor = "#730c02";
        b.style.color = "#f2ae2e";
    });

    b.addEventListener("mouseout", function(){
        b.style.backgroundColor = "#f2ae2e";
        b.style.color = "#730c02";
    });
}
