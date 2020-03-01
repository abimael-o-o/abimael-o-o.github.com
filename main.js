const mobileNav = document.getElementById('nav');
const btn = document.getElementById('btn-toggle');
const navbar = document.getElementById('navbar');
const btnX = document.getElementById('btnX');


if(window.innerWidth <= 600 ){
    console.log('yes');
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
        nav.style.display = 'none';
        navbar.style = 'height: 100px' 


    
}
