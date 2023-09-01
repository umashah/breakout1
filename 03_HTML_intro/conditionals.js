let age=80

if (age <= 17) {
    console.log("Underage");
} else if (age<=65) {
    console.log("Insurable");
} else {
    console.log("out of range");
}

let result = age <= 10 ? "Underage" : age <= 65 ? "Insurable" : "Out of range";
console.log(result);
