async function getIP() {
    try {
        let response = await fetch("https://api.ipify.org?format=json");
        let msg = await response.json();
        document.write(JSON.stringify(msg));
    } catch (error) {
        document.write(error);
    }
}

getIP();