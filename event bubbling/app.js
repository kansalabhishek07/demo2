document.getElementById('grandparent').addEventListener('click', function () {
    console.log('Grandparent Element Clicked!');
  });
  
  document.getElementById('parent').addEventListener('click', function () {
    console.log('Parent Element Clicked!');
  });
  
  document.getElementById('child').addEventListener('click', function () {
    console.log('Child Element Clicked!');
  });
  
  document.getElementById('innerChild').addEventListener('click', function (event) {
    console.log('Inner Child (Button) Clicked!');
    event.stopPropagation(); 
  });
  
  