function callbackFunction(){
    document.write("callback function called ");
}
function callbackFunction1(){
    setTimeout(() => {
 callbackFunction();
    }, 3000);

}
callbackFunction1();
