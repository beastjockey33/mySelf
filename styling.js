var tabButtons = document.querySelectorAll(".headerTab");
var tabContent = document.querySelectorAll(".tabContent");

console.log(tabContent.length);
console.log(tabButtons.length);
// adding EventList to each button
for(i=0;i<tabButtons.length;i++){
    let tabContTemp = tabContent[i];

tabButtons[i].addEventListener("click",function(){

// clearing the tab Content before adding tab content
    for (i = 0; i< tabContent.length; i++){
        tabContent[i].style.display = "none";
    }


tabContTemp.style.display = "block";

console.log(i);
})

}
