console.log("This is tutorial 53");

function greet(name, good){
    console.log(good + name + " is a good boy");
}

let good = "Good morning ";
greet("Kshitij", good);
greet("Harry", good);
greet("Ritik", good);

function greeting(name, msg=" Happy new year"){
    console.log(name + msg);
}

greeting("Ritik"); // Ritik Happy new Year
greeting("Ritik", " Happy Diwali") // Ritik Happy Diwali
