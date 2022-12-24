async function copyEmailToClipboard() {
  let email = "suzannefsharman@gmail.com";
  try {
    await navigator.clipboard.writeText(email);
    // Alert the copied text
    alert("Copied the text: " + email);
  } catch (err) {
    console.error("Failed to copy: " + email, err);
  }
}

let emailCopied = document.querySelector(".copyEmail");
emailCopied.addEventListener("click", copyEmailToClipboard);
