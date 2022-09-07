let questions = [
  {
    question: "Explain event delegation",
    answer:
      "Event delegation is a technique used to improve performance when working with a large number of event handlers. Rather than attaching an event listener to each individual element, event delegation allows you to add a single event listener to a parent element. When an event is triggered on an element within the parent, the event listener will check to see if the target of the event matches a selector for an element with an event handler. If so, it will execute the event handler.",
  },
  {
    question: "Explain how this works in JavaScript",
    answer:
      "The this keyword in JavaScript refers to the object that is currently being processed by the code. In a method, this refers to the owner object. In a function, this refers to the global object. In an event, this refers to the element that triggered the event.",
  },
  {
    question: "Explain how prototypal inheritance works",
    answer:
      "Prototypal inheritance is a way of implementing inheritance in JavaScript. It is different from the classical inheritance model in that it does not use classes. Instead, it uses prototypes.",
  },
  {
    question: "What do you think of AMD vs CommonJS?",
    answer:
      "I think that AMD is a better approach than CommonJS because it allows for more flexibility and modularity.",
  },
  {
    question:
      "Explain why the following doesn't work as an IIFE: function foo(){ }();. What needs to be changed to properly make it an IIFE?",
    answer:
      "The code doesn't work as an IIFE because it is missing the parentheses that are needed to invoke the function.",
  },
  {
    question:
      "What's the difference between a variable that is: null, undefined or undeclared?",
    answer:
      "A variable that is null has been declared but has no value. A variable that is undefined has not been declared. A variable that is undeclared has not been declared.",
  },
  {
    question: "What is a closure, and how/why would you use one?",
    answer:
      "A closure is a function that has access to the variables in the scope in which it was defined. Closures are used because they allow for data encapsulation.",
  },
  {
    question:
      "Can you describe the main difference between a .forEach loop and a .map() loop and why you would pick one versus the other?",
    answer:
      "The main difference between a .forEach loop and a .map() loop is that a .forEach loop does not return a new array, whereas a .map() loop does. .forEach is used when you want to iterate over an array but don't need to return a new array, .map is used when you want to iterate over an array and return a new array.",
  },
  {
    question: "What's a typical use case for anonymous functions?",
    answer:
      "A typical use case for anonymous functions is when you want to create a function that is only used once and doesn't need a name.",
  },
  {
    question:
      "How do you organize your code? (module pattern, classical inheritance?)",
    answer: "I organize my code using the module pattern.",
  },
  {
    question: "What's the difference between host objects and native objects?",
    answer:
      "Host objects are objects that are provided by the host environment (such as the browser), whereas native objects are objects that are part of the JavaScript language.",
  },
  {
    question:
      "Difference between: function Person(){}, var person = Person(), and var person = new Person()?",
    answer:
      "The difference between function Person(){} and var person = Person() is that the former defines a function, whereas the latter creates a new instance of the Person function. The difference between var person = Person() and var person = new Person() is that the former creates a new instance of the Person function, whereas the latter invokes the Person function.",
  },
  {
    question: "What's the difference between .call and .apply?",
    answer:
      "The difference between .call and .apply is that .call invokes a function with a given this value and arguments provided as individual parameters, whereas .apply invokes a function with a given this value and arguments provided as an array.",
  },
  {
    question: "Explain Function.prototype.bind.",
    answer:
      "Function.prototype.bind is a method that can be used to create a new function that has a given this value and arguments provided as individual parameters.",
  },
  {
    question: "When would you use document.write()?",
    answer:
      "Document.write() should only be used when the page is first loading. It should not be used after the page has loaded, as it will overwrite the existing page.",
  },
  {
    question:
      "What's the difference between feature detection, feature inference, and using the UA string?",
    answer:
      "Feature detection is a way of checking if a certain feature is supported by the browser. Feature inference is a way of using existing features to check if a new feature is supported. Using the UA string is a way of checking if the browser is a certain type.",
  },
  {
    question: "Explain Ajax in as much detail as possible.",
    answer:
      "Ajax is a way of making requests to a server without reloading the page. It can be used to request data from a server, or to send data to a server. Ajax requests are made using the XMLHttpRequest object.",
  },
  {
    question: "What are the advantages and disadvantages of using Ajax?",
    answer:
      "The advantages of using Ajax are that it can make web pages more responsive, and it can reduce the amount of data that needs to be downloaded. The disadvantages of using Ajax are that it can make web pages more complex, and it can increase the chances of a page being loaded with outdated data.",
  },
  {
    question: "Explain how JSONP works (and how it's not really Ajax).",
    answer:
      "JSONP is a way of making requests to a server without reloading the page. It works by adding a script tag to the page that points to a URL on the server. The server will then return a JavaScript file that contains the data that was requested. JSONP is not really Ajax because it does not use the XMLHttpRequest object.",
  },
  {
    question:
      "Have you ever used JavaScript templating? If so, what libraries have you used?",
    answer:
      "Yes, I have used JavaScript templating. I have used the Handlebars library.",
  },
  {
    question: 'Explain "hoisting".',
    answer:
      "Hoisting is a JavaScript mechanism that moves declarations to the top of the current scope. This means that variables and functions can be used before they are declared.",
  },
  {
    question: "Describe event bubbling.",
    answer:
      "Event bubbling is a way of propagating events through the DOM. When an event is triggered on an element, it will first be received by the parent element. The parent element can then choose to either handle the event itself or to pass it on to its children. This continues until the event reaches the top of the DOM tree, at which point it will be handled by the browser.",
  },
  {
    question: 'What\'s the difference between an "attribute" and a "property"?',
    answer:
      "An attribute is a value that is set on an element. A property is a value that is set on an object. Attributes are converted to properties when an element is parsed, but they are not the same thing.",
  },
  {
    question: "Why is extending built-in JavaScript objects not a good idea?",
    answer:
      "Extending built-in JavaScript objects is not a good idea because it can lead to unexpected results. It is better to create a new object that has the same functionality.",
  },
  {
    question:
      "Difference between document load event and document DOMContentLoaded event?",
    answer:
      "The difference between the document load event and the document DOMContentLoaded event is that the former is triggered when the page has been loaded, whereas the latter is triggered when the DOM has been loaded.",
  },
  {
    question: "What is the difference between == and ===?",
    answer:
      "The difference between == and === is that == checks for value equality, whereas === checks for value and type equality.",
  },
  {
    question: "Explain the same-origin policy with regards to JavaScript.",
    answer:
      "The same-origin policy is a security measure that is used to prevent JavaScript from making requests to a different domain. The same-origin policy is enforced by the browser. It allows JavaScript to make requests to the same domain, but not to a different domain.",
  },
  {
    question:
      "Make this work: duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]",
    answer: "function duplicate(arr)\n{return arr.concat(arr)}",
  },
  {
    question:
      'Why is it called a Ternary expression, what does the word "Ternary" indicate?',
    answer:
      'A Ternary expression is called a Ternary expression because it has three parts. The word "Ternary" comes from the Latin word "tertius" which means "third".A Ternary expression is a conditional expression that has three parts: a condition, a true value, and a false value. The true value and the false value can be any expression.',
  },
  {
    question:
      'What is "use strict";? what are the advantages and disadvantages to using it?',
    answer:
      '"use strict"; is a directive that is used to enable strict mode. Strict mode is a mode that is stricter than normal mode. It is less forgiving of errors, and it imposes stricter rules on the JavaScript syntax. The advantages of using strict mode are that it can help to catch errors, and it can make your code more readable. The disadvantages of using strict mode are that it can make your code more difficult to write, and it can make it more difficult to maintain.',
  },
  {
    question:
      'Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5',
    answer:
      "for (var i = 1; i <= 100; i++) {\nif (i % 3 === 0 && i % 5 === 0) {\n  console.log('fizzbuzz');\n} else if (i % 3 === 0) {\n  console.log('fizz');\n} else if (i % 5 === 0) {\n  console.log('buzz');\n} else {\n  console.log(i);\n}}",
  },
  {
    question:
      "Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?",
    answer:
      "It is generally a good idea to leave the global scope of a website as-is and never touch it because the global scope is the root scope. The root scope is the top-level scope. All other scopes are child scopes of the root scope. The root scope is the only scope that is not a child scope of any other scope. The root scope is the only scope that can be accessed from the global scope. All other scopes are child scopes of the root scope.",
  },
  {
    question:
      "Why would you use something like the load event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?",
    answer:
      "The load event is triggered when the page has been loaded. The load event has the disadvantage that it is triggered after all assets have been loaded, including images and other external files. The alternatives to the load event are the DOMContentLoaded event and the ready event. The DOMContentLoaded event is triggered when the DOM has been loaded. The ready event is triggered when the DOM is ready to be interacted with. The ready event is the preferred event to use.",
  },
  {
    question:
      "Explain what a single page app is and how to make one SEO-friendly.",
    answer:
      "A single page app is an app that is built using only one HTML page. Single page apps are typically built using a front-end framework such as AngularJS, React, or Vue. Single page apps are SEO-friendly because they can be indexed by search engines. Single page apps are also responsive, which is another factor that contributes to their SEO-friendliness.",
  },
  {
    question:
      "What is the extent of your experience with Promises and/or their polyfills?",
    answer:
      "I have extensive experience with Promises and their polyfills. I have used Promises in a number of projects, and I have created my own Promises polyfill. I am familiar with a number of Promises libraries, such as Q, when.js, and RSVP.js. I am also familiar with a number of Promise polyfills, such as es6-promise and promise-polyfill.",
  },
  {
    question:
      "What are the pros and cons of using Promises instead of callbacks?",
    answer:
      "The pros of using Promises instead of callbacks are that Promises are easier to use, and they make code more readable. The cons of using Promises instead of callbacks are that Promises can be slower, and they can consume more memory. Additionally, Promises can be difficult to debug.",
  },
  {
    question:
      "What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?",
    answer:
      "Some of the advantages of writing JavaScript code in a language that compiles to JavaScript are that the code can be more readable and maintainable, and that the code can be less error-prone. Some of the disadvantages of writing JavaScript code in a language that compiles to JavaScript are that the code can be more difficult to debug, and that the code can be less portable.",
  },
  {
    question: "What tools and techniques do you use debugging JavaScript code?",
    answer:
      "I use a number of tools and techniques to debug JavaScript code. I use the debugger keyword, I use the console.log function, and I use a number of browser extensions such as the Firefox extension Firebug. I also use a number of online tools such as JSLint and JSHint.",
  },
  {
    question:
      "What language constructions do you use for iterating over object properties and array items?",
    answer:
      "I use the for-in loop for iterating over object properties, and I use the for-of loop for iterating over array items.",
  },
  {
    question: "Explain the difference between mutable and immutable objects.",
    answer:
      "Mutable objects are objects that can be changed, and immutable objects are objects that cannot be changed.",
  },
  {
    question:
      "Explain the difference between synchronous and asynchronous functions.",
    answer:
      "Synchronous functions are functions that are executed one at a time, and asynchronous functions are functions that are executed in parallel.",
  },
  {
    question:
      "What is event loop? What is the difference between call stack and task queue?",
    answer:
      "The event loop is a mechanism that allows JavaScript to execute asynchronously. The event loop works by putting events on a queue, and then executing them one at a time. The call stack is a data structure that stores the order in which functions are called, and the task queue is a data structure that stores events.",
  },
  {
    question:
      "Explain the differences on the usage of foo between function foo() {} and var foo = function() {}",
    answer:
      "The difference between function foo() {} and var foo = function() {} is that function foo() {} is a function declaration, and var foo = function() {} is a function expression.",
  },
  {
    question:
      "What are the differences between variables created using let, var or const?",
    answer:
      "The difference between variables created using let, var, or const is that variables created using let are block-scoped, variables created using var are function-scoped, and variables created using const are block-scoped.",
  },
  {
    question:
      "What are the differences between ES6 class and ES5 function constructors?",
    answer:
      "The differences between ES6 class and ES5 function constructors are that ES6 class constructors can have a name, and that ES6 class constructors can have a superclass. Additionally, ES6 class constructors can have instance and static methods, and static fields.",
  },
  {
    question:
      "Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?",
    answer:
      "One use case for the new arrow => function syntax is that it can be used to create concise functions. This new syntax differs from other functions in that it does not create a new scope, and that it does not have a this keyword.",
  },
  {
    question:
      "What advantage is there for using the arrow syntax for a method in a constructor?",
    answer:
      "The advantage of using the arrow syntax for a method in a constructor is that the method will not be bound to the instance.",
  },
  {
    question: "What is the definition of a higher-order function?",
    answer:
      "A higher-order function is a function that takes one or more functions as arguments, or that returns a function.",
  },
  {
    question:
      "Can you give an example for destructuring an object or an array?",
    answer:
      "Yes. For example, you can destruct an array like so: let [a, b, c] = [1, 2, 3]; And you can destruct an object like so: let {x, y, z} = {x: 1, y: 2, z: 3};",
  },
  {
    question:
      "ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?",
    answer:
      "Yes. For example, you can use template literals to easily create a multiline string: let str = `This is a\nmultiline\nstring`;",
  },
  {
    question:
      "Can you give an example of a curry function and why this syntax offers an advantage?",
    answer:
      "Yes. A curry function is a function that takes one or more arguments and returns a new function that takes the remaining arguments. This syntax offers an advantage because it allows you to create new functions with different arguments without having to duplicate the function body.",
  },
  {
    question:
      "What are the benefits of using spread syntax and how is it different from rest syntax?",
    answer:
      "Spread syntax allows you to easily expand an array or an object into its individual elements. Rest syntax allows you to easily gather a variable number of arguments into an array.",
  },
  {
    question: "How can you share code between files?",
    answer:
      "You can share code between files by using modules. Modules are JavaScript files that are loaded by a module loader such as RequireJS.",
  },
  {
    question: "Why you might want to create static class members?",
    answer:
      "There are several reasons why you might want to create static class members: to create utility functions that can be used without instantiating an object, to create constants that can be used without instantiating an object, or to create singleton objects.",
  },
];

console.log(questions.length);
