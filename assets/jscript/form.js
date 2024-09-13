
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

    // // Create a new workout object
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
});

// formEl.addEventListener('submit', function(event) {
//     event.preventDefault();
//     console.log('Form submit event triggered');
    

//     // Grab input values from the modal
//     const name = nameInput.value.trim();
//     const description = descriptionInput.value.trim();

//     console.log("Name", name);
//     console.log("description", description);

    // // Validation: Check if the fields are not empty
    // if (!workoutName || !description) {
    //     errorElement.textContent = 'Please complete all fields';
    //     return;
    // }

    // // Update the workout object
    // newWorkout.name = workoutName;
    // newWorkout.description = description;

    // // Log the new workout for testing
    // console.log('New Workout:', newWorkout);

    // // Reset the form fields after submission
    // workoutNameInput.value = '';
    // workoutDescription.value = '';
    // errorElement.textContent = ''; // Clear error if it exists

    // // Close the modal (Bootstrap will handle this automatically if using a button with data-bs-dismiss="modal")
    // const modalElement = bootstrap.Modal.getInstance(modal);
    // modalElement.hide();

    // // Optional: Add the new workout to the workouts list dynamically (for now, console log)
// });