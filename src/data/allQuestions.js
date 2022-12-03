import { nanoid } from "nanoid";
const DATA = [
  {
    id: nanoid(),
    name: "HTML",
    questions: [
      {
        question: "What does a doctype do?",
        answer:
          "A doctype is an instruction to the web browser about what version of HTML the page is written in.",
      },
      {
        question: "How do you serve a page with content in multiple languages?",
        answer:
          "You can serve a page with content in multiple languages by using the lang attribute on the HTML element.",
      },
      {
        question:
          "What kind of things must you be wary of when design or developing for multilingual sites?",
        answer:
          "When design or developing for multilingual sites, you need to be aware of things like text direction, character encoding, and language-specific content.",
      },
      {
        question: "What are data- attributes good for?",
        answer:
          "Data- attributes are useful for storing data that is not meant to be displayed to the user.",
      },
      {
        question:
          "Consider HTML5 as an open web platform. What are the building blocks of HTML5?",
        answer: "The building blocks of HTML5 are HTML, CSS, and JavaScript.",
      },
      {
        question:
          "Describe the difference between a cookie, sessionStorage and localStorage.",
        answer:
          "A cookie is a small piece of data that is stored on the user's computer. SessionStorage and localStorage are two HTML5 features that allow you to store data on the user's computer.",
      },
      {
        question:
          "Describe the difference between <script>, <script async> and <script defer>.",
        answer:
          "<script> tags are used to include JavaScript code in a web page. <script async> and <script defer> are two attributes that can be used to optimize the loading of JavaScript files.",
      },
      {
        question:
          "Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? Do you know any exceptions?",
        answer:
          "It is generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>, because this allows the browser to download the CSS files in parallel with the JavaScript files. There are some exceptions to this rule, however.",
      },
      {
        question: "What is progressive rendering?",
        answer:
          "Progressive rendering is a technique for loading web pages in which the HTML is rendered incrementally as it is received from the server.",
      },
      {
        question:
          "Why you would use a srcset attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.",
        answer:
          "The srcset attribute allows the browser to choose the best image to display, based on the user's screen size and resolution. The browser evaluates the content of this attribute to determine which image to display.",
      },
      {
        question: "Have you used different HTML templating languages before?",
        answer:
          "I have used different HTML templating languages before, such as Handlebars.",
      },
    ],
  },
  {
    id: nanoid(),
    name: "CSS",
    questions: [
      {
        question: "CSS selector specificity and how does it work?",
        answer:
          'Selector specificity is the means by which the browser decides which CSS property values are the most relevant to an element and, therefore, will be applied. Specificity is usually expressed as a set of four numbers, separated by commas, in the form of "0,0,0,0". The first number is the number of ID selectors in the selector. The second number is the number of class selectors, attributes selectors, and pseudo-class selectors in the selector. The third number is the number of type selectors and pseudo-elements in the selector. The fourth number is the number of universal selectors in the selector. The higher the number, the more specific the selector is and, therefore, the more likely it is that the property values will be applied.',
      },
      {
        question:
          "What's the difference between 'resetting' and 'normalizing' CSS? Which would you choose, and why?",
        answer:
          "The difference between 'resetting' and 'normalizing' CSS is that 'resetting' removes all default browser styling, while 'normalizing' preserves some default browser styling. I would choose 'normalizing' because it preserves some default browser styling that I might want, such as headings and lists.",
      },
      {
        question: "Describe floats and how they work.",
        answer:
          "Floats are used to create a column layout. Floated elements are removed from the normal flow of the document and are instead floated to the left or right of the containing element. This can be used to create a two-column layout, for example.",
      },
      {
        question: "Describe z-index and how stacking context is formed.",
        answer:
          'Z-index is a CSS property that specifies the stack order of elements. Elements with a higher z-index are stacked on top of elements with a lower z-index. Stacking context is formed when an element has a z-index property other than "auto".',
      },
      {
        question: "Describe BFC (Block Formatting Context) and how it works.",
        answer:
          "BFC is a layout model that is used to lay out elements on a page. It works by creating a block-level element that contains all the child elements. The child elements are then positioned relative to the parent element.",
      },
      {
        question:
          "What are the various clearing techniques and which is appropriate for what context?",
        answer:
          "There are various clearing techniques, such as using the clear property, using overflow: hidden, or using clearfix. The appropriate technique depends on the context.",
      },
      {
        question:
          "Explain CSS sprites, and how you would implement them on a page or site.",
        answer:
          "CSS sprites are images that are used to reduce the number of HTTP requests that are made when a page is loaded. They are implemented by combining multiple images into a single image and then using the background-position property to position the images on the page.",
      },
      {
        question:
          "How would you approach fixing browser-specific styling issues?",
        answer:
          "One approach to fixing browser-specific styling issues is to use a CSS reset. This removes all default browser styling and allows you to start from a clean slate. Another approach is to use a CSS preprocessor, such as Less or Sass, which can help to automate the process of creating browser-specific CSS.",
      },
      {
        question:
          "How do you serve your pages for feature-constrained browsers? What techniques/processes do you use?",
        answer:
          "One technique that can be used to serve pages for feature-constrained browsers is to use a CSS preprocessor, such as Less or Sass, to create separate CSS files for different browsers. Another technique is to use a tool such as Modernizr to detect the features that are supported by the browser and then serve the appropriate CSS.",
      },
      {
        question:
          "What are the different ways to visually hide content (and make it available only for screen readers)?",
        answer:
          "One way to visually hide content is to use the visibility property. This will make the content invisible but still available to screen readers. Another way is to use the display property. This will make the content invisible and not available to screen readers.",
      },
      {
        question:
          "Have you ever used a grid system, and if so, what do you prefer?",
        answer:
          "I have used the Bootstrap grid system. I prefer it because it is responsive and easy to use.",
      },
      {
        question:
          "Have you used or implemented media queries or mobile specific layouts/CSS?",
        answer:
          "I have used media queries to create responsive layouts. I have also implemented mobile-specific layouts by using CSS media queries.",
      },
      {
        question: "Are you familiar with styling SVG?",
        answer:
          "I am familiar with styling SVG. I have used the fill, stroke, and opacity properties to style SVG elements.",
      },
      {
        question:
          "Can you give an example of an @media property other than screen?",
        answer:
          "One example of an @media property is print. This property can be used to apply different styles when the document is printed.",
      },
      {
        question: "What are some of the 'gotchas' for writing efficient CSS?",
        answer:
          "One 'gotcha' for writing efficient CSS is to avoid using the !important declaration. This declaration overrides all other declarations and can make the CSS difficult to maintain. Another 'gotcha' is to avoid using inline CSS. This can make the HTML difficult to read and can increase the file size of the page.",
      },
      {
        question:
          "What are the advantages/disadvantages of using CSS preprocessors?",
        answer:
          "The advantages of using CSS preprocessors are that they can help to automate the process of creating CSS, they can provide a way to create modular CSS, and they can help to keep the CSS organized. The disadvantages of using CSS preprocessors are that they can be difficult to learn and can add another layer of complexity to the CSS.",
      },
      {
        question:
          "Describe what you like and dislike about the CSS preprocessors you have used.",
        answer:
          "I like that CSS preprocessors can help to automate the process of creating CSS. I dislike that they can be difficult to learn.",
      },
      {
        question:
          "How would you implement a web design comp that uses non-standard fonts?",
        answer:
          "One way to implement a web design comp that uses non-standard fonts is to use the @font-face rule. This rule allows you to specify a custom font that will be downloaded and used by the browser.",
      },
      {
        question:
          "Explain how a browser determines what elements match a CSS selector.",
        answer:
          "A browser determines what elements match a CSS selector by looking at the elements in the DOM tree and comparing them to the selector. If the element matches the selector, then the browser will apply the CSS property values to the element.",
      },
      {
        question:
          "Describe pseudo-elements and discuss what they are used for.",
        answer:
          "Pseudo-elements are used to style certain parts of an element, such as the first letter or line. They are used to add special effects to an element.",
      },
      {
        question:
          "Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.",
        answer:
          "The box model is a model that is used to describe the dimensions of an element. It consists of the content, padding, border, and margin. The content is the element's actual content, such as text or an image. The padding is the space between the content and the border. The border is the element's border. The margin is the space between the element and the other elements on the page.",
      },
      {
        question:
          "What does * { box-sizing: border-box; } do? What are its advantages?",
        answer:
          "The box-sizing property specifies how the width and height of an element are calculated. The border-box value includes the padding and border in the calculation. The advantages of this are that it is easier to control the size of an element, and the element will not be affected by the padding and border.",
      },
      {
        question:
          "What is the CSS display property and can you give a few examples of its use?",
        answer:
          "The CSS display property specifies the display type of an element. The display type can be block, inline, or none. Block elements are elements that are displayed on a new line, such as paragraphs. Inline elements are elements that are displayed on the same line, such as span elements. None elements are elements that are not displayed, such as script elements.",
      },
      {
        question: "What's the difference between inline and inline-block?",
        answer:
          "Inline elements are elements that are displayed on the same line, such as span elements. Inline-block elements are elements that are displayed on the same line, but they can be styled with CSS, such as div elements.",
      },
      {
        question:
          "What's the difference between a relative, fixed, absolute and statically positioned element?",
        answer:
          "A relative positioned element is an element that is positioned relative to its normal position. A fixed positioned element is an element that is positioned relative to the viewport. An absolute positioned element is an element that is positioned relative to the nearest positioned ancestor. A statically positioned element is an element that is not positioned.",
      },
      {
        question:
          "What existing CSS frameworks have you used locally, or in production? How would you change/improve them?",
        answer:
          "I have used Bootstrap and Foundation. I would improve them by making them more responsive and by adding more features.",
      },
      {
        question:
          "Have you played around with the new CSS Flexbox or Grid specs?",
        answer:
          "I have played around with the new CSS Flexbox and Grid specs. I think they are both great ways to create responsive layouts.",
      },
      {
        question:
          "Can you explain the difference between coding a web site to be responsive versus using a mobile-first strategy?",
        answer:
          "Coding a web site to be responsive means that the web site will be designed to work on all devices, from small screens to large screens. Mobile-first means that the web site will be designed for mobile devices first, and then will be adapted to work on larger screens.",
      },
      {
        question: "How is responsive design different from adaptive design?",
        answer:
          "Responsive design is a design that is created to work on all devices, from small screens to large screens. Adaptive design is a design that is created for specific screen sizes.",
      },
      {
        question:
          "Have you ever worked with retina graphics? If so, when and what techniques did you use?",
        answer:
          "I have worked with retina graphics. I have used the background-size property to make images look sharper on retina displays.",
      },
      {
        question:
          "Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?",
        answer:
          "There is no right or wrong answer to this question. It depends on the situation. If you want to move an element without changing its position in the document flow, then you would use translate(). If you want to change the position of an element in the document flow, then you would use absolute positioning.",
      },
    ],
  },
  {
    id: nanoid(),
    name: "JavaScript",
    questions: [
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
        question:
          "What's the difference between host objects and native objects?",
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
        question:
          'What\'s the difference between an "attribute" and a "property"?',
        answer:
          "An attribute is a value that is set on an element. A property is a value that is set on an object. Attributes are converted to properties when an element is parsed, but they are not the same thing.",
      },
      {
        question:
          "Why is extending built-in JavaScript objects not a good idea?",
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
        question:
          "What tools and techniques do you use debugging JavaScript code?",
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
        question:
          "Explain the difference between mutable and immutable objects.",
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
    ],
  },
];
export default DATA;
