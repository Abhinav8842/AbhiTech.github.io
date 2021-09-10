

//get the button:
mybutton=document.getElementById("myBtn");

//when the user scrool down 25 px from the top of document, show the button
window.onscroll=function(){scrollFunction()};

function scrollFunction(){
    if(document.body,screenTop > 25 || document.documentElement.scrollTop >25){
   mybutton.style.display="block";
} 
else{
    mybutton.style.display="none";
}

}

//when the user click on the button , scrool to the top of the document
function topFunction(){
    document.body.scrollTop=0; // for safari
    document.documentElement.scrollTop=0; // for chrome, firefox,IE and Opera
}
