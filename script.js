//your JS code here. If required.

function getDOMLevelById(elementId) {
  const element = document.getElementById(elementId);

  if (!element) {
    return -1; // Element with the given ID not found
  }

  let level = 0;
  let currentNode = element;

  while (currentNode !== document.body) {
    currentNode = currentNode.parentNode;
    level++;
    if (level > 1000) {
      return -1; // Maximum depth exceeded
    }
  }

  return level;
}

// Usage example:
const elementId = "level"; // Change this to the ID you want to find
const domLevel = getDOMLevelById(elementId);

if (domLevel === -1) {
  console.log("Element not found or maximum depth exceeded.");
} else {
  console.log(`DOM level of element with ID '${elementId}' is ${domLevel}.`);
}
