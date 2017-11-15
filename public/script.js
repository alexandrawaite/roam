const deleteButtons = document.getElementsByClassName('delete-button');

function confirmDelete(post) {
  const button = post.target;
  const title = button.parentElement.previousElementSibling.previousElementSibling;
  if (!confirm(`Are you sure you want to delete ${title.innerText}?`)) {
    event.preventDefault()
  }
}

for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener('click', confirmDelete);
}
