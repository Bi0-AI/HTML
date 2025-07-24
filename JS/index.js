// DOME
/* DOM (Document Object Model) is a way for JavaScript to see and change HTML content.
It turns the whole HTML page into a tree of objects, so JS can read, edit, or delete elements like <p>, <div>, etc.*/





/* 

Select/define HTML elements... We can select some of way....
 getElementById
 getElementsByTagName
 getElementsByClass
 enquerySelector
enquerySelectorAll

 */



// getElementById
let getElementbyID =  document.getElementById("id-1");
getElementbyID.innerHTML="Hello I am getElementById.";

// getElementsByTagName, also  need to add index number 
let getElementbyTagname = document.getElementsByTagName("h1")[1];
getElementbyTagname.innerHTML="Hello I am getElementsByTagName.";


// getElementsByClass, also  need to add index number
let defineClass = document.getElementsByClassName("class")[0];
defineClass.innerHTML="Hello I am getElemetsByClassName.";



// querySelector,b I can do all Method using querySelector..
// id
let querySelector = document.querySelector("#id-2");
querySelector.innerHTML = " Hello I am  querySelector, by uses id.";

// class
let querySelector2 = document.querySelector(".class-2");
querySelector2.innerHTML = " Hello I am  querySelector, by uses class."

// tag
let querySelector3 = document.querySelector("h3");
querySelector3.innerHTML = " Hello I am  querySelector, by uses tag."




//  Advanced  querySelector...

let querySelector4 = document.querySelector("a");
querySelector4.innerHTML = "I am QuerySelector"


let querySelector5 = document.querySelector("li a");
querySelector5.innerHTML = "I am Chenged"



let querySelector6 = document.querySelector(".class-3 a");
querySelector6.innerHTML = "I am  also Chenged"

 
// enquerySelectorAll, also add index number..

let querySelector7 = document.querySelectorAll("h2")[0];
querySelector7.innerHTML = "Hey i am querySelectorAll";




// Event Handler & oneclick event...


function function1(){
alert(" Hello dear!  i  am Button One");

}
function function2(){
alert(" Hello dear!  i am  Button two");

}

// Another button style-1...
let querySelector8 = document.querySelector("#id-3"); // select HTML element
function function3(){
querySelector8.innerHTML = " you have cliked button One!!"

}

function function4(){ // for button two
querySelector8.innerHTML = " you have cliked button Two!!"

}


// Click for change image,  Another button, style-2.....
let photo = ["images/1.jpeg", "images/2.jpeg", "images/3.jpeg"];
let querySelector9 = document.querySelector("#id-5");
querySelector9.classList.add("class-4"); // add CSS style...

function function5(){
  querySelector9.src="images/1.jpeg";
}


querySelector9.classList.add("class-4");  // add CSS style...
function function6(){
querySelector9.src="images/2.jpeg";
  
}






// CRUD html element: C=Create, R=Read, U=Update, D=Delete...

// KAJ KORTASENAAA
let querySelector10 = document.querySelector("#id-6");
querySelector10.innerHTML = "Visit Site";
querySelector10.style.color = "red";
querySelector10.style.fontSize = "30px";
querySelector10.style.textDecoration ="none";
querySelector10.href = "https://google.com";




//  C=Create element..
let creaElement = document.createElement("h1"); // for creat element
let texT = document.createTextNode("Another heading!"); //  for element Text...
// creaElement.appendChild(texT); // add text 
let findDiv = document.getElementById("id-7"); // need to find HTML element
findDiv.appendChild(texT); // Add text with main HTML element


// D=Delete element..
let defineELement = document.getElementById("id-8"); // First define main Html Element

//  and then define which element i need to delet
let removeElemment = document.getElementById("id-9");

defineELement.removeChild(removeElemment); //  and then delete...






// Another, creat element but I  want to add any place's like top side... 

let creatElem = document.createElement("h1"); // creat element
let textElem = document.createTextNode("i am heading number three") // creat text

// find  main html element .. 
let findElem = document.getElementById("id-10");

findElem.appendChild(textElem) //  and append child...


//  Now i want to add after heading-1, so i need to find this heading, (which is i'll add before...)
let finDelem = document.getElementById("id-11");
// and use insertBefore...
 findElem.insertBefore(textElem, finDelem  );














// Image  Slider project.......

// Save all image paths in a list (array)
let photos = ["images/1.jpeg", "images/2.jpeg", "images/3.jpeg"];


let imageTag = document.querySelector("img"); // Find  HTML element where is  store image.....

let count = 0;// Start from the first image (index 0)


function next(){ // When "Next" button is clicked, this function runs
    count++; // Go to the next image (increase count by 1)

    // If count is bigger than total images, go back to first image
    if(count >= photos.length){
        count = 0;
    }
    // Change the image on the screen
    imageTag.src = photos[count];
}

// When "Previous" button is clicked, this function runs...
function prev(){
    count--; // Go to the previous image (decrease count by 1)

    // If count is less than 0, go to the last image
    if(count < 0){
        count = photos.length - 1;
    }

    // Change the image on the screen
    imageTag.src = photos[count];
}












// Change CSS Dynamicslly by use JS....

function addasatyle(){
  // frist of all , i need to find main HTML  element, and then i can everythink by use JS.....
  var myLet= document.querySelector("#peraId");
  // i called Directly CSS style here...........
  myLet.classList.add("pera-style");

  // myLet.style.color = "red";
  // myLet.style.fontSize= "3rem";
  // myLet.style.fontWeight= "bold";
  // myLet.style.fontStyle= "italic";

}

function removeStyle(){
  
  var myLet= document.querySelector("#peraId"); // define html main element
  
  myLet.classList.remove("pera-style");  // this is for remove style....
}  















// Event Listemer...

let variAble= document.querySelector("#design-46"); // for select HTML element.
variAble.addEventListener("click",styl1); // what kind of style ?, i can add any style. and also input function without bracket...


function styl1(){ // for alert, or i can write any messege...
  alert("Hello!! You clicked");
} 

 




// another....
let querySelector11 = document.querySelector("#design-47"); // define main HTML element...
querySelector11.addEventListener("mouseover", desigN1); //  Set Type of  Events and how to works.......

//function for style events....
function desigN1(){ // type of events, and how to works....
  querySelector11.classList.add("my-Style");  //  Add style from CSS... 
}

//  for mouse out
querySelector11.addEventListener("mouseout",desigN2);  //  Set Type of  Events and how to works.......
//function for style events....
function desigN2(){
  querySelector11.classList.remove("my-Style");
}









// Event listener with Multiple event..

for(let i=0; i<3;i++){ //we know total index 2, 

  // querySelectorAll, because Many buttons togather works..
  document.querySelectorAll(".myButton")[i].addEventListener("click", function(){

  let text = this.innerHTML; // for store innerHTML 
  document.querySelector("#hed-1").innerHTML = text + " is Clicked"; // work innerHTML, and change..
});

}











// DOM Events......
// 1. Event Object
// Event types: change, submit, load, unload, open, play, canplay, pause, playing, progress, ended, resize, scroll, toggle etc.

// Properties: type, target, preventDefault()


// 2. MouseEvent Object
// KeyboardEvent Object

// FocusEvent Object

// ClipboardEvent Object

// DragEvent Object






// Change Event.......

// 1.  when user changes something and leaves the field, onchange  will runs...
// 2.  works for: text,number, password, email, color, radio, chekbox,search,date, week, month, url, input, select, textarea, etc.
// 3. it helps to catch new value after user changes something

const oneEvent = document.querySelector("input[name =name]"); // input[name = name] that's mean for correct attribute..  
oneEvent.addEventListener("change", functn);

function functn(e){
  // console.log(e)  // for see all events..
//   console.log(e.type)  // for see type..
// console.log(e.target)  // for see which which kind of attribute HTML has..

// console.log(e.target.className)  // see all class ....
// console.log(e.target.classId)  // see all Id... 

// console.log(e.target.value);  // For see value...

}






// another events

// const onEvent= document.querySelectorAll("input[name=program]");

// //my (input) is Multiple, so i need to use multiple listaner....  if i use multiple listaner then, ineed to convert NodeList to Arry....

// Array.from(onEvent).map((input) => { // 

//   input.addEventListener("change",programHandler)
// });


// function programHandler(e) {
//   if (e.target.checked){

//  //  console.log("cheked"); 
//      console.log(e.target.value);
 
//   } 

// }




// get all inputs with name="program"
const allInputs = document.querySelectorAll("input[name=program]");

// convert NodeList to Array and loop through each input
Array.from(allInputs).map((input) => {

  // for each input, add a "change" event listener
  input.addEventListener("change", function(e) {

    // if checkbox is checked
    if (e.target.checked) {
      console.log("selected:", e.target.value); // show selected value in console
    } else {
      console.log("unselected:", e.target.value); // show unselected value in console
    }

  });

});



// select...
let selectoR  = document.querySelector("#department"); // Define
selectoR.addEventListener("change", designFunction); // add events...

function designFunction(e){

 console.log("selected:", e.target.value); // for print value...
 

}














// Submit Events: submit event means: when user clicks submit button in a form.......


let form = document.querySelector("#form-1"); // Define HTML main form


let name = form.querySelector("div #name");  // For name 
let email = form.querySelector("div #email");  //  For email
let password = form.querySelector("div #password");  //  For password
let radio1 = form.querySelector( "div #radio-1"); //  For radio
let radio2 = form.querySelector( "div #radio-2");
let radio3 = form.querySelector( "div #radio-3");


form.addEventListener("submit", formHandaler); // add listanner..

function  formHandaler(e){  // function..
  e.preventDefault(); // for use valu show in system...


 // For output....
 let userInfo= {
  name:name.value,
  email:email.value,
  password:password.value,
  radio1:radio1.value,
 }
 // for empty input label.....
 console.log(userInfo);
 name.value="";
 email.value ="";
 password.value ="";
}
















// Form Validation.........
function validaTionform(){

    // Get the input element fromHTML to JS  using there  ID.....
    let findName = document.getElementById("name1");
    let findEmail = document.getElementById("email1");
    let findPassword = document.getElementById("password1");
    let findError = document.getElementById("error");

    let errorList = [];


    // Check if the name field is empty after removing spaces.  trim() use for count space and remove..
    if(findName.value.trim() === ""){
        // Add this error message to the  errorlist
        errorList.push("Name can't be empty!");
    }


    // Check if the email-field is  empty then...
    if(findEmail.value.trim() === ""){

        // Add this error message to the  errorlist
        errorList.push("Email can't be empty!"); 
    } 


    // check if it has  contains '@'...
    if (!findEmail.value.includes("@")){

        // If '@' is not in the email, then it's not valid.....
        errorList.push("Email must include '@' ");
    }


    // Check if the password- field is empty then....
    if(findPassword.value.trim() === ""){

       // Add this error message to the  errorlist..
        errorList.push("Password can't be empty!");
    } 



    //Check if password length is less than 6 then....
    if(findPassword.value.length < 6){

        // Push this error message to the  errorlist..
        errorList.push("Password must be at least 6 characters!");
    }


    // If there is any error in the list
    if (errorList.length > 0){

        // Create a string to put all error messages..
        let allErrors = "";
        for(let i = 0; i < errorList.length; i++){
            // Add each error with a fullstop,and new line...
            allErrors += "• " + errorList[i] + "<br>";
        }


        // Show all error messages inside the errorList..
        findError.innerHTML = allErrors;

        // Stop the form from submitting
        return false;
    }




    // If there are no errors, clear the error message box...
    findError.innerHTML = "";

    // Show a message that is successfully submitted...
    alert("Form successfully submitted!");

    // Allow the form to submit...
    return true;
};














// API to JSON........


// Webstoage API.........
// Web Storage API allow to store data, delete data, read data,  in browser  etc.....
// localStorage: store data permanently in the browser until manually delete....
// sessionStorage: store data only for the current browser,  clears all when the tab is closed.


// localStorage
localStorage.setItem("userName","Ahamad Ullah");
localStorage.setItem("userPassword","123456");
// read data
let userName = localStorage.getItem("userName");
let userPassword = localStorage.getItem("userPassword");
console.log(userName, userPassword);


// update data..
localStorage.setItem("userName","Habib Ullah");
localStorage.setItem("userPassword","123456");


// Remove item..
localStorage.removeItem("userName")
localStorage.removeItem("userPassword")



// if i use Arry...
//setItem 
let countries = ["Bangladesh","India","Pakistan", "China"];
localStorage.setItem("countries", JSON.stringify(countries));

// getItem(key)
let countriseList = JSON.parse(localStorage.getItem("countries"));
console.log(countriseList);

// For all local Sorage clear..
localStorage.clear()








// SessionStorage....
// setItem
sessionStorage.setItem("userName","Halima Khatun");
sessionStorage.setItem("userPassword","27427534");

// getItem.
let getuserName = sessionStorage.getItem("userName");
console.log(getuserName);

let getuserPassword = sessionStorage.getItem("userPassword");
console.log(getuserPassword);

// removeItem
sessionStorage.removeItem("userPassword");
// clear all
sessionStorage.clear();



// if we store Object...
let user = {id : "20243120033", name: "Modullah", country: "BD"}
sessionStorage.setItem("usertInfo", JSON.stringify(user));

// get With console...
let getParse = JSON.parse(sessionStorage.getItem("usertInfo"));
console.log(getParse);








// cookie:  we need to define Expiery date....

document.cookie = "name = Ahamad expires = Tue, 22 Jul 2025 Tue 7:31:00 pm CST";

// get by console
console.log(document.cookie);














