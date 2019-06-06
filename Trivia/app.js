const inputText = document.getElementById("input-text");
const inputsAnswer = Array.from(document.getElementByClassName("sumbit");

const buttonSend = document.getElementById("button-send");

buttonSend.addEventListener("click",obtenerNombre)

function obtenerNombre(c){
  console.log(inputText.Value)
  for(let i= 0; 1 < inputsAnswer.length;1++){
    if(inputAnswer [i].checked){
      console.log(inputsAnswer[ i].Value)
    }
  }
  location.href = "result.html"
  sessionStorage.setItem("name",inputText.Value);
}
