//Responsive mobile navbar script start

const mobile_NavBtn = document.querySelector(".mobile-nav-btn");

const nav_Header = 
document.querySelector(".header");

const toggleNav = () => {
  nav_Header.classList.toggle("active");
}

mobile_NavBtn.addEventListener("click",() => toggleNav());

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

// form validation script start 

// access all input field step 1

const form = document.getElementById("form");
const username = document.getElementById("username");

const email = document.getElementById("email");

const phone = document.getElementById("phone");

const password = document.getElementById("password");

const cpassword = document.getElementById("cpassword");

// add Event 2step

form.addEventListener("submit",(event) => {
  event.preventDefault();
  validate();
});

// step 7 defin sendData function

const sendData = (sRate,count) => {
  if(sRate === count){
    alert( "Registration Successfull");
  }
}

// step 6 define successmsg function

const successMsg = () => {
  
  let formCon = document.getElementsByClassName("form-control");
  
  var count = formCon.length-1;
  
  for(var i = 0;i<formCon.length;i++){
    
    if(formCon[i].className === "form-control success"){
      
      var sRate = 0 + i;
      
      sendData(sRate,count);
    }else {
      return false;
    }
  }
}


// proper Email Validation step4

const isEmail = (emailVal) => {
  var atSymbol = emailVal.indexOf("@");
  if(atSymbol < 1) return false;
  
  var dot = emailVal.lastIndexOf(".");
  if(dot <= atSymbol + 2) return false;
  if(dot === emailVal.length-1) return false;
  return true;
}

// define the validate function 3step

const validate = () => {
  
const usernameVal = username.value.trim();

const emailVal = email.value.trim();

const phoneVal = phone.value.trim();

const passwordVal = password.value.trim();

const cpasswordVal = cpassword.value.trim();

//validate Username

if(usernameVal === ""){
  setErrorMsg(username,"Username Cannot Be Blank");
}else if(usernameVal.length <= 2){
  setErrorMsg(username,"Username Min 3 Char");
}else{
  setSuccessMsg(username);
}

//validate Email 

if (emailVal === "") {
  setErrorMsg(email,"Email Can Not Be Blank");
}else if(!isEmail(emailVal)){
  setErrorMsg(email,"Not Valid Email Address");
}else{
  setSuccessMsg(email);
}


//validate phone 

if(phoneVal === ""){
  setErrorMsg(phone,"Phone Number Cannot Be Blank");
}else if(phoneVal <= 10){
  setErrorMsg(phone,"Not a Valid Phone Number");
}else{
  setSuccessMsg(phone);
}

//validate password 

if(passwordVal === ""){
  setErrorMsg(password,"Password Cannot Be Blank");
}else if(passwordVal <= 6){
  setErrorMsg(password,"Password Min 6 char");
}else{
  setSuccessMsg(password);
}

//validate confirm password 

if(cpasswordVal === ""){
  setErrorMsg(cpassword," Confirm Password Cannot Be Blank");
}else if(passwordVal !== cpasswordVal){
  setErrorMsg(cpassword,"Confirm Password Can Not Match ");
}else{
  setSuccessMsg(cpassword);
}

// step 6 create successMsg function 

successMsg();

}

// setErrorMsg function step 5

function setErrorMsg(input,errormsgs) {
 const formControl = input.parentElement;
 const small = formControl.querySelector("small");
 formControl.className ="form-control error";
 small.innerText = errormsgs;
}

// setSuccessMsg function step 5

function setSuccessMsg(input) {
const formControl = input.parentElement;

formControl.className ="form-control success";
}

// form validation script end

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


