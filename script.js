
    




gsap.from(".page1 h1",{
  x:-90,
  duration:3,
  opacity:0,
  
})
gsap.from(".page1 h2",{
 x:90,
 duration:3,
 opacity:0,
 
})

var tl=gsap.timeline()

tl.from("#nav h4, #nav img",{
   y:-100,
   duration:0.6,
   delay:1,
   stagger:0.2,

})








'use strict';

const accordion = document.querySelectorAll('.accordion h3');
let mainParent;
let height;
let answer;
accordion.forEach(item => {
    item.addEventListener('click', () => {
        height = item.parentElement.nextElementSibling.firstElementChild.offsetHeight;
        answer = item.parentElement.nextElementSibling;
        mainParent = item.parentElement.parentElement;
        if (mainParent.classList.contains('active')) {
            mainParent.classList.remove('active');
            answer.style.height = `0px`;
        } else { 
            mainParent.classList.add('active');
            answer.style.height = `${height}px`;
        }
    });
});

























