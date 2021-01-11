function phoneticLookup(val) {
    var result = "";
  
    switch(val) {
      case "alpha": 
        result = "Adams";
        break;
      case "bravo": 
        result = "Boston";
        break;
      case "charlie": 
        result = "Chicago";
        break;
      case "delta": 
        result = "Denver";
        break;
      case "echo": 
        result = "Easy";
        break;
      case "foxtrot": 
        result = "Frank";
    }
  
    return result;
  }
  
  phoneticLookup("charlie");
  
  //Alternatively
function phoneticLookup(val) {
    var result = "";
  
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };
    result = lookup[val];
  
    return result;
  }
  
  phoneticLookup("echo");
  
  //JSON
  var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [ 
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    
    {
      "artist": "john Terry",
      "title": "Young Master",
      "release_year": 2000,
      "formats": ["DVD", "10T", "DP"]
    }
  ];
  
  //Accessing Nested Object
  var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  var gloveBoxContents = myStorage.car.inside["glove box"]; // Prints "maps"
  
  //Accessing Nested Array
      var ourPets = [
        {
          animalType: "cat",
          names: [
            "Meowzer",
            "Fluffy",
            "Kit-Cat"
          ]
        },
        {
          animalType: "dog",
          names: [
            "Spot",
            "Bowser",
            "Frankie"
          ]
        }
      ];
      ourPets[0].names[1]; // "Fluffy"
      ourPets[1].names[0]; // "Spot"
  
  
  var myPlants = [
    { 
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }  
  ];
  
  var secondTree = myPlants[1].list[1]; // pine
  
  
  
  var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
  };
  
  function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
      return myObj[checkProp];
    }
    else {
    return "Not Found";
    }
  }
  
  // Test your code by modifying these values
  checkObj("gift");
  
  
  //ParseInt Function
  function convertToInteger(str) {
    return parseInt(str)
  }
  
  convertToInteger("56");
  
  //LOOPS
    //While Loop
    var ourArray = [];
      var i = 0;
      while(i < 5) {
        ourArray.push(i);
        i++;
      }
    //For Loop
      var ourArray = [];
      for (var i = 0; i < 10; i += 2) {
        ourArray.push(i);
      }
  //ourArray will now contain [0,2,4,6,8]
  
  var myArray = [];
  
  // Only change code below this line.
  for(var i = 1; i < 10; i += 2) {
    myArray.push(i);
   } //Prints [1,3,5,7,9]
  
  
   var ourArray = [];
  
  for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
  } //Prints [10,8,6,4,2]
  
  // Setup
  var myArray = [];
  
  for(var i = 9; i > 0; i -= 2) {
    myArray.push(i);
  } //Prints [9,7,5,3,1]
  
  var arr = [10,9,8,7,6];
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  
  
  var ourArr = [ 9, 10, 11, 12];
  var ourTotal = 0;
  
  for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
  }
  
  // Setup
  var myArr = [ 2, 3, 4, 5, 6];
  
  var total = 0;
  for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
  }
  
  
  var arr = [
    [1,2], [3,4], [5,6]
  ];
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
  
  function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for(var i = 0; i < arr.length; i++) {
      for(var j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]); //Multiplies all elements in sub array
  
  
  //Do...While Loop
      var ourArray = [];
      var i = 5;
      while (i < 5) {
        ourArray.push(i);
        i++;
      }
  
  var myArray = [];
  var i = 10;
  
   do {
    myArray.push(i);
    i++;
  } while (i < 5)
  //Prints [11];
  
  //Exercise
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
          "likes": ["JavaScript", "Gaming", "Foxes"]
      }
  ];
  
  
  function lookUpProfile(name, prop){
  // Only change code below this line
  for (var x = 0; x < contacts.length; x++){
      if (contacts[x].firstName === name) {
          if (contacts[x].hasOwnProperty(prop)) {
              return contacts[x][prop];
          } else {
              return "No such property";
          }
      }
  }
  return "No such contact";
  // Only change code above this line
  }
  
  // Change these values to test your function
  lookUpProfile("Akira", "likes");
  
  //My Solution
  function lookUpProfile(name, prop){
  
  for (var i = 0; i < contacts.length; i++){
      if (contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)) {
          return contacts[i][prop];
      }
      else if (contacts[i].firstName != name){
        return "No such contact";
      }
      else if (!contacts[i].hasOwnProperty(prop))
      {
        return "No such property";
      }
  }
  
  lookUpProfile("Akira", "likes");
  
  
  //Random Numbers
  function ourRandomRange(ourMin, ourMax) {
  
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
  }
  
  ourRandomRange(1, 9);
  
  // Only change code below this line.
  
  function randomRange(myMin, myMax) {
  
    return Math.floor(Math.random() * (myMax- myMin + 1)) + myMin; // Change this line
  
  }
  
  // Change these values to test your function
  var myRandom = randomRange(5, 15);
  
  //Record Collection
  // Setup
  var collection = {
      "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [ 
          "Let It Rock", 
          "You Give Love a Bad Name" 
        ]
      },
      "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [ 
          "1999", 
          "Little Red Corvette" 
        ]
      },
      "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
      },
      "5439": {
        "album": "ABBA Gold"
      }
  };
  // Keep a copy of the collection for tests
  var collectionCopy = JSON.parse(JSON.stringify(collection));
  
  function updateRecords(id, prop, value) {
    if (prop === "tracks" && value !== "") {
     if(collection[id][prop]) {
      collection[id][prop].push(value);
     }
     else {
      collection[id][prop]=[value];
     }
    } else if (value !== "") {
      collection[id][prop] = value;
    } else {
      delete collection[id][prop];
    }
    
    return collection;
  }
  
  // Alter values below to test your code
  updateRecords(5439, "artist", "ABBA");
  
  
  /*How To Write Cleaner Javascript*/
  //Using Destructuring For Object Parameters
  
const greet = (obj) => {
    return `${obj.greeting},${obj.firstName}${obj.lastName}`;
  }//We Should Write Instead
  
  const greet = ({
    greeting,
    firstName, 
    lastName
  }) => {
    return `${obj.greeting},${obj.firstName}${obj.lastName}`;
  }
  
  //Naming Callback Function
  const arr = [1, 2, 3].map(a => a * 2);//We should Write
  
  const double = a => a * 2;
  const arr = [1, 2, 3].map(double)
  
  //Make Conditionals Descriptive
  if(score === 100 || remainingPlayers ===0){
    quitGame();
  }//We Should Write
  
  const winnerExists = () => {
    return score === 100 || remainingPlayers === 0
  }
  if(winnerExists()) {
    quitGame()
  }
  
  //Replacing Switch Statements With Map or Object
  const getValue = (prop) => {
    switch(prop) {
      case 'a': {return 1;}
      case 'b': {return 2;}
      case 'c': {return 3;}
    }
  }
  const val = getValue('a');//We Should Write
  
  const obj = {
    a: 1,
    b: 2,
    c: 3
  }
  const val = obj['a'];
  
  //OR
  const map = new Map([['a', 1], ['b', 2], ['c', 3]])
  const val = map.get('a')
  
  
  //Some
  var names = ['ram', 'raj', 'rahul']
  
  let isRahuPresent = names.some(name => name === 'rahul');
  if(isRahuPresent) {
    console.log("%c found rahul", "color:red");
  }
  
  //map function
  var persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  
  function getFullName(item) {
    var fullname = [item.firstname,item.lastname].join(" ");
    return fullname;
  }
  
  function myFunction() {
    document.getElementById("demo").innerHTML = persons.map(getFullName);
  }
  
  /*Spread Operator*/
  //Adding Item To a List
  const fruit = ['a', 'b', 'c']
  const moreFruit = [...fruit, 'd', 'e', 'f', 'g', 'h']
  
  console.log(moreFruit);//["a","b","c","d"]
  
  //Using Math Operator
  const nums = [37, -17, 20, 15, 0]
  
  console.log(Math.min(nums))//NaN
  console.log(Math.min(...nums))//-17
  console.log(Math.max(...nums))//37
  
  //To Concatenate Arrays
  const myArray = [1, 2, 3]
  const yuorArray = [4, 5, 6, 7, 8, 9]
  
  const ourArray = [...myArray, ...yuorArray]
  console.log(...ourArray)// 1 2 3 4 5 6 7 8 9 
  
  //To Copy An Array
  const alpha = ['a', 'b', 'c', 'd']
  const moreAlpha = [...alph];
  console.log(moreAlpha)// ["a", "b", "c", "d"]
  
  alph[0] = 'z'
  console.log(...[...alpha], '-', ...moreAlpha)// z b c d - a b c d
  
  //To Add state in React
  const [searches, setSearches] = useState([])
  
  setSearches(searches => [...searches, query]).
  
  
  //Fetch Request
    //Basic Syntax
      fetch(url) // Call the fetch function passing the url of the API as a parameter
      .then(function(data) {
          // Your code for handling the data you get from the API
      })
      .catch(function(error) {
          // This is where you run code if the server returns any errors
      });
  
  /*Javascript Regular Expression*/
  //Finding Sentences That Contain a Specific word
  // /[^.!?]*\bword\b[^.!?]*.?/gi
  
  const str = "The apple tree originated in Central Asia. It is cultivated worldwide. Apple matures in late summer or autumn.";
  
  str.match(/[^.!?]*\bapple\b[^.!?]*.?/gi)
  
  //Striping Invalid Characters From FileName
 // (/[<>|:"*?\\/]+g, '')
  
  const str = "https://en.wikipedia.org/";
  
  //str.replace(/[<>|:"*?\\/]+g, '');
  str.replace(/^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])$/i, 'file')
  
  ///Replacing Multiple WhiteSpaces with A Single WhiteSpace
  //(/\s\s+/g, ' ')
  const str = "  My opinions may have changed,     but not the fact that I'm right."
  
  str.replace(/\s\s+/g, ' ')// "  My opinions may have changed, but not the fact that I'm right."
  
  str.replace(/\s\s+/g, ' ').trim();// "My opinions may have changed, but not the fact that I'm right."
  
  str.replace(/(\s)\1+/g, '$1').trim();// To exclude enter space
  
  
  //To Limit User Input To Alphanumeric Characters
  const input1 = "Johnson12345";
  const input2 = ":-)";
  
  /^[A-Z0-9]+$/i.test(input1);// true
  /^[A-Z0-9]+$/i.test(input2);// false
  
  
  //To Turn URLs into Links
  const str = "Visit https://en.wikipedia.org/ for more info.";
  
  str.replace(/\b(https?|ftp|file):\/\/\S+[\/\w]/g, '<a href="$&">$&</a>');
  
  
  //To Delete Duplicate Words
  const str = "This this Sentence has double words.";
  
  str.replace(/\b(\w+)\s+\1\b/gi, '$1'); //"This sentence  has double word."
  
  
  //To add to the front of an array
  const colors = ['blue', 'yellow', 'red']
  
  colors.splice(0, 0, 'blue')//Add to the beginning
  colors.splice(2, 0, 'white')//Add to the third position
  
  //To swap elements in an array
  const a = ['a', 'b', 'c', 'e', 'd']
  
  //save in a tmp store
  const tmp = a[4]
  a[0] = 3
  a[3] = 4
  
  //Alternatively
  [a[3], a[4]] = [a[4], a[3]]
  
  
  //Console.table
  let car1 = { name : "Audi", model : "A4" }
  let car2 = { name : "Volvo", model : "XC90" }
  let car3 = { name : "Ford", model : "Fusion" }
  console.table([car1, car2, car3]);
  
  
  function addEven(nums) {
    let evenNums = []
    let sum 
  
    for(i = 0; i <= nums; i++) {
      if(i % 2 == 0) {
        evenNums.push(i)
      }
    }
  
    sum = evenNums.reduce((accum, currentVal) => {
      accum + currentVal
    })
    return sum;
  }
  
  function searchItem(item) {
    ({mango: ()=> console.log('mango'),
    banana: ()=> console.log('banana'),
    apple: ()=> console.log('apple')}[item]());  
  }
  
  let search = 'mango';
  ({mango: ()=> console.log('mango'),
  banana: ()=> console.log('banana'),
  apple: ()=> console.log('apple')}[search]());
  }











