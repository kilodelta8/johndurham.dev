// Function to send data to the server
function sendDataToServer(data) {
  console.log('Sending data to server:', data);
  fetch('http://localhost:4000/track', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    console.log('Response status:', response.status); // Log response status
    return response.json();
  })
  .then(result => {
    console.log('Data sent successfully:', result);
  })
  .catch(error => {
    console.error('Error sending data:', error);
  });
}

// Function to get the user's location
function getLocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      callback({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    }, error => {
      console.error('Error getting location:', error);
      callback(null);
    });
  } else {
    console.error('Geolocation is not supported by this browser.');
    callback(null);
  }
}

// Function to get the user's operating system
function getOperatingSystem() {
  const userAgent = navigator.userAgent;
  if (userAgent.indexOf('Win') !== -1) return 'Windows';
  if (userAgent.indexOf('Mac') !== -1) return 'MacOS';
  if (userAgent.indexOf('Linux') !== -1) return 'Linux';
  if (userAgent.indexOf('Android') !== -1) return 'Android';
  if (userAgent.indexOf('like Mac') !== -1) return 'iOS';
  return 'Unknown';
}

// Track time spent on the page
let startTime = Date.now();
window.addEventListener('beforeunload', () => {
  const endTime = Date.now();
  const timeSpent = endTime - startTime;

  getLocation(location => {
    const data = {
      type: 'leave',
      page: window.location.pathname,
      timeSpent: timeSpent,
      operatingSystem: getOperatingSystem(),
      location: location
    };
    console.log('Data to be sent on unload:', data); // Add this line
    sendDataToServer(data);
  });
});