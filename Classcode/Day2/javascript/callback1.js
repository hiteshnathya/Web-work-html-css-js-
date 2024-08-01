// Function to display a message
function display(message) {
    document.write(JSON.stringify(message));
}

// Function to get the IP address
function getIP(callback) {
    fetch("https://api.ipify.org?format=json")
      .then(response => response.json())
      .then(message => callback(message));
}

// Call the getIP function with the display function as a callback
getIP(display);