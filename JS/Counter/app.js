

const countNumber = document.querySelector(".number");
const decreaseCount = document.querySelector(".decrease")
const resetCount = document.querySelector(".reset")
const increaseCount = document.querySelector(".increase")



let count = Number(countNumber.innerText);

increaseCount.addEventListener("click", function () {

   count++;
   countNumber.innerText = count;

})

decreaseCount.addEventListener("click", function () {

   if (count > 0) {
      count--;
      countNumber.innerText = count;
   } else {
      countNumber.innerText = 0;
   }

})

resetCount.addEventListener("click", function () {

   countNumber.innerText = 0;

})