document.addEventListener("DOMContentLoaded", () => {

    /*=========================
        ANIMATION AU SCROLL
    =========================*/

    const elements = document.querySelectorAll(
        ".title-small,.title-big,.intro-text,.script-title,.photo-wrapper,.info-item,.section-title,.section-text,footer"
    );

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    });

    elements.forEach(el=>observer.observe(el));



    /*=========================
          SLIDER
    =========================*/

    const slides=document.querySelectorAll(".slide");

    const badge=document.querySelector(".photo-badge");

    const couple=document.querySelector(".couple-photo");

    let current=0;

    function changeSlide(){

        slides[current].classList.remove("active");

        current++;

        if(current>=slides.length){

            current=0;

        }

        slides[current].classList.add("active");

        if(current===1){

            badge.classList.add("show");

            couple.style.opacity="0";

        }

        else{

            badge.classList.remove("show");

            couple.style.opacity="1";

        }

    }

    setInterval(changeSlide,5000);

});