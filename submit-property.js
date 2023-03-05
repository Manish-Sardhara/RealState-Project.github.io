
// Responsive navbar script start

const mobile_NavBtn = document.querySelector(".mobile-nav-btn");

const nav_Header = 
document.querySelector(".header");

const toggleNav = ()=>{
  nav_Header.classList.toggle("active");
}

mobile_NavBtn.addEventListener("click",()=> toggleNav());

// Responsive navbar script end

// submit property section location script start

  let loc_SelectFiled = document.getElementById("loc-selectfiled");
  
  let loc_List = document.getElementById("loc-list");
  
  let loc_Options = document.getElementsByClassName("loc-option");
  
  let loc_SelectText = document.getElementById("loc-selectText");
  
  
  let loc_ArrowIcon = document.getElementById("loc-arrowIcon");
  
  
  loc_SelectFiled.onclick = function(){
    loc_List.classList.toggle("hide");
    loc_ArrowIcon.classList.toggle("rotate");
  };
  
  for(loc_Option of loc_Options){
    loc_Option.onclick = function(){
    loc_SelectText.innerHTML = this.textContent;
    loc_List.classList.toggle("hide");
    loc_ArrowIcon.classList.toggle("rotate");
    };
  };
  
// submit property section location script end


//submit property status section start 


  let pro_Sta_SelectFiled = document.getElementById("pro-sta-selectfiled");
  
  let pro_Sta_List = document.getElementById("pro-sta-list");
  
  let pro_Sta_Options = document.getElementsByClassName("pro-sta-option");
  
  let pro_Sta_SelectText = document.getElementById("pro-sta-selectText");
  
  let pro_Sta_ArrowIcon = document.getElementById("pro-sta-arrowIcon");
  
  
  pro_Sta_SelectFiled.onclick = function(){
    pro_Sta_List.classList.toggle("hide");
    pro_Sta_ArrowIcon.classList.toggle("rotate");
  };
  
  
  for(pro_Sta_Option of pro_Sta_Options){
    pro_Sta_Option.onclick = function(){
      pro_Sta_SelectText.innerHTML=this.textContent;
      pro_Sta_List.classList.toggle("hide");
    pro_Sta_ArrowIcon.classList.toggle("rotate");
    };
  };
  
 //submit property status section end 



// submit property type section start

  let pro_Ty_Selectfiled = document.getElementById("pro-ty-selectfiled");
  
  let pro_Ty_SelectText = document.getElementById("pro-ty-selectText");
  
  let pro_Ty_List = document.getElementById("pro-ty-list");
  
  let pro_Ty_Options = document.getElementsByClassName("pro-ty-option");
  
  let pro_Ty_ArrowIcon = document.getElementById("pro-ty-arrowIcon");
  
  
  pro_Ty_Selectfiled.onclick = function(){
    pro_Ty_List.classList.toggle("hide");
    pro_Ty_ArrowIcon.classList.toggle("rotate");
  };
  
  for(pro_Ty_Option of pro_Ty_Options){
    pro_Ty_Option.onclick = function(){
      pro_Ty_SelectText.innerHTML = this.textContent;
      pro_Ty_List.classList.toggle("hide");
     pro_Ty_ArrowIcon.classList.toggle("rotate");
    };
  };

// submit property type section end


// submit property bed and bath and  sec script start 

// min-bed section script start 

  let bed_Sec_SelectFiled = document.getElementById("bed-sec-selectfiled");
  
  let bed_Sec_List = document.getElementById("bed-sec-list");
  
  let bed_Sec_Options = document.getElementsByClassName("bed-sec-option");
  
  let bed_Sec_SelectText = document.getElementById("bed-sec-selectText");
  
  let bed_Sec_ArrowIcon = document.getElementById("bed-sec-arrowIcon");
  
  
  bed_Sec_SelectFiled.onclick = function(){
    bed_Sec_List.classList.toggle("hide");
    bed_Sec_ArrowIcon.classList.toggle("rotate");
  };
  
  
  for(bed_Sec_Option of bed_Sec_Options){
    bed_Sec_Option.onclick = function(){
      bed_Sec_SelectText.innerHTML=this.textContent;
      bed_Sec_List.classList.toggle("hide");
    bed_Sec_ArrowIcon.classList.toggle("rotate");
    };
  };

//min-bed section script end 

//min-bath section script start -->

  let bath_Sec_SelectFiled = document.getElementById("bath-sec-selectfiled");
  
  let bath_Sec_List = document.getElementById("bath-sec-list");
  
  let bath_Sec_Options = document.getElementsByClassName("bath-sec-option");
  
  let bath_Sec_SelectText = document.getElementById("bath-sec-selectText");
  
  let bath_Sec_ArrowIcon = document.getElementById("bath-sec-arrowIcon");
  
  
  bath_Sec_SelectFiled.onclick = function(){
    bath_Sec_List.classList.toggle("hide");
    bath_Sec_ArrowIcon.classList.toggle("rotate");
  };
  
  
  for(bath_Sec_Option of bath_Sec_Options){
    
    bath_Sec_Option.onclick = function(){
      bath_Sec_SelectText.innerHTML=this.textContent;
      bath_Sec_List.classList.toggle("hide");
    bath_Sec_ArrowIcon.classList.toggle("rotate");
    };
  };

//min-bath section script end -->

// submit property bed and bath and  sec script end


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

 