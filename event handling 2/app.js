// app.js
const container = document.getElementById('container');

// Add a click event listener to the container (parent)
container.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    console.log('Button Clicked!');
  }
});

// Dynamically create a button and append it to the container
const dynamicButton = document.createElement('button');
dynamicButton.textContent = 'Click me dynamically';
container.appendChild(dynamicButton);
