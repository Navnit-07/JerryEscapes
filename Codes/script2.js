const jerry = document.querySelector("#j-img");
const tom = document.querySelector("#t-img");
let jx
let jy
let tx
let ty

setInterval(() => {
  jx = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('left'))
  jy = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('top'))

  tx = parseInt(window.getComputedStyle(tom, null).getPropertyValue('left'))
  ty =parseInt( window.getComputedStyle(tom, null).getPropertyValue('top'))

  let offsetX = Math.abs(jx-tx)
  let offsetY = Math.abs(jy-ty)

  if(offsetX  < 30 && offsetY < 100){
    tom.classList.remove('t-ani')
  }
  
}, 10);

document.addEventListener("keydown", (event) => {
  let e = event.key;

  if (e === "ArrowUp") {
    jerry.classList.add("j-ani");
    setTimeout(()=>{
      jerry.classList.remove("j-ani");
    }, 700)
  }
  else if(e === "ArrowRight" && tPosition-jPosition > 30){
    jerry.style.left = jPosition + 100 + 'px'
  }
  else if(e === "ArrowLeft" && tPosition-jPosition > 20){
    jerry.style.left = jPosition - 100 + 'px'
  }

});