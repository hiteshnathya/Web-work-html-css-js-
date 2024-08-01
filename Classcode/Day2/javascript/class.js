class student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log(this.name);
        console.log(this.age);
        document.write(this.name+ "<br>"+this.age+"<br>");
    }

}
const s1= new student("hitesh",22);
const s2= new student("jay",33);
s1.display();
s2.display();