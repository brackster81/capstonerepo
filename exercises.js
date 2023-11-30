// exercises.js

const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=200';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'insert api key provided',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

async function fetchAndDisplayExercises() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        displayExercises(data);
    } catch (error) {
        console.error(error);
    }
}

function displayExercises(exercises) {
    const exerciseDropdown = document.getElementById('exerciseDropdown');
    const exerciseDetails = document.getElementById('exerciseDetails');

    // Clear previous content
    exerciseDropdown.innerHTML = '';
    exerciseDetails.innerHTML = '';

    // Populate dropdown with exercise names
    exercises.forEach((exercise, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = exercise.name;
        exerciseDropdown.add(option);
    });

    // Display details for the selected exercise
    exerciseDropdown.addEventListener('change', () => {
        const selectedIndex = exerciseDropdown.value;
        const selectedExercise = exercises[selectedIndex];
        renderExerciseDetails(selectedExercise);
    });
}

function renderExerciseDetails(exercise) {
    const exerciseDetails = document.getElementById('exerciseDetails');
    exerciseDetails.innerHTML = ''; // Clear previous content

    const detailsList = document.createElement('ul');

    // Iterate over exercise details and create list items
    for (const [key, value] of Object.entries(exercise)) {
        if (key === 'gifUrl') {
            // Handle GIFs separately
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${key}:</strong> <img src="${value}" alt="${exercise.name}">`;
            detailsList.appendChild(listItem);
        } else if (key === 'secondaryMuscles' || key === 'instructions') {
            // Handle arrays
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${key}:</strong>`;
            const sublist = document.createElement('ul');
            value.forEach(subvalue => {
                const subListItem = document.createElement('li');
                subListItem.textContent = subvalue;
                sublist.appendChild(subListItem);
            });
            listItem.appendChild(sublist);
            detailsList.appendChild(listItem);
        } else {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${key}:</strong> ${value}`;
            detailsList.appendChild(listItem);
        }
    }

    exerciseDetails.appendChild(detailsList);
}


// Fetch and display exercises on page load
document.addEventListener('DOMContentLoaded', fetchAndDisplayExercises);
