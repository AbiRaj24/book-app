const deletebutton=document.getElementById("add-button");
const overlay=document.querySelector(".overlay");
const popup=document.querySelector(".popup");
const form=document.getElementById("form");

function displayPopup(){
    overlay.style.display="block";
    popup.style.display="block"
}

form.addEventListener("click",function(event){
event.preventDefault();
});

const cancelbutton=document.getElementById("cancel-btn")

function cancelpopup(){
    overlay.style.display="none";
    popup.style.display="none"
}
const main=document.querySelector(".main")
const container=document.querySelector(".container");
const booktitle=document.getElementById("book-Title");
const Bookauthor=document.getElementById("Book-authour");
const textarea=document.getElementById("text-area");

const addpage=document.getElementById("add-btn");


addpage.addEventListener("click",function(event){
event.preventDefault();

const div=document.createElement("div");
div.setAttribute("class", "container");
div.innerHTML=` <h2>${ booktitle.value}</h2>
<h3>${Bookauthor.value}</h3>
<p>${textarea.value}</p>
<button id="add-button" onclick="deletecontent(event)">DELETE</button>`;

main.append(div)
overlay.style.display="none";
popup.style.display="none"


booktitle.value="";
Bookauthor.value="";
textarea.value="";
})

function deletecontent(event){
    
event.target.parentElement.remove();
}

