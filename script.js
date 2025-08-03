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

// Calendar
$(document).ready(function() {
  $('#calendar').fullCalendar({
    // Calendar options
  });
});

// Meditation
const startMeditationButton = document.getElementById('startMeditation');
const pauseMeditationButton = document.getElementById('pauseMeditation');
const resetMeditationButton = document.getElementById('resetMeditation');
const meditationAudio = document.getElementById('meditationAudio');

startMeditationButton.addEventListener('click', function() {
  meditationAudio.play();
});

pauseMeditationButton.addEventListener('click', function() {
  meditationAudio.pause();
});

resetMeditationButton.addEventListener('click', function() {
  meditationAudio.currentTime = 0;
});


// Journal
const journalForm = document.getElementById('journalForm');
const journalEntriesContainer = document.getElementById('journalEntriesContainer');

journalForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const journalDate = document.getElementById('journalDate').value;
  const journalEntry = document.getElementById('journalEntry').value;

  //  object to store the journal entry
  const entry = {
    date: journalDate,
    entry: journalEntry
  };

  // Retrieve existing journal entries from local storage
  let existingEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];

  //  new entry to the existing entries
  existingEntries.push(entry);

  // Store the updated journal entries in local storage
  localStorage.setItem('journalEntries', JSON.stringify(existingEntries));

  // Clear the form
  journalForm.reset();

  // Update the entries display
  displayJournalEntries(existingEntries);
});

// Display the journal entries
function displayJournalEntries(entries) {
  journalEntriesContainer.innerHTML = '';

  entries.forEach((entry, index) => {
    const entryItem = document.createElement('div');
    entryItem.classList.add('entry-item');

    const entryDate = document.createElement('h3');
    entryDate.textContent = `Date: ${entry.date}`;

    const entryContent = document.createElement('p');
    entryContent.textContent = entry.entry;

    entryItem.appendChild(entryDate);
    entryItem.appendChild(entryContent);

    journalEntriesContainer.appendChild(entryItem);
  });
}

// Retrieve journal entries from local storage and display them
const existingEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
displayJournalEntries(existingEntries);


// Fade out loading screen
const loader = document.getElementById('loader');
const content = document.getElementById('content');

window.addEventListener('load', function() {
  setTimeout(function() {
    loader.style.opacity = 0;
    setTimeout(function() {
      loader.style.display = 'none';
      content.style.display = 'block';
    }, 500);
  }, 2000);
});

// Toggle Mode
const container = document.querySelector('.container');
const toggleModeButton = document.getElementById('toggleModeButton');

toggleModeButton.addEventListener('click', function() {
  container.classList.toggle('light-mode');
  container.classList.toggle('dark-mode');
});

