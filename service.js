//Responsive mobile navbar script start

const mobile_NavBtn = document.querySelector(".mobile-nav-btn");

const nav_Header = 
document.querySelector(".header");

const toggleNav = ()=>{
  nav_Header.classList.toggle("active");
}

mobile_NavBtn.addEventListener("click",()=> toggleNav());

//Responsive mobile navbar script end

//testimonials script start

const slider = document.querySelector(".slider");

const craousel = document.querySelector(".craousel");

const prevBtn = document.querySelector(".prev");

const nextBtn = document.querySelector(".next");

let direction;

prevBtn.addEventListener("click",function(){
  
  if(direction === -1){
    
   slider.appendChild(slider.firstElementChild);
     direction = 1;
  };
  
craousel.style.justifyContent = "flex-end";
slider.style.transform ="translate(20%)";
});


nextBtn.addEventListener("click",function(){
direction = -1;
craousel.style.justifyContent = "flex-start";
slider.style.transform ="translate(-20%)";
});


slider.addEventListener("transitionend", function(){
  
  if(direction === -1){
  slider.appendChild(slider.firstElementChild);
    
  }else if(direction === 1){
    slider.prepend(slider.lastElementChild);
  };
  
  slider.style.transition = "none";
  
  slider.style.transform = "translate(0)";
  
  setTimeout(function(){
   slider.style.transition = "all 0.5s";
  });
  
});


//testimonials script end 

// scroll top button section start 

		const topSec = document.querySelector(".banner-sec-fullwidth");
const footerElem = document.querySelector(".footer-sec-fullwidth");

  const scrollElement = document.createElement("div");
  
  scrollElement.classList.add("scrollTop-Style");
  
  scrollElement.innerHTML = '<ion-icon name="arrow-up-outline" class="scroll-Top"></ion-icon>';
  
 footerElem.after(scrollElement);
 
 const scrollTop = () => {
   topSec.scrollIntoView({behavior:"smooth"});
 }
 
 scrollElement.addEventListener("click",scrollTop);

// scroll top button section end 
