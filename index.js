   const welcome = document.querySelector("#newspan");
   const btnNew = document.querySelector("#newbtn");
 

  btnNew.addEventListener("click", function(){
    welcome.replaceWith("Welcome!");
   });


const username = document.querySelector(".username");
const password = document.querySelector(".username2");
const btn = document.querySelector(".sign");


btn.addEventListener("click", function () {
    const usernameValue = username.value;
    const passwordValue = password.value;

  if (usernameValue == "appclickict" && passwordValue == "appclick1234") {
      alert("User Login");
  } else {
      alert("Wrong Credentials");
  }
 });





//  const btn = document.querySelector("button");
//   const paragraph = document.querySelector("p");

// btn.addEventListener("click", function(){
//   paragraph.remove();
// const newElement = document.createElement("h1");
//  newElement.textContent = "Mr. Mike won't kill us with Javascript";
//  document.body.appendChild(newElement);
//  });