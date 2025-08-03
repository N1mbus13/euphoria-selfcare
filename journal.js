// Journal
const journalForm = document.getElementById('journalForm');
const journalEntriesContainer = document.getElementById('journalEntriesContainer');

journalForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const journalDate = document.getElementById('journalDate').value;
  const journalEntry = document.getElementById('journalEntry').value;

  // Create an object to store the journal entry
  const entry = {
    date: journalDate,
    entry: journalEntry
  };

  // Retrieve existing journal entries from local storage
  let existingEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];

  // Add the new entry to the existing entries
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