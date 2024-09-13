const workoutsContainer = document.querySelector('#allWorkouts');
const todaysWorkoutsContainer = document.querySelector('#todaysWorkouts');
const workouts = JSON.parse(localStorage.getItem('workouts'))

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
    

    
workouts.forEach((workout, index) => {
    //CREATE elements
    const cardElement = document.createElement('div');
    const titleElement = document.createElement('h3');
    const descriptionElement = document.createElement('p');
    
    //BUILD text content, and classess
    cardElement.classList.add('col-md-4', 'workout-card', 'card', 'p-3','mb-4')
    
    titleElement.textContent= `${workout.name}`;
    titleElement.classList.add('card-title');

    descriptionElement.textContent = `${workout.description}`;
    descriptionElement.classList.add('card-text');    

    //PLACE
    cardElement.appendChild(titleElement);
    cardElement.appendChild(descriptionElement);
    workoutsContainer.appendChild(cardElement);

  });



// Initialize workouts from localStorage


function init() {
    const storedWorkouts = JSON.parse(localStorage.getItem('workouts'));
    if (storedWorkouts !== null) {
      workouts = storedWorkouts;
    }
renderWorkouts();
}


// INITIALIZATION
init();