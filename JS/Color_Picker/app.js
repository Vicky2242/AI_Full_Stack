

const defaultColor = document.querySelectorAll("button")
const colorBox = document.querySelector(".color");
const colorText = document.querySelector(".hex-box")



function loadEvents() {
   
   defaultColor.forEach(function(btn) {
      btn.addEventListener("click", defaultColorLink)
   })

   colorBox.addEventListener("input", colorPick)

}

loadEvents()

function defaultColorLink(e) {
   const btn = e.target;
   document.body.style.backgroundColor = btn.value
   colorText.innerHTML = btn.value
}

function colorPick(){
   document.body.style.backgroundColor = colorBox.value
   colorText.innerHTML = colorBox.value
}


