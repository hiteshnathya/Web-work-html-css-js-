function toCelsius(farenheite){
    return (5/9)*(farenheite -32);
}
let v =prompt("Enter the farenheit value");
let value=toCelsius(v);
console.log(value);
document.write(value);
function changeText()
{
    document.getElementById("demo").innerHTML="Welcome to JS";
}