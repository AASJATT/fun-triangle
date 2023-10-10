const sides = document.querySelectorAll(".input-side");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function calculateProduct(a,b){
   const product = a*b;
   return product;}

   function calculateArea(){
      const product = calculateProduct(Number(sides[0].value), Number(sides[1].value));
      const area = product/2;
      outputEl.innerText = "The area of triangle: " + area;
   }




areaBtn.addEventListener("click", calculateArea)