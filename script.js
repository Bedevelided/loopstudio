const openBtn = document.querySelector('.hamburger');
const sideNav  = document.querySelector('.side-nav');
const closeBtn = document.querySelector('.close');
const headerHeight = document.querySelector('.header-nav').getBoundingClientRect().height;

openBtn.addEventListener('click' , function(){
    sideNav.classList.add('showMenu');
    document.body.classList.add('no-scroll');
    
})
closeBtn.addEventListener('click' ,function(){
    sideNav.classList.remove('showMenu');
    document.body.classList.remove('no-scroll');
})

window.addEventListener('scroll' , function(){
    if(window.scrollY > headerHeight){
        document.querySelector('.header-nav').classList.add('fixed');
    }else{
        document.querySelector('.header-nav').classList.remove('fixed');
    }
})
