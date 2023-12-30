//haloo ahmed//

// all inputs
var incorrect= document.getElementById("incorrect")
var bigbox= document.getElementById("bigbox")
var navbar= document.getElementById("nav")
var sayWelcome= document.getElementById("massage")
var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signinEmail");
var signupPassword = document.getElementById("signinPassword");
var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");
var transition = document.querySelector("a.up");
var transitionTwo = document.querySelector("a.in");
var butSignup = document.getElementById("butsignup");
var butLogin = document.getElementById("butLogin");
var spanOne = document.getElementById("spanOne");
var p2 = document.getElementById("p2");
var signUpArray = [];
if (localStorage.getItem('users') == null) {
    signUpArray = []
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'))
}

// clear inbut///////////////////////
function clear() {
 
    signupName.value = "" 
    signupEmail.value = "" 
    signupPassword.value = ""
  
}

function signIn() {
  signupName.classList.remove("d-none");

  butSignup.classList.remove("d-none");
  butLogin.classList.add("d-none");
  spanOne.classList.add("d-none");
  p2.classList.remove("d-none");
  transition.classList.add("d-none");
  transitionTwo.classList.remove("d-none");
  incorrect.innerHTML = '';
  clear()
}

function signUup() {
  signupName.classList.add("d-none");
  butSignup.classList.add("d-none");
  butLogin.classList.remove("d-none");
  spanOne.classList.remove("d-none");
  p2.classList.add("d-none");
  transition.classList.remove("d-none");
  transitionTwo.classList.add("d-none");
  document.getElementById("exist").innerHTML =
    '<span class=" d-none text-success m-3">Success</span>';
   clear()
}

function signUp() {
  // to store all value as object
  if (signupName.value!=""&signupEmail.value!=""&signupPassword.value!="") {
    
    var signUp = {
    
      name: signupName.value,
      email: signupEmail.value,
      password: signupPassword.value,
    };
    if (signUpArray.length == 0) {
      signUpArray.push(signUp);
      localStorage.setItem("users", JSON.stringify(signUpArray));
      document.getElementById("exist").innerHTML =
        '<span class="text-success m-3">Success</span>';
      return true;
    }
    if (isEmailExist() == false) {
      document.getElementById("exist").innerHTML =
        '<span class="text-danger m-3">email already exists</span>';
    } else {
      signUpArray.push(signUp);
      localStorage.setItem("users", JSON.stringify(signUpArray));
      document.getElementById("exist").innerHTML =
        '<span class="text-success m-3">Success</span>';
    }
  }
}

//for check email is exist*/
function isEmailExist() {
  for (var i = 0; i < signUpArray.length; i++) {
    if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
      return false;
    }
  }
}
//////////////////////////////////////////////////////

function login() {
    
  var password = signinPassword.value;
  var email = signinEmail.value;
  for (var i = 0; i < signUpArray.length; i++) {
    if (
      signUpArray[i].email.toLowerCase() == email.toLowerCase() &&
      signUpArray[i].password.toLowerCase() == password.toLowerCase()
    ) {
      localStorage.setItem("sessionUsername", signUpArray[i].name);
      console.log("yes");
      remove() 
      sayHallo()

    } else {
      console.log("no");
      incorrect.innerHTML =
        '<span class="p-2 text-danger">incorrect email or password</span>';
    }
  }

}
// to say welcome in home page
function  sayHallo() {
  
  var username = localStorage.getItem('sessionUsername')

  document.getElementById('username').innerHTML = "Welcome " + username
  navbar.classList.remove("d-none")
  sayWelcome.classList.remove("d-none")
  bigbox.classList.add("d-none")
  
  
}
function remove() {
  navbar.classList.add("d-none")
  sayWelcome.classList.add("d-none")
  bigbox.classList.remove("d-none")
  incorrect.innerHTML = '';
}



