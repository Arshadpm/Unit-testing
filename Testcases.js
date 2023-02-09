var tests = [

    { id:              0,
      testcase:       "Invalid email with long TLD domain",
      email:          "ars@gmail.cooooooooooooooom",
      expectedResult: 204
    },
    { id:              1,
      testcase:       "valid email",
      email:          "user@example.com.uk.in",
      expectedResult: 200
    },
    { id:             2,
      testcase:       "valid email with subdomain",
      email:          "user@subdomain.example.com",
      expectedResult: 200
    },
    { id:             3,
      testcase:       "Invalid email with invalid characters in username",
      email:          "user.n**##ame@gmail.com",
      expectedResult: 200
    },
    { id:              4,
      testcase:       "valid email with top-level domain co.uk",
      email:          "user@example.co.uk",
      expectedResult: 200
    },
    { id:             5,
      testcase:       "invalid email with only domain",
      email:          "user@com.",
      expectedResult: 204
    },
    {id:              6,
      testcase:       "invalid email with dash in domain",
      email:          "user@-example.com",
      expectedResult: 200
    },
    {id:              7,
      testcase:       "invalid email without @ symbol",
      email:           "test#example.com",
      expectedResult: 204
    },
    {id:              8,
      testcase:       "invalid email without value",
      email:           "",
      expectedResult: 204
    }
  ];


  module.exports=tests;