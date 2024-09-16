
// DEPENDENCIES (DOM ELEMENTS)
// workout object
const nameInput = document.querySelector('#title');
const descriptionInput= document.querySelector('#content');
const errorElement = document.getElementById('error');
const formEl = document.querySelector('#form');
let newWorkout = {
    name: '',
    content: ''
}

//USER INTERACTIONS

// When the user submits the form
formEl.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const nameInput1 = nameInput.value;
    const descriptionInput1 = descriptionInput.value;

    console.log(nameInput1);
    console.log(descriptionInput1);

    // Validation: Check if the fields are not empty
    if (!nameInput1 || !descriptionInput1) {
        document.getElementById('error').innerHTML = 'Please complete all fields';
        return;
    }

    // Create a new workout object   
    const newWorkout = {
        name: nameInput1,
        description: descriptionInput1,
    };
    console.log(newWorkout);

    // Get existing workouts from localStorage or create a new array if none exist
    const workouts = JSON.parse(localStorage.getItem('workouts')) || [];

    // Add the new workout to the array
    workouts.push(newWorkout);

    // Store the updated workouts array back in localStorage
    localStorage.setItem('workouts', JSON.stringify(workouts));

    alert('Workout saved successfully!');
    // Clear the form fields
    nameInput.value = '';
    descriptionInput.value = '';
    window.location.reload();

});