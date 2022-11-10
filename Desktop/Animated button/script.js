const btn = document.querySelector("[data-btn]");
btn.addEventListener('click', ()=>{
    btn.classList.add('animating')
})

let x = document.querySelector('path')
let y = x.getTotalLength()
console.log(y)