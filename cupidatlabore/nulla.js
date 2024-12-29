const ejs = require('ejs');

const content = '<%= name %>, welcome to our website!';
const data = { name: 'John' };

const compiledContent = ejs.render(content, data);
console.log(compiledContent); // Output: John, welcome to our website!
