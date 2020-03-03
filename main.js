const nav = document.getElementById('nav');
const btn = document.getElementById('btn-toggle');
const navbar = document.getElementById('navbar');
const btnX = document.getElementById('btnX');


if(window.innerWidth <= 600 ){
    btn.onclick  = () => {
        nav.style.display = 'block';
        navbar.style = 'height: 100%'
    }
    btnX.onclick = () => {
        nav.style.display = 'none';
        navbar.style = 'height: 100px'
    }
    window.onclick = (e) => {
        if(e.target == nav){
            nav.style.display = 'none';
        }
    }
};

let cursor = true;
let speed = 500;

setInterval(() => {
   if(cursor) {
     document.getElementById('cursor').style.opacity = 0;
     cursor = false;
   }else {
     document.getElementById('cursor').style.opacity = 1;
     cursor = true;
   }
}, speed);
