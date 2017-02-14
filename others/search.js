
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
  var myProp = false;
  var myName = false;
// Only change code below this line
  for(var i = 0; i < contacts.length; i++) {
    
    if(contacts[i].firstName == firstName && contacts[i].hasOwnProperty(prop)) {
  return(contacts[i][prop]);
  }
    
   else if(!contacts[i].hasOwnProperty(prop)) {
      myProp = true;
    }
   else if(contacts[i].firstName !== firstName) {
      myName = true;
    }
  }

  if(myProp) {
    console.log("No such property");
  }
  
 if(myName) {
    console.log("No such contact");
    
    
  }
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Bob", "number");




function palindrome(str) {
  // Good luck!
  var small = str.toLowerCase();
  var don = small.replace(/[^a-z0-9]/ig, "");
  var test = don.split("").reverse().join("");
  if(test === don) {
    return true;
  }
  else {
    return false;
  }
}



palindrome("eye");


function titleCase(str) {
  var don = str.toLowerCase();
 return don.replace(/(^|\s)[a-z]/g,function(f)
{
  return f.toUpperCase();
  
});

}

titleCase("I'm a little tea pot");
