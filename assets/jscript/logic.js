
// // This function renders blog posts to the page
function renderWorkouts() {
    // Clear existing content in the container
    workoutsContainer.innerHTML = '';
      // Check if there are posts to display
  if (workouts.length === 0) {
    const noWorkoutsMessage = document.createElement('p');
    noWorkoutsMessage.textContent = 'No workouts yet...';
    workoutsContainer.appendChild(noWorkoutsMessage);
    return;
  }
}

// Initialize workouts from localStorage
console.log(JSON.parse(localStorage.getItem('workouts')));

function init() {
    const storedWorkouts = JSON.parse(localStorage.getItem('workouts'));
    if (storedWorkouts !== null) {
      workouts = storedWorkouts;
    }
renderWorkouts();
}

// INITIALIZATION
init();