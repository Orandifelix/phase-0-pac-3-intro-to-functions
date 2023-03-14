// Follow along with the examples here
console.log("Hello World!");
function doNothing() {}
function sayHello() {
    console.log("Hello!");
  }
  sayHello();
  function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
  }
  sayHelloToIsabel()
  function sayHelloToSofia() {
    console.log("Hello, Sofia!");
  }
  sayHelloToSofia()
  function sayHelloToBrendan(){
    console.log("Hello Brendan!")
  }
  sayHelloToBrendan()
  function tellOrandi(){
    console.log("Keep going")
  }
  tellOrandi()
  function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("anything"); // passing the argument 'anything' into our function

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo("Isabel"); // "Hello, Isabel!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1); // "Hello, 1!"
  
  // ^ Note that in the above, JavaScript coerces the number 1 to the string "1"
  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
    console.log(`${firstName}, ${greeting}!`);
  }
  say("Hello", "Julio")

function add(x, y) {
    return x + y;
    
  }
  console.log(add(9000, 80))

function say(greeting, firstName) {
    return(`${greeting}, ${firstName}!`);
  }
  console.log(say("Hello", "Sofia"));

function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
  

  console.log(say("Howdy", "partner"));