// Responsive mobile navbar script start
	
const mobile_NavBtn = document.querySelector(".mobile-nav-btn");

const nav_Header = 
document.querySelector(".header");

const toggleNav = ()=>{
  nav_Header.classList.toggle("active");
}

mobile_NavBtn.addEventListener("click",()=> toggleNav());

// Responsive mobile navbar script end


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
