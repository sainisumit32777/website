const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click',() =>{
        
        if(nav.style.animation){
            nav.style.animation = '';
        }
        else{
            nav.style.animation = 'burgerMenuFade 0.5s ease-in';
        }
        nav.classList.toggle('nav-active');
        navLinks.forEach((link)=>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = 'navLinkFade 0.6s ease forwards 0.2s';
            }
        });
        burger.classList.toggle('toggle');
    });
}

const app = () =>{
    navSlide();
}
app();