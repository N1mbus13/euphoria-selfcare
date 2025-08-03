// Calendar JavaScript

const eventForm = document.getElementById("eventForm");
const eventNameInput = document.getElementById("eventName");
const eventDateInput = document.getElementById("eventDate");
const eventsList = document.getElementById("eventsList");

// Load events from local storage
const events = JSON.parse(localStorage.getItem("events") || "[]");

function saveEventsToLocalStorage() {
  localStorage.setItem("events", JSON.stringify(events));
}

function displayEvents() {
  eventsList.innerHTML = "";
  events.forEach((event) => {
    const li = document.createElement("li");
    li.textContent = `${event.name} - ${event.date}`;
    eventsList.appendChild(li);
  });
}

function addEvent(event) {
  events.push(event);
  saveEventsToLocalStorage();
  displayEvents();
}

eventForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const eventName = eventNameInput.value;
  const eventDate = eventDateInput.value;
  const event = { name: eventName, date: eventDate };
  addEvent(event);
  eventNameInput.value = "";
  eventDateInput.value = "";
});

displayEvents();
