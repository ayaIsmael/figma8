$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav:true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });
  });
  
  let navbar=document.querySelector('.navbar');
  let sections=document.querySelectorAll('section');
  let links=document.querySelectorAll('.nav-link');
  window.onscroll=function(){
    if(window.scrollY != 0){
        navbar.classList.add('shrink');
    }else{
        navbar.classList.remove('shrink')
    }

    sections.forEach(section => {
        if(window.scrollY >= section.offsetTop - 100 && window.scrollY < section.offsetTop + section.scrollHeight -100){
            links.forEach(link => {link.classList.remove('active');});
            let link=document.getElementById(section.dataset.link);
            link.classList.add('active');
        }
    });

    
  }
