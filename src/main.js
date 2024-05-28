import './styles/style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'
import Lenis from 'lenis'
import Swiper from 'swiper/bundle'


const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger);


console.log('Hello live')

const splitWords = document.querySelectorAll('h1')

splitWords.forEach(splitWords => {
    const text = new SplitType(splitWords);
    gsap.from(text.chars, {
        yPercent: 30,
        opacity: 0,
        stagger: 0.02,
        ease: "power4.inout",
        duration: 0.6,
        scrollTrigger: {
            trigger: splitWords,
            start: "top 80%",
        }
    })
});



let homehero = gsap.timeline()

homehero.from('[data-fadeup]', {
    yPercent: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
}, '<')

const sections = document.querySelectorAll('[data-section]')

sections.forEach(section => {

    gsap.from(section, {
        yPercent: 20,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: section,
            start: "top 90%",
        }
    })
})

let swiper = new Swiper('.swiper', {
    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper_slide',
    autoplay: {
        delay: 5000,
    },
    speed: 800,
    
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-navigation-btn.is-next',
        prevEl: '.swiper-navigation-btn.is-prev',
    },
  
    allowTouchMove: false,
   
});


gsap.from('.bar', {
    width: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '.bar',
        start: "top 80%",
    }
})
