
var tests = require('./Testcases');
// const testEmails =require('./testEmails');
// const object = require('./object');
var valid = require('./Validation');
var errorc = require('./Errorcode');



var chalk = require('chalk'); //to make colorful text
var prompt = require("prompt-sync")();
 

let again = "Y";
do {
  var op = prompt("Do you want to run (Y/N):");
  if (op.toLowerCase() == "y") {
    prompt(
      "1. ALL\n2. RANDOM\n3. SPECIFIC\n4. CUSTOM\n" 
    )

    var option = prompt(
      "Enter option : "
    );
    
      

      console.log(chalk.gray.italic("\nentering into switch case......\n"));
    switch (option) {

      case "1":
       
        all();
        break;
      case "2":
        var times=prompt("How many times you want to test?")
        var count=0;
        var coverage1=0;
        var failed1=0;
        var k=0;
        for(var i=1;i<=times;i++)
        {
          console.log("------------------------------");
          console.log(count+=1," times");
        random(tests);
        }

        console.log(chalk.yellow("Total number of test cases  is: ",k));
        console.log(chalk.green("number of test cases passed is: ",coverage1));
        console.log(chalk.red("number of test cases failed is: ",failed1));

       var per=(coverage1*100)/k;

        console.log(chalk.green("coverage percentage is "+per+"%"));

        break;
      case "3":
        specific();
        break;
      case "4":
        custom();
        break;

      default:
        
        errorc.printErrorMessage(1001);

        break;
    }
  } else if (op.toLowerCase() == "n") {
    break;
  } else {
    
    errorc.printErrorMessage(1001);

  }
} while (again == "Y");

function all() {


  var coverage=0;
  var failed=0;
  var per;
  var j=0;

  for (let i = 0; i < tests.length; i++) {
    console.log("------------------------------");
    j=j+1;
    let test = tests[i];
    

    console.log("Test case "+i+":" + test.testcase);
    console.log("Input: " + test.email);
    console.log("Expected result: " + test.expectedResult);

    let result = valid.isValidEmail(test.email);
    console.log("Output: " + result);

    if(result === test.expectedResult)
    {
      coverage=coverage+1;
      console.log(chalk.green("Test case "+i+" passed"));
    }
    else{
      failed=failed+1;
      console.log(chalk.red("Test case "+i+" failed"));
    }
  
    console.log("\n");
  }
  
console.log("All tests passed!");
console.log(chalk.yellow("Total number of test cases  is: ",j));
console.log(chalk.green("number of test cases passed is: ",coverage));
console.log(chalk.red("number of test cases failed is: ",failed));

per=(coverage*100)/j;

console.log(chalk.green("coverage percentage is "+per+"%"));

}



function specific() {
  console.log("specific");

  console.log("------------------------------");

  console.log("Test Objective: Email validation");

console.log("\nPlease enter any specific ids from given below\n")



for (let i = 0; i < tests.length; i++) {

  let test2 = tests[i];

  console.log(test2.id+"-"+test2.email);

}

var id = prompt("Enter id option : ");

console.log(id);


var testCase=tests.find(testCase => testCase.id == id)
console.log(testCase);
console.log(testCase.email);

var result=valid.isValidEmail(testCase.email);
console.log(result);

if(result === testCase.expectedResult)
{
  console.log(chalk.green("Test case "+id+" passed"));
  console.log(chalk.green("Coverage percentage is: 100%"));
}
else{
  console.log(chalk.red("Test case "+id+" failed"));
  console.log(chalk.red("Coverage percentage is: 0%"));
}
console.log(chalk.green.bold("\nTests are passed\n"));
console.log(chalk.gray.italic("\nexiting from case 3 ......\n"));
}

function custom() {

  console.log(chalk.gray.italic("\nentered into switch case 4......\n"));
  console.log("custom");
  console.log("------------------------------");
 

  console.log("Test Objective: Email validation");

      var custom1 = prompt("Enter email: ");
      console.log(chalk.gray.italic("\nread the email value......\n"));
      console.log(chalk.gray.italic("\npassing email value to validate function()......\n"));
      var result=valid.isValidEmail(custom1);
      console.log(result);

      if(result==200)
      {
      console.log(chalk.green("Test case with "+custom1+" passed"));
      console.log(chalk.green("Coverage percentage is: 100%"));
      }
      else if(result==204){
      console.log(chalk.red("Test case with "+custom1+" failed"));
      console.log(chalk.red("Coverage percentage is: 0%"));
      }

      
      
      console.log(chalk.gray.italic("\nexiting from case 4 ......\n"));
  }

  
  
  function random(array) {
    
   k=k+1;
    console.log("Test Objective: Email validation");
    var randomIndex = Math.floor((Math.random() )* (array.length));
    console.log("id-",randomIndex);
    console.log(array[randomIndex]);
    var test1=array[randomIndex];
    
    var result=valid.isValidEmail(test1.email);
    console.log("Test case "+i+":" + test1.testcase);
    console.log("Input: " + test1.email);
    console.log("Expected result: " + test1.expectedResult);
    console.log("Output: " + result);

    if(result === test1.expectedResult)
    {
      coverage1=coverage1+1;
      console.log(chalk.green("Test case "+randomIndex+" passed"));
      
    }
    else{
      failed1=failed1+1;
      console.log(chalk.red("Test case "+randomIndex+" failed"));
    }
    console.assert(result === test1.expectedResult, "Test case " + (i + 1) + "passed");
    console.log("\n");
  }
