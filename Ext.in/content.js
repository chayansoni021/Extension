// Selector for detecting YouTube ad elements
const targetSelector = ".ad-simple-attributed-string.ytp-ad-badge__text--clean-player.ytp-ad-badge__text--clean-player-with-light-shadow";
console.log("Extension Loaded");

// Variables to track navigation state
let previousUrl = document.referrer; // The referring URL
let currentUrl = window.location.href; // Current URL
let actionTaken = false; // Flag to prevent repeated actions

// Function to detect the target element
const detectAndAct = () => {
  const targetElement = document.querySelector(targetSelector);

  if (targetElement && !actionTaken) {
    console.log("Ad element detected!");

    // Simulate navigation actions
    const navigateBack = () => {
      console.log("Simulating back navigation...");
      previousUrl = window.location.href; // Update the previous URL before navigating
      window.history.back();
    };

    const navigateForward = () => {
      console.log("Simulating forward navigation...");
      currentUrl = window.location.href; // Update the current URL before navigating forward
      window.history.forward();
    };

    // Perform the navigation actions
    navigateBack();
    setTimeout(navigateForward, 1000); // Adjust delay as needed

    // Mark the action as taken to avoid repeats
    actionTaken = true;

    // Reset the action flag after some time (e.g., 5 seconds) for subsequent detections
    setTimeout(() => {
      actionTaken = false;
      console.log("Action flag reset, ready for next detection.");
    }, 5000);
  }
};

// Continuously monitor for the target element
const observer = new MutationObserver(() => {
  detectAndAct();
});

// Observe changes in the document
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Initial detection
detectAndAct();
