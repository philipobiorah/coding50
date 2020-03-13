let btn = document.querySelector("button");
btn.addEventListener("click",  function(){
     console.log("Person don click me ooh");
});
 
const input = document.querySelector("input");
const para = document.querySelector(".p-to-copy-to");

input.addEventListener("keypress", function(){
    para.innerHTML = input.value;
} );
