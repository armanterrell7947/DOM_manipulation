const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//this injects a new paragraph into the HTML and sets the font color to red! Nice work! Though I don't want to add too much with .innerHTML

const paragraph = document.createElement('div');
paragraph.classList.add('paragraph-content');
paragraph.setAttribute('style', 'color: red')
paragraph.innerHTML = '<p>Hey I\'m red!<p>';

container.appendChild(paragraph);


//this injects a new H3 into the DOM, styled with the color blue
const heading3 = document.createElement('div');
heading3.classList.add('heading-3');
heading3.setAttribute('style', 'color: blue');
heading3.innerHTML = '<h3>I\'m a blue h3!';

container.appendChild(heading3);


/*
So here I have to create a new DIV element that needs to be appended to the original container
BLACK BORDER AND PINK BACKGROUND COLOR
it needs an h1 that says I'm in a div
and a P element that says ME TOO
so here... we... go.

*/

const newDiv = document.createElement('div');
newDiv.classList.add('newDiv');
newDiv.setAttribute('style', 'background-color: pink; border: 1px solid black;');
newDiv.innerHTML = '<h1>I\'m in a div!</h1> <br> <p> ME TOO!</p>';

container.appendChild(newDiv);
