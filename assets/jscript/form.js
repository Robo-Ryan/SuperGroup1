

// DEPENDENCIES (DOM ELEMENTS)
// workout object
const workoutNameInput = document.querySelector('#workoutName');
const workoutDescription= document.querySelector('#content');
const errorElement = document.getElementById('error');
const formEl = document.querySelector('#form');
let newWorkout = {
    workoutName: '',
    workoutDescription: ''
}
//modal
const modal = document.getElementById("myModal");
const openModalLink = document.getElementById("openModal");
const closeButton = document.getElementsByClassName("close")[0];

newWorkout.workoutName = "Arms";
newWorkout.workoutDescription = "2reps, 10lbs";

console.log(newWorkout);



// let workouts = [];

// allWorkouts.innerHTML = '';
//   workoutCountSpan.textContent = workouts.length;


//USER INTERACTIONS

// When the user clicks on the nav bar link, open the modal
openModalLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default navigation behavior
    modal.style.display = "block"; // Show the modal
  });
  
  // When the user clicks on <span> (x), close the modal
  closeButton.onclick = function() {
    modal.style.display = "none"; // Hide the modal
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none"; // Hide the modal
    }
  }
  
  

