// Health Logging
const healthForm = document.getElementById('healthForm');
const logsContainer = document.getElementById('logsContainer');

healthForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const sleepDuration = document.getElementById('sleepDuration').value;
  const exercise = document.getElementById('exercise').value;
  const mood = document.getElementById('mood').value;

  // Create an object to store the health log data
  const healthLog = {
    sleepDuration: sleepDuration,
    exercise: exercise,
    mood: mood
  };

  // Retrieve existing health logs from local storage
  let existingLogs = JSON.parse(localStorage.getItem('healthLogs')) || [];

  // Add the new health log to the existing logs
  existingLogs.push(healthLog);

  // Store the updated health logs in local storage
  localStorage.setItem('healthLogs', JSON.stringify(existingLogs));

  // Clear the form
  healthForm.reset();

  // Update the logs display
  displayLogs(existingLogs);
});

// Display the health logs
function displayLogs(logs) {
  logsContainer.innerHTML = '';

  logs.forEach((log, index) => {
    const logItem = document.createElement('div');
    logItem.classList.add('log-item');

    const logNumber = document.createElement('span');
    logNumber.classList.add('log-number');
    logNumber.textContent = index + 1;

    const logDetails = document.createElement('div');
    logDetails.classList.add('log-details');

    const sleepDuration = document.createElement('p');
    sleepDuration.textContent = `Sleep Duration: ${log.sleepDuration} hours`;

    const exercise = document.createElement('p');
    exercise.textContent = `Exercise Details: ${log.exercise}`;

    const mood = document.createElement('p');
    mood.textContent = `Mood: ${log.mood}`;

    logDetails.appendChild(sleepDuration);
    logDetails.appendChild(exercise);
    logDetails.appendChild(mood);

    logItem.appendChild(logNumber);
    logItem.appendChild(logDetails);

    logsContainer.appendChild(logItem);
  });
}

// Retrieve health logs from local storage and display them
const existingLogs = JSON.parse(localStorage.getItem('healthLogs')) || [];
displayLogs(existingLogs);