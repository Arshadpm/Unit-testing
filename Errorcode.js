


// Define an object that maps error codes to error messages
var errorMessages = {
    1000: 'Error: invalid input format',
    1001: 'Error: No input',
    1002: 'Reason:  Email address should contain exactly one @ symbol',
    1003:'Reason: Username should contain only letters, numbers, periods, plus signs, and hyphens',
    1004:'Reason: Domain part should contain at least one period',
    1005:'Reason: Domain name should contain only letters and numbers',
    1006:'Reason: Top-level domain should consist of 2-6 letters',
    1007:'Valid email address',
    1008:'Reason: email address contain domain name and TLD domain',
    1009:'Reason: email address should contain domain name ',
    1010:'Reason: email address should contain  TLD domain',
    200: 'OK',
    201: 'Created',
    204: 'No Content',
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    500: 'Internal Server Error'
  };
  

  // Function to print error messages
  exports.printErrorMessage=function (errorCode) {
    var message = errorMessages[errorCode];
    console.log(message || 'Error: unknown error');
    
  }




 

  