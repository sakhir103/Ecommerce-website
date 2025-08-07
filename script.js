
let bar = document.getElementById('bar');
let close1 = document.getElementById('close1');
let navbar = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', ()=>{
        navbar.classList.add('active1');
    });
}

if(close1){
    close1.addEventListener('click', ()=>{
        navbar.classList.remove('active1');
    })
}