const workoutsContainer = document.querySelector('#allWorkouts');
const todaysWorkoutsContainer = document.querySelector('#todaysWorkouts');


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
    
// workouts.forEach((workout, index) => {
//     const divElement = document.createElement('div');
//     const TitleElement = document.createElement('h3');
//     TitleElement.textContent = post.title;

    
//     const postContentElement = document.createElement('p');
//     postContentElement.textContent = post.content;
//     blockquoteElement.appendChild(postContentElement);

//     const footerElement = document.createElement('footer');
//     const footerTextElement = document.createElement('p');
//     footerTextElement.innerHTML = `Posted by: <strong>${post.username}</strong>`;
//     footerElement.appendChild(footerTextElement);

//     articleElement.appendChild(postTitleElement);
//     articleElement.appendChild(blockquoteElement);
//     articleElement.appendChild(footerElement);
//     sectionElement.appendChild(articleElement);

//     blogPostsContainer.appendChild(sectionElement);
//   });
//   //
// }

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