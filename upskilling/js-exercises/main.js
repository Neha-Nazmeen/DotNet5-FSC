// main.js - Implements JavaScript exercises for the portal
console.log('Welcome to the Community Portal');
window.addEventListener('load', () => alert('Page fully loaded'));

// Mock data fetch endpoint (events.json will be used)
const eventsUrl = './events.json';
let events = []; // in-memory events list

// --- 2. Data types & basic operations ---
const sampleEventName = 'Community Concert';
const sampleEventDate = '2026-07-01';
let sampleSeats = 100;
console.log(`Event: ${sampleEventName} on ${sampleEventDate}, seats: ${sampleSeats}`);

// --- 5. Event class and prototype method ---
class EventItem {
  constructor(id, name, date, seats, category, location) {
    this.id = id;
    this.name = name;
    this.date = new Date(date);
    this.seats = seats;
    this.category = category;
    this.location = location;
  }
}
EventItem.prototype.checkAvailability = function(){ return this.seats > 0; };

// --- DOM references ---
const eventsListEl = document.getElementById('eventsList');
const spinner = document.getElementById('spinner');
const selectEvent = document.getElementById('selectEvent');
const registerForm = document.getElementById('registerForm');
const regMessage = document.getElementById('regMessage');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');

// --- Utility functions ---
function showSpinner(){ spinner.classList.remove('hidden'); }
function hideSpinner(){ spinner.classList.add('hidden'); }

function isUpcoming(event){
  const now = new Date();
  return event.date > now && event.seats > 0;
}

function renderEvents(list){
  eventsListEl.innerHTML = '';
  if(!list.length) { eventsListEl.textContent = 'No events to show.'; return; }
  list.forEach(e => {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
      <h3>${e.name}</h3>
      <div>When: ${e.date.toLocaleDateString()}</div>
      <div>Seats: <span class="seats" data-id="${e.id}">${e.seats}</span></div>
      <div>Category: ${e.category}</div>
      <div>Location: ${e.location}</div>
      <button data-id="${e.id}" class="register-now">Register</button>
    `;
    eventsListEl.appendChild(card);
  });
}

function populateSelect(list){
  selectEvent.innerHTML = '';
  list.forEach(e => {
    const opt = document.createElement('option'); opt.value = e.id; opt.textContent = `${e.name} (${e.date.toLocaleDateString()})`;
    selectEvent.appendChild(opt);
  });
}

// --- 3. Looping and filtering (show only upcoming with seats) ---
function displayUpcoming(){
  const upcoming = events.filter(isUpcoming);
  renderEvents(upcoming);
  populateSelect(upcoming);
}

// --- 4. addEvent, registerUser, filterEventsByCategory ---
function addEvent(data){
  const id = data.id || Date.now().toString();
  const ev = new EventItem(id, data.name, data.date, data.seats, data.category, data.location);
  events.push(ev);
  return ev;
}

// closure to track total registrations per category
function registrationTracker(){
  const counts = {}; return function(category){ counts[category] = (counts[category]||0) + 1; return counts[category]; } }
const trackReg = registrationTracker();

function filterEventsByCategory(category, cb){
  const filtered = category === 'all' ? events : events.filter(e => e.category === category);
  if(cb && typeof cb === 'function') cb(filtered);
  return filtered;
}

// --- 6. Array methods examples ---
function addSampleEvents(){
  // push
  addEvent({ id:'1', name:'Summer Concert', date:'2026-07-10', seats:150, category:'music', location:'Riverside Park' });
  addEvent({ id:'2', name:'Farmers Market', date:'2026-06-25', seats:200, category:'market', location:'Town Square' });
  addEvent({ id:'3', name:'Charity Run', date:'2026-05-01', seats:0, category:'sports', location:'City Track' });
  addEvent({ id:'4', name:'Baking Workshop', date:'2026-08-05', seats:25, category:'workshop', location:'Community Center' });
}

// --- 7. DOM event delegation for Register buttons ---
eventsListEl.addEventListener('click', function(e){
  if(e.target.matches('.register-now')){
    const id = e.target.getAttribute('data-id');
    try{
      registerUser(id, { name: 'Guest', email: 'guest@example.com' });
    } catch(err){ console.error('Registration error', err); alert('Registration failed'); }
  }
});

// --- 4 & 11. registerUser with try/catch, seat decrement ---
function registerUser(eventId, user){
  const ev = events.find(x => x.id === eventId);
  if(!ev) throw new Error('Event not found');
  if(ev.seats <= 0) throw new Error('No seats available');
  // decrement
  ev.seats--;
  // update UI seats display
  const seatSpan = document.querySelector(`.seats[data-id="${ev.id}"]`);
  if(seatSpan) seatSpan.textContent = ev.seats;
  trackReg(ev.category); // closure usage
  regMessage.textContent = `Registered for ${ev.name}. Remaining seats: ${ev.seats}`;
  // simulate server POST (AJAX)
  simulatePostRegistration({ eventId, user }).then(r=> console.log('Server ack', r)).catch(err=> console.error('Server error', err));
}

// --- 12. simulate fetch POST using fetch + setTimeout ---
function simulatePostRegistration(payload){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      // random failure simulation
      if(Math.random() < 0.05) reject('random failure'); else resolve({ status:'ok', payload });
    }, 800);
  });
}

// --- 9. Fetch events (then/catch) ---
function fetchEventsClassic(){
  showSpinner();
  fetch(eventsUrl).then(resp => {
    if(!resp.ok) throw new Error('Network response not ok');
    return resp.json();
  }).then(data => {
    data.forEach(d => addEvent(d));
    displayUpcoming();
  }).catch(err => console.error('Fetch error', err)).finally(()=> hideSpinner());
}

// --- 9. Async/Await version ---
async function fetchEvents(){
  showSpinner();
  try{
    const resp = await fetch(eventsUrl);
    if(!resp.ok) throw new Error('Network response not ok');
    const data = await resp.json();
    data.forEach(d => addEvent(d));
    // demo ES6 spread clone
    const clone = [...events];
    console.log('Cloned events length', clone.length);
    displayUpcoming();
  }catch(err){ console.error('Async fetch error', err); }
  finally{ hideSpinner(); }
}

// --- 8. Filters and search (keydown) ---
categoryFilter.addEventListener('change', function(){
  const cat = this.value;
  filterEventsByCategory(cat, function(list){ renderEvents(list.filter(isUpcoming)); populateSelect(list.filter(isUpcoming)); });
});

searchInput.addEventListener('keydown', function(e){
  if(e.key === 'Enter'){
    const q = this.value.trim().toLowerCase();
    const results = events.filter(ev => ev.name.toLowerCase().includes(q) && isUpcoming(ev));
    renderEvents(results);
  }
});

// --- 11. Form handling ---
registerForm.addEventListener('submit', function(e){
  e.preventDefault();
  const form = e.target.elements;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const eventId = form.event.value;
  if(!name || !email) { regMessage.textContent = 'Please fill required fields'; return; }
  try{ registerUser(eventId, { name, email }); }
  catch(err){ regMessage.textContent = err.message; }
});

// --- 14. jQuery example (if loaded) ---
if(window.jQuery){
  $('#registerBtn').click(() => console.log('jQuery: register button clicked'));
}

// --- initialize UI ---
(function init(){
  // add sample events if fetch not available
  addSampleEvents();
  // populate category filter options dynamically
  const categories = Array.from(new Set(events.map(e=>e.category)));
  categories.forEach(c => { const o = document.createElement('option'); o.value=c; o.textContent=c; categoryFilter.appendChild(o); });

  // try fetching remote events.json; fallback to existing in-memory
  fetchEvents();
})();

// Expose functions for console testing
window.addEventListener('load', ()=>{ window._portal = { events, addEvent, registerUser, filterEventsByCategory }; });
