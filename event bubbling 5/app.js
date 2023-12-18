
document.getElementById('taskList').addEventListener('click', function (event) {
    const clickedElement = event.target;
  
    // Check if the clicked element is an <li> inside the <ul>
    if (clickedElement.tagName === 'LI') {
      toggleDoneStatus(clickedElement);
    }
  });
  
  function toggleDoneStatus(liElement) {
    // Toggle the "done" class to mark the task as done or undone
    liElement.classList.toggle('done');
  }
  