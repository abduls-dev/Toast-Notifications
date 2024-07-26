function showToast(type) {
  const toast = document.getElementById("toast");

  // Set the toast text and class based on the button clicked
  switch (type) {
    case "success":
      toast.textContent = "Success: Operation completed successfully!";
      toast.className = "toast show success";
      break;
    case "error":
      toast.textContent = "Error: Something went wrong!";
      toast.className = "toast show error";
      break;
    case "invalid":
      toast.textContent = "Invalid: Invalid input provided!";
      toast.className = "toast show invalid";
      break;
  }

  // Remove the 'show' class after 3 seconds
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}
