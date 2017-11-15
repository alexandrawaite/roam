const confirmDelete = (event) => {
  let title = document.getElementsByTagName("a")[0].innerHTML;
  if (!confirm(`Are you sure you want to delete ${title}?`)) {
    event.preventDefault()
  }
};

[].forEach.call(document.getElementsByName("delete-button")[0], (link) => {
  link.addEventListener("click", confirmDelete)
})
