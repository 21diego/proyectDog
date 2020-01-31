/*function paint(event){
  event.target.style.background = document.querySelector('input[name="color"]').value;
}
document.querySelectorAll('.background>div').forEach(div => div.addEventListener("click",paint));
document.querySelectorAll("*").forEach(e => e.addEventListener("click", event => event.target.classList.add("zoomInOut")));*/
const maxState = 100;
const minState = 0;
let countClick = 0
let maxClick = 3;


function acariciar(){
  let tail = document.querySelector("#tail");
  countClick++;
  if(!tail.classList.contains("shake")){
    tail.classList.add("shake");
  }
  else if(countClick >= maxClick){
    countClick=maxClick;
    countClick--;
  }
  console.log(countClick)

  
  let count = document.querySelector("#count").textContent;
  
}

document.querySelector("#head").addEventListener("click",acariciar);