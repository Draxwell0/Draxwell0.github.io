    // VARIÁVEIS

//PAGINA INICIAL
let btnMobile = document.querySelector('#btn-header');
let perfil = document.querySelector('#perfil');
let nome = document.querySelector('#nome');

//CONTATE
let btnEmail = document.querySelector('#btn-email');
let email = document.querySelector('#inputEmail');

//SOBRE MIM 
let slider = document.querySelectorAll('.slider');

//API
const url = 'https://api.github.com/';
const user = 'users/Draxwell0';

//SKILLS
let skills = document.querySelectorAll('.skill-image');
let coloredSkills = document.querySelectorAll('.colorido');
let containerSkills = document.querySelectorAll('.grid-item');


    //TYPE WRITER

typeWriter();

function typeWriter(){

    const txt = nome.innerHTML.split('');
    nome.innerHTML = '';

    txt.forEach((char, i) =>{
        setTimeout(()=>{
            nome.innerHTML += char;
        }, 75 * i)
    })

}

    //ANIMAÇÃO DE IMAGENS EM SKILLS

containerSkills.forEach((elm, i) =>{

    elm.addEventListener('mouseover', (e)=>{
        skills[i].classList.toggle('invisivel');
        coloredSkills[i].classList.toggle('active');
        coloredSkills[i].classList.toggle('invisivel');
    });
    
    elm.addEventListener('mouseout', (e)=>{
        skills[i].classList.toggle('invisivel')
        coloredSkills[i].classList.toggle('active')
        coloredSkills[i].classList.toggle('invisivel')
    });

})


    //EVENT LISTENER MENU HAMBURGUER

btnMobile.addEventListener('click', ()=>{
    let nav = document.querySelector('#nav');
    nav.classList.toggle('active');
})


    //GITHUB API PARA PERFIL

fetch(url+user).then(dataJson =>{

    return dataJson.json();

}).then(github =>{

    perfil.src = github.avatar_url;
 
})


    //ANIMAÇÕES CONTATE-ME

btnEmail.addEventListener('click', contatar);
function contatar(){

    let contate = document.querySelector('#contate');
    let contContate = document.querySelector('#container-contate');
    let divTxt = document.querySelector('#contate-form-div-txt');
    let divMail = document.querySelector('#contate-form-div-email');
    
    btnEmail.removeEventListener('click', contatar);
    btnEmail.innerHTML = '';

    btnEmail.classList.add('mudarElm');
    contate.classList.add('cont-trans-s');
    contContate.classList.add('cont-trans-c'); 

//ANIMAÇÃO DESCER SCROLL

    setTimeout(()=>{

        if(window.pageYOffset > 1800){
            window.scroll(0, document.body.offsetHeight + 100);
        }

        setTimeout(()=>{
            if(window.pageYOffset > 1800){
                window.scroll(0, document.body.offsetHeight + 100);
            }
        }, 600)

    }, 600)
        
   
    setTimeout(() => {      
        setTimeout(() => {
            
            btnEmail.setAttribute('style', 'display: none')
            divMail.setAttribute('style', 'display: block')
            
            email.classList.add('translacaoEmail')
            divTxt.classList.add('translacaoTxt');
            
        }, 100);       
        divTxt.setAttribute('style', 'display: block')        
    }, 1500);  
}


    //ANIMAÇÃO SCROLL REVEAL

const configs = {
    threshold: 0,
    rootMargin: "0px 0px -70px 0px"
}

const scrollReveal = new IntersectionObserver(function(item){

    item.forEach(elm=>{
        if(!elm.isIntersecting){
            elm.target.classList.remove('appear')
            return;
        }else{
            elm.target.classList.add('appear');
        }
    })
    
}, configs)

slider.forEach(slide=>{
    scrollReveal.observe(slide);
})