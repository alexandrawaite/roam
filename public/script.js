console.log("Sanity Check~~~");
const deleteButtons = document.getElementsByClassName('delete-button');

console.log(":: ==>", deleteButtons);

function confirmDelete(post) {
  const button = post.target;
  console.log("button", button);
  const title = button.parentElement.previousElementSibling.previousElementSibling;
  confirm(`Are you sure you want to delete ${title.innerText}?`)
  // if (!confirm(`Are you sure you want to delete ${title.innerText}?`)) {
  //   event.preventDefault()
  // }
}

// deleteButtons.forEach.call(document.getElementsByName("delete-button")[0], (link) => {
//   link.addEventListener("click", confirmDelete)
// })

for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener('click', confirmDelete);
}
