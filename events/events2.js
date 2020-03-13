document.addEventListener("DOMContentLoaded", function(){

   let input = document.querySelector(".color-input");
   let box = document.querySelector(".color-box");

   input.addEventListener("keypress" , function(){
       box.style.backgroundColor =  input.value;
   });




});