const first=document.querySelector("#sec1");
const firstEL=document.querySelector(".cancel-popup");

const second=document.querySelector("#sec2");
const secondEL=document.querySelector(".watch-popup");

const third=document.querySelector("#sec3");
const thirdEL=document.querySelector(".pick-popup");

const footer=document.querySelector(".fourth");

secondEL.setAttribute("id","show");
thirdEL.setAttribute("id","show");

first.addEventListener("click",(e)=>{
    secondEL.setAttribute("id","show");
    thirdEL.setAttribute("id","show");
    firstEL.removeAttribute("id");
    first.classList.add("active");
    second.classList.remove("active");
    third.classList.remove("active");
    footer.setAttribute("style","padding-top:0");
});

second.addEventListener("click",(e)=>{
    firstEL.setAttribute("id","show");
    thirdEL.setAttribute("id","show");
    secondEL.removeAttribute("id");
    second.classList.add("active");
    third.classList.remove("active");
    first.classList.remove("active");
});

third.addEventListener("click",(e)=>{
    firstEL.setAttribute("id","show");
    secondEL.setAttribute("id","show");
    thirdEL.removeAttribute("id");
    third.classList.add("active");
    first.classList.remove("active");
    second.classList.remove("active");
});

window.addEventListener('resize',()=>{
    if(window.innerWidth<900 && thirdEL.getAttribute("id")===null){
        footer.setAttribute("style","padding-top:350px");
    }else{
        footer.setAttribute("style","padding-top:0px");
    }
});