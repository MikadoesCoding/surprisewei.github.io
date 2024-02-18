document.addEventListener("DOMContentLoaded", function () {
  var createButton = document.getElementById("create");
  createButton.addEventListener("click", function () {
    console.log("Clicked!"); // Add this line for debugging
    var textarea = document.createElement("textarea");
    textarea.textContent = "This is a sticky note you can type and edit.";
    document.body.insertBefore(textarea, createButton);
  });
});
