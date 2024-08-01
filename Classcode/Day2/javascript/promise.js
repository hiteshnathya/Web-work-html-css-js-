let promise = new Promise((resolve, reject) => {
    let day = new Date().getDay();
    if (day == 5) {
        resolve("Today is Friday");
    } else {
        reject("Not Friday");
    }
});

promise.then((msg) => {
    document.write(msg);
}).catch((error) => {
    document.write(error);
});