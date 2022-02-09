$('.owl-carousel').owlCarousel({
    loop:true,
    margin:8,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})

const boxFilmes = document.querySelectorAll('.box-filmes')
const carrossel = document.querySelector('.owl-carousel')

carrossel.addEventListener('mousemove', (event)=>{
    
    if(event.target.parentNode.parentNode.style.zIndex == '1') return;

    boxFilmes.forEach(element => {

        if(element.parentNode.parentNode.style.zIndex = '1'){
            element.parentNode.parentNode.style.zIndex = '0' 
            return false; 
        }        
        element.parentNode.parentNode.style.zIndex = '0' 
        event.target.parentNode.parentNode.style.overflow = 'hidden';
        console.log(element.parentNode.parentNode)
    });

    event.target.parentNode.parentNode.style.zIndex = '1'
    event.target.parentNode.parentNode.style.overflow = 'visible';
}) 