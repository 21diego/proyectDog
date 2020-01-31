/*function paint(event){
  event.target.style.background = document.querySelector('input[name="color"]').value;
}
document.querySelectorAll('.background>div').forEach(div => div.addEventListener("click",paint));
document.querySelectorAll("*").forEach(e => e.addEventListener("click", event => event.target.classList.add("zoomInOut")));*/
const maxState = 100;
const minState = 0;
let state = 60;

function charge(){
  let carga = document.querySelector("#carga");
  carga.innerHTML = state;
  let stateText = document.querySelector("#state-text");
  if(state >= 70){
    carga.style.backgroundColor = "#7ed42c";
    stateText.innerHTML = "FELIZ";
  }
  else if(state >= 40){
    carga.style.backgroundColor = "#dfc637";
    stateText.innerHTML = "NORMAL";
  }
  else {
    carga.style.backgroundColor = "#206ccf";
    stateText.innerHTML = "TRISTE";
  }
}

function downState(){
  if(state > minState){
    state -= 5;
  }
  charge();
}

function upState(){
  if(state < maxState){
    state += 5;
  }
  charge();
}

function quitarClase(element){
  element[0].removeAttribute("class");
}

function acariciar(){
  let tail = document.querySelector("#tail");
  tail.classList.add("shake");
  upState();
  window.setTimeout(quitarClase,2200,[tail]);
}

function paintNecklace(){
  let necklace = document.querySelector("#necklace");
  necklace.style.backgroundColor = document.querySelector("#colorPick").value;
  upState();
}

function accionar(){
  let option = document.querySelector("#trick-select").value;
  if(option == "saludar"){
    let lpaw = document.querySelector("#left-paw");
    lpaw.classList.add("upPaw");
    window.setTimeout(quitarClase,3200,[lpaw]);
  }
}

document.querySelector("#head").addEventListener("click",acariciar);
downState();
window.setInterval(downState,5000);
document.querySelector("#name-text").addEventListener("keyup",function(){
  document.querySelector("#medal").innerHTML = document.querySelector("#name-text").value.toUpperCase();
  upState();
});
document.querySelector('#colorPick').addEventListener("change",paintNecklace);
document.querySelector("#trick-select").addEventListener("change",accionar);