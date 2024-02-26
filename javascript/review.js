document.addEventListener("DOMContentLoaded", function() {
  // Get the form and comment display elements
  var commentForm = document.getElementById("commentForm");
  var commentDisplay = document.getElementById("commentDisplay");

  // Add a submit event listener to the form
  commentForm.addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the values of the full name and comment input fields
    var fullName = document.getElementById("fullname").value;
    var commentText = document.getElementById("comment").value;

    // Create a new paragraph element for the comment text
    var commentPara = document.createElement("p");

    // Set the text content of the paragraph element with the comment information
    commentPara.innerHTML = "<strong>" + fullName + ":</strong> " + commentText;

    // Reset the form
    commentForm.reset();

    // Append the paragraph element to the existing comment display container
    commentDisplay.appendChild(commentPara);
  });
});

