const valid=require('./Validation');

const All=function(){
    
    describe("Email presence check", () => {
    test("Returns true for valid email", () => {
      const email = { email: "user@example.com" };
      expect(valid.isValidEmail(email)).toBe(true);
    });
  
    test("Returns false for missing email", () => {
      const email = {};
      expect(valid.isValidEmail(email)).nottoBe(true);
    });
  
    test("Returns false for empty email", () => {
      const email = { email: "" };
      expect(isValidEmail(email)).nottoBe(true);
    });
  }); 
}

module.exports=All;