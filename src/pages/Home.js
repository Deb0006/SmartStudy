import Quizzes from "../components/Quizzes";
const DATA = [
  {
    key: "asdasd",
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
    ],
  },
  {
    key: "assdasd",
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
    ],
  },
];

// const HTML = [
//   {
//     question: "What does a doctype do?",
//     answer:
//       "A doctype is an instruction to the web browser about what version of HTML the page is written in.",
//   },
//   {
//     question: "How do you serve a page with content in multiple languages?",
//     answer:
//       "You can serve a page with content in multiple languages by using the lang attribute on the HTML element.",
//   },
// ];
// const CSS = [
//   {
//     question: "CSS selector specificity and how does it work?",
//     answer:
//       'Selector specificity is the means by which the browser decides which CSS property values are the most relevant to an element and, therefore, will be applied. Specificity is usually expressed as a set of four numbers, separated by commas, in the form of "0,0,0,0". The first number is the number of ID selectors in the selector. The second number is the number of class selectors, attributes selectors, and pseudo-class selectors in the selector. The third number is the number of type selectors and pseudo-elements in the selector. The fourth number is the number of universal selectors in the selector. The higher the number, the more specific the selector is and, therefore, the more likely it is that the property values will be applied.',
//   },
//   {
//     question:
//       "What's the difference between 'resetting' and 'normalizing' CSS? Which would you choose, and why?",
//     answer:
//       "The difference between 'resetting' and 'normalizing' CSS is that 'resetting' removes all default browser styling, while 'normalizing' preserves some default browser styling. I would choose 'normalizing' because it preserves some default browser styling that I might want, such as headings and lists.",
//   },
// ];
function Home() {
  return (
    <div>
      <h1>Hello There</h1>
      <p>
        Start a new practice by selecting the type of questions and click on the
        Start button
      </p>
      <Quizzes quizzes={DATA} />
    </div>
  );
}
export default Home;
