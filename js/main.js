let searchForm = document.querySelector('.header .search-form');
document.querySelector('#search-btn').onclick =()=>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}
window.onscroll=()=>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}
let slides = document.querySelectorAll('.home .slide')
let i = 0;
function next(){
    slides[i].classList.remove('active');
    i = (i+1) % slides.length;
    slides[i].classList.add('active')
}
function prev(){
    slides[i].classList.remove('active');
    i = (i-1 + slides.length)%slides.length;
    slides[i].classList.add('active')
}