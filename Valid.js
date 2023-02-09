

const errorc=require('./Errorcode');


exports.isValidEmail = function (email) 
{

    if(email=="")
    {
    errorc.printErrorMessage(1001);
    return 204
    }
    else
    {
    const parts = email.split("@");
    if (parts.length !== 2) {

        errorc.printErrorMessage(1002);
      return 204;
    }
    const localPart = parts[0];
    console.log(localPart);
    const domainParts = parts[1].split(".");
    // if (domainParts.length < 2) {
    //     errorc.printErrorMessage(1001);
    //   return 204;
    // }
    if (domainParts[0]=="") {
        errorc.printErrorMessage(1009);
      return 204;
    }
    if (domainParts[1]=="") {
        errorc.printErrorMessage(1010);
      return 204;
    }

    if (parts[1].indexOf(".") == -1) {
        errorc.printErrorMessage(1004);
        return 204;
      }
    const domainName = domainParts.slice(0, -1).join(".");
    const topLevelDomain = domainParts[domainParts.length - 1];
    if(validateLocalPart(localPart) && validateDomainName(domainName) && validateTopLevelDomain(topLevelDomain))
    {
        return 200;
    }
    }

}

function validateLocalPart(localPart) {
    // Validate the local part of the email address
    // Local part can contain letters, numbers, dots, underscores, percent signs, plus signs, or hyphens
    const localPartRegex = /^[a-zA-Z0-9.+-]+$/;
    var username=localPartRegex.test(localPart);
    if(username)
    {
        
        return username;
    }
    else{
        errorc.printErrorMessage(1003);
        return 204;
    }
  }
  
  function validateDomainName(domainName) {
    // Validate the domain name part of the email address
    // Domain name can contain letters, numbers, dots, or hyphens
    const domainNameRegex = /^[a-zA-Z0-9]+$/;
    var domain= domainNameRegex.test(domainName);
    if(domain)
    {
        
        return domain;
    }
    else{
        errorc.printErrorMessage(1005);
        return 204;
    }
  }
  
  
  function validateTopLevelDomain(topLevelDomain) {
    // Validate the top-level domain of the email address
    // Top-level domain must contain two or more letters
    const topLevelDomainRegex =/^[a-zA-Z]{2,6}$/;
    var tld= topLevelDomainRegex.test(topLevelDomain);
    if(tld)
    {
       
        return tld;
    }
    else{
        errorc.printErrorMessage(1006);
        return 204;
    }
  }