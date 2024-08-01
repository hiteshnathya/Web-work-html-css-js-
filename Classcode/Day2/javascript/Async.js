function sync(){
document.write("One"+"<br>");
document.write("Two"+"<br>");
document.write("Three","<br>");
}
sync();
function async(){
    setTimeout(()=>
         {
        Document.write("One"+"<br>"+" ");},3000);
        document.write("Two"+"<br>");
document.write("Three","<br>");
    }

    async();