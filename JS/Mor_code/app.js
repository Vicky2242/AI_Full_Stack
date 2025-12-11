const morseCodeMap = {
   A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".",
   F: "..-.", G: "--.", H: "....", I: "..", J: ".---",
   K: "-.-", L: ".-..", M: "--", N: "-.", O: "---",
   P: ".--.", Q: "--.-", R: ".-.", S: "...", T: "-",
   U: "..-", V: "...-", W: ".--", X: "-..-", Y: "-.--",
   Z: "--..",
   0: "-----", 1: ".----", 2: "..---", 3: "...--", 4: "....-",
   5: ".....", 6: "-....", 7: "--...", 8: "---..", 9: "----.",
   " ": " / "
};


const translateText = document.querySelector(".changeButton");
const normalText = document.querySelector("#normal-text");
const morseCodeText = document.querySelector("#morse-text")



translateText.addEventListener("click", function (e) {

   e.preventDefault();

   let normalValue = normalText.value.toUpperCase();
   let morseTranslate = "";

   if (normalValue === "") {
      alert("Type pandra...")
   } else {
      for (let i = 0; i < normalValue.length; i++) {

         let char = normalValue[i];

         if (morseCodeMap[char]) {
            morseTranslate += morseCodeMap[char] + " ";
         } else {
            morseTranslate = "?";
         }
      }
      morseCodeText.innerText = morseTranslate.trim();
   }


})
