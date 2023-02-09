 var emailAddress = "arshad@gmail.com"
    // let userInput = prompt("Please enter your name:");
    console.log(emailAddress);
    
    
    // let emailAddress = "test@example.com";
    // let emailRegex = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    // function isValidEmail(email) {
    //     const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return emailRegex.test(String(email).toLowerCase());
    //   }
    
    
    // if (emailRegex.test(emailAddress)) {
    // console.log("Email address is valid");
    // } else {
    // console.log("Email address is invalid");
    // }
    
    //Test case 2: Check if the email address text field does not accept empty input
    // emailAddress = "";
    
    if (emailAddress === "") {
    console.log("Email address cannot be empty");
    } else {
    if (emailRegex.test(emailAddress)) {
    console.log("Email address is valid");
    } else {
    console.log("Email address is invalid");
    }
    }
    
    //Test case 3: Check if the email address text field does not accept invalid email address
    // emailAddress = "testexample.com";
    
    // if (emailRegex.test(emailAddress)) {
    // console.log("Email address is valid");
    // } else {
    // console.log("Email address is invalid");
    // }
     
    