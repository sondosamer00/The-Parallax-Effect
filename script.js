let back=document.getElementById("back");
let guy=document.getElementById("guy");
let title=document.getElementById("title");

window.addEventListener('scroll', function(){
var value = window.scrollY;

back.style.top = value *0.5 + 'px' ; 
guy.style.left = -value *0.5 + 'px' ; 
title.style.top = value *1 + 'px';

         
})