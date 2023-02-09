


let prompt=require("prompt-sync")();

var testEmails = ["test@example.com", "test@test.com", "test@gmail.com","arshad@gmail","ars@gmail.com","arshad.muhammed@naicoits.com","abc@google.gmail.com"];

 prompt("    Menu:    \n1. Custom Input\n2. Test all\n3. Test using array\n4. Exit\n");
const option=prompt("enter option");
switch (option) {
  case '1':
    custom();
    break;
  case '2':
    All();
    break;
  case '3':
    console.log("You selected option 3.\n");
    testEmails.forEach(email => {
      isValidEmail(email); 
      /* should print 
      "Email is valid: test@example.com"
      "Email is valid: test@test.com"
      "Email is valid: test@gmail.com"
      */
  });
    break;
  case '4':
    console.log("Exiting the menu.");
    
    break;
  default:
    console.log("Invalid option selected.");
}


function All(){

  console.log("You selected option 2.");
  console.log("\ntest@example.com\n","Expected- true","\nActual-",isValidEmail("test@example.com")); // true
  console.log("\ntest#example.com\n","Expected- false","\nActual-",isValidEmail("test#example.com")); // false
  console.log("\ntest@sub.example.com\n","Expected- true","\nActual-",isValidEmail("test@sub.example.com")); // true
  console.log("\ntest@sub.sub.example.com\n","Expected- true","\nActual-",isValidEmail("test@sub.sub.example.com")); // true
  console.log("\ntest\n","Expected- false","\nActual-",isValidEmail("test")); // false

}

function custom(){

  console.log("You selected option 1.");
    let emails=prompt("\nEnter your email:\n");
    console.log("entered email address",emails,"is",isValidEmail(emails));
    if(isValidEmail(emails)===false)
    {
      console.log("invalid email format ");
    }
}


function isValidEmail(email) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var isvalid= emailRegex.test(String(email).toLowerCase());
  
  if (isvalid) {
    console.log("Email is valid: " + email);
} else {
    console.log("Email is invalid: " + email);
}
return emailRegex.test(String(email).toLowerCase());
}


