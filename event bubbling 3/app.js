document.getElementById('parentList').addEventListener('click', function (event) {
    // Check if the clicked element is an <li> inside the <ul>
    if (event.target.tagName === 'LI') {
      console.log('Clicked on:', event.target.textContent);
    }
  });
  