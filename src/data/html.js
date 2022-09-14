let htmlQuestions = [
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
];
export default htmlQuestions;