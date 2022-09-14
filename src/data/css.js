let cssQuestions = [
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
    question: "How would you approach fixing browser-specific styling issues?",
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
    question: "Describe pseudo-elements and discuss what they are used for.",
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
    question: "Have you played around with the new CSS Flexbox or Grid specs?",
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
];

export default cssQuestions;
