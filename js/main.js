function paint(event){
  event.target.style.background = document.querySelector('input[name="color"]').value;
}
document.querySelectorAll('.background>div').forEach(div => div.addEventListener("click",paint));
document.querySelectorAll("*").forEach(e => e.addEventListener("click", event => event.target.classList.add("zoomInOut")));
