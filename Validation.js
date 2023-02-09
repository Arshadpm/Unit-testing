
const chalk = require('chalk'); //to make colorful text
const errorc=require('./Errorcode');

// exports.isValidEmail = function (email) {

//     console.log(chalk.gray.italic("\nentering into validate function() ......\n")); 
//     const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     var isvalid= emailRegex.test(String(email).toLowerCase());
    
//     if (isvalid) {
//       console.log(chalk.bold.green("Email is valid: " + email));
//   } else {
//       console.log(chalk.bold.red("Email is invalid: " + email));
//       // console.log("Invalid Email format");

//       errorc.printErrorMessage(1000); // Output: Error: invalid input format
      
//   }
//   console.log(chalk.gray.italic("\nreturning value from validate function() ......\n"));
//   return isvalid;
//   }
  
exports.isValidEmail = function (email) {

//   // Split the email address on the "@" character
if(email==="")
{
  console.log('\u001b[0m'+'validateEmail: Status for '+email,'is: ');
  console.log("Status is 1001");
        errorc.printErrorMessage(1001);
        return 1001;
}
else{


  const parts = email.split("@");

  // Check if there are exactly 2 parts
  if (parts.length !== 2) {
    console.log(parts.length);
    console.log(chalk.red("\nInValid email address"));
    console.log("Status is 1002");
    errorc.printErrorMessage(1002);
    //  console.log(chalk.red("Invalid email address"));
    return 204;
  }
else{
  // Get the username and domain parts
  var username =parts[0];
   
  var domain =parts[1];


  // Check if the username part contains only valid characters
  const usernameRegex = /^[a-zA-Z0-9.+-]+$/;
  if (!usernameRegex.test(username)) {
    // console.log(chalk.red(1003));
    console.log(chalk.red("\nInValid email address"));
    console.log("Status is 1003");
    errorc.printErrorMessage(1003);
    // console.log(chalk.red("Invalid email address"));
    return 204;
  }

  // Split the domain part on the "." character
  const domainParts = domain.split(".");

  console.log(domainParts);





  // // Check if the TLD domain present
  // if ((domainParts[1]=='')||(domainParts[0]=='')) {
  //   //  console.log(chalk.red(1004));
  //   console.log(chalk.red("\nInValid email address"));
  //   console.log("Status is 1008");
  //    errorc.printErrorMessage(1008);
  //   // console.log(chalk.red("Invalid email address"));
  //   return 204;
  // }

  // // Check if there are at least 2 parts
  // if (domainParts.length < 2) {
  //   //  console.log(chalk.red(1004));
  //   console.log(chalk.red("\nInValid email address"));
  //   console.log("Status is 1008");
  //    errorc.printErrorMessage(1008);
  //   // console.log(chalk.red("Invalid email address"));
  //   return 204;
  // }

  // Get the domain name and top-level domain
  const domainName = domainParts[0];
  const topLevelDomain = domainParts[domainParts.length - 1];


if(domainName&&topLevelDomain)
{



  // Check if the domain name contains only letters and numbers
  const domainNameRegex = /^[a-zA-Z0-9]+$/;
  if (!domainNameRegex.test(domainName)) {
    // console.log(chalk.red(1005));
    console.log(chalk.red("\nInValid email address"));
    console.log("Status is 1005");
    errorc.printErrorMessage(1005);
    
    // console.log(chalk.red("Invalid email address"));
    return 204;
  }

  // Check if the top-level domain consists of 2-6 letters
  const topLevelDomainRegex = /^[a-zA-Z]{2,6}$/;
  if (!topLevelDomainRegex.test(topLevelDomain)) {
    // console.log(chalk.red(1006));
    console.log(chalk.red("\nInValid email address"));
    console.log("Status is 1006");
    errorc.printErrorMessage(1006);
    
    // console.log(chalk.red("Invalid email address"));
    return 204;
  }

}
else{
  return 204;
}
}


 // Split the email address into two parts
//  const parts = email.split("@");

//  console.log("hi",parts);
//  const local=parts[0];
//  const domain=parts[1];

//  console.log("hii",local);
//  console.log("hii",domain);

//  const len=domain.length;

//  // Check the local part
//  if (local.length === 0) return "Local part is empty";
//  if (local.length > 64) return "Local part is too long (maximum is 64 characters)";
//  if (!/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+$/.test(local)) return "Local part contains invalid characters";
//  if (local[0] === "." || local[local.length - 1] === ".") return "Local part starts or ends with a dot";
//  if (local.indexOf("..") !== -1) return "Local part contains two dots consecutively";

//  // Check the domain part
// //  if (domain.length === 0) return "Domain part is empty";
//  if (typeof domain !== "undefined" && len === 0) 
//  {
//   return "Domain part is empty";
//  }
//  if (len > 255) 
//  {
//   return "Domain part is too long (maximum is 255 characters)";
//  }

//  const domainParts = domain.split(".");
//  console.log(domainParts);
 
//  for (const part of domainParts) 
//  {
//    if (part.length === 0)
//     {
//       return "Domain part contains an empty label";
//     }
//    if (part.length > 63)
//    {
//      return "A label in the domain part is too long (maximum is 63 characters)";
//    }
//    if (part[0] === "-" || part[part.length - 1] === "-") 
//    {
//     return "A label in the domain part starts or ends with a hyphen";
//    }
//  }

//  // Check the TLD
//  const tld = domainParts[domainParts.length - 1];
//  if (!/^[a-z]+$/.test(tld)) return "TLD contains invalid characters";

//  return true;

console.log("Status is 200");
errorc.printErrorMessage(200);

console.log(chalk.cyan("\nReason:\nThe prefix appears to the left of the @ symbol\nThe domain appears to the right of the @ symbol\nProper syntax: \nThe email address have the correct format, including an @ symbol and a domain name"));

return 200;
}
};