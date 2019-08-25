// CA Handlebars example 1

const source = document.getElementById('greet').innerHTML;
const template = Handlebars.compile(source);
const context = {
    greeting: 'Hello citizens of Earth!',
};
const compiledHTML = template(context);
const fill = document.getElementById('hello');

fill.innerHTML = compiledHTML;