//Responsive mobile navbar script start

const mobile_NavBtn = document.querySelector(".mobile-nav-btn");

const nav_Header = 
document.querySelector(".header");

const toggleNav = ()=>{
  nav_Header.classList.toggle("active");
}

mobile_NavBtn.addEventListener("click",()=> toggleNav());

//Responsive mobile navbar script end

//property-filter left sec location sec script start 

// location sec script start 

  let selectFiled = document.getElementById("selectfiled");
  
  let selectText = document.getElementById("selectText");
  
  let options = document.getElementsByClassName("option");
  
  let list = document.getElementById("list");
  
  let arrowIcon = document.getElementById("arrowIcon");
  
  selectFiled.onclick = function(){
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  };
  
 for(option of options){
   option.onclick = function(){
   selectText.innerHTML = this.textContent;
   list.classList.toggle("hide");
   arrowIcon.classList.toggle("rotate");
   };
 };


// property type script section start 

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


// sorting section script start 

  let sort_SelectFiled = document.getElementById("sort-selectfiled");
  
  let sort_List = document.getElementById("sort-list");
  
  let sort_Options = document.getElementsByClassName("sort-option");
  
  let sort_SelectText = document.getElementById("sort-selectText");
  
  let sort_ArrowIcon = document.getElementById("sort-arrowIcon");
  
  sort_SelectFiled.onclick = function(){
    sort_List.classList.toggle("hide");
    sort_ArrowIcon.classList.toggle("rotate");
  }
  
  
  for(sort_Option of sort_Options){
    sort_Option.onclick = function(){
      sort_SelectText.innerHTML=this.textContent;
      sort_List.classList.toggle("hide");
    sort_ArrowIcon.classList.toggle("rotate");
    };
  };
  


// property-filter left sec location sec script end 



// property-filter right sec property status sec script start 

// property status section script start 

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
  

// min bed section script start 

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


//  min bath script section start 

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

// property-filter right sec property status sec script end


// scroll top button section start 

		const topSec = document.querySelector(".banner-sec");
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

