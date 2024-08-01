function getIP(callback) {
   return fetch("https://api.ipify.org?format=json");
    
}
let promise=getIP();
promise.then(response=>response.json())
    .then(msg=>document.write(JSON.stringify(msg)))
    .catch(error=>document.write(error));