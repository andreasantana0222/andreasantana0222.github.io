let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let myFirstName = id("myFirstName"),
  email = id("myEmail"),
  myLastName = id("myLastName"),
  myTextArea=id("myTextArea"),
  form = id("myForm"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");
  thankyou=classes("thankyou");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(myFirstName, 0, "First Name cannot be blank");
  engine(email, 3, "Email cannot be blank");
  engine(myLastName, 1, "Last Name cannot be blank");
  engine(myTextArea, 2, "Text area cannot be blank");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";

    // thank you message
    thankyou[serial].innerHTML="<div class='text-body'>  Thank you <strong>" + myFirstName.value + " " + myLastName.value +
                                " </strong> for taking your time to share your message. <br> " +
                                " I will get back to you via email at: <strong>" +
                                email.value + " </strong> <br> In the meanwhile, feel free to ckeck my <a href='index.html' >website </a>.</div>";
  form.hidden=true; //form.style['display'] = 'none';
  
                              }
};