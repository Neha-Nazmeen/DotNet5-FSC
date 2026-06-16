// script.js - implements form handling, events, storage, geolocation, and media events
(function(){
  const form = document.getElementById('registrationForm');
  const phone = document.getElementById('phone');
  const phoneError = document.getElementById('phoneError');
  const eventType = document.getElementById('eventType');
  const eventFee = document.getElementById('eventFee');
  const message = document.getElementById('message');
  const charCount = document.getElementById('charCount');
  const confirmation = document.getElementById('confirmation');
  const clearBtn = document.getElementById('clearPreferences');
  const findNearby = document.getElementById('findNearby');
  const geoResult = document.getElementById('geoResult');
  const promoVideo = document.getElementById('promoVideo');
  const videoStatus = document.getElementById('videoStatus');
  let formDirty = false;

  // Utility: update fee
  function updateFee(val){
    const fees = { concert: '$10', market: '$0', run: '$25' };
    eventFee.textContent = fees[val] || 'Free';
  }

  // Restore preferences from localStorage
  function restorePreferences(){
    const saved = localStorage.getItem('preferredEventType');
    if(saved){
      eventType.value = saved;
      updateFee(saved);
    } else {
      updateFee(eventType.value);
    }
  }

  // Save preference on change
  eventType.addEventListener('change', function(){
    const v = eventType.value;
    localStorage.setItem('preferredEventType', v);
    sessionStorage.setItem('lastEventChangeAt', Date.now());
    updateFee(v);
  });

  // Clear prefs
  clearBtn.addEventListener('click', function(){
    localStorage.removeItem('preferredEventType');
    sessionStorage.clear();
    alert('Preferences cleared');
    restorePreferences();
  });

  // Phone validation on blur
  phone.addEventListener('blur', function(){
    const v = phone.value.trim();
    if(v && !/^\d{10,}$/.test(v)){
      phoneError.textContent = 'Enter at least 10 digits (numbers only)';
    } else phoneError.textContent = '';
  });

  // Character counting for textarea (keypress/key events)
  message.addEventListener('input', function(){
    charCount.textContent = message.value.length;
    formDirty = true;
  });

  // Submit handling: show confirmation in <output>
  form.addEventListener('submit', function(e){
    e.preventDefault();
    // simple validation
    if(phoneError.textContent){ alert('Please fix errors'); return; }
    const name = document.getElementById('name').value;
    const evt = eventType.value;
    confirmation.value = `Thanks ${name}, registered for ${evt}`;
    confirmation.textContent = `Thanks ${name}, registered for ${evt}`; // visible fallback
    formDirty = false;
  });

  // Warn before unload if formDirty
  window.addEventListener('beforeunload', function(e){
    if(formDirty){ e.preventDefault(); e.returnValue = ''; }
  });

  // Image dblclick to enlarge
  document.querySelectorAll('.event-img').forEach(img=>{
    img.addEventListener('dblclick', function(){ this.classList.toggle('enlarged'); });
  });

  // Geolocation
  findNearby.addEventListener('click', function(){
    geoResult.textContent = 'Locating...';
    if(!navigator.geolocation){ geoResult.textContent = 'Geolocation not supported'; return; }
    navigator.geolocation.getCurrentPosition(function(pos){
      const lat = pos.coords.latitude.toFixed(6);
      const lon = pos.coords.longitude.toFixed(6);
      geoResult.textContent = `Latitude: ${lat}, Longitude: ${lon}`;
    }, function(err){
      if(err.code===1) geoResult.textContent = 'Permission denied for location';
      else if(err.code===3) geoResult.textContent = 'Location request timed out';
      else geoResult.textContent = 'Unable to retrieve location';
    }, { enableHighAccuracy:true, timeout:10000, maximumAge:0 });
  });

  // Video canplay
  promoVideo.addEventListener('canplay', function(){ videoStatus.textContent = 'Video ready to play'; });

  // Debugging helpers: log structure
  console.log('Document ready - sections:', document.querySelectorAll('main > section').length);

  // Initialize
  restorePreferences();
})();
