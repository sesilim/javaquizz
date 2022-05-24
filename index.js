//var strsum = prompt ('შეიყვანეთ ანაბრის თანხა', 1000)
//var strpercent = prompt ('შეიყვანეთ საპროცენტო განაკვეთი', 10)
//var sum = parseint(strsum);
//var percent = parseint(strpercent);

//sum = sum + sum * percent/100;
//alert('პროცენტის დარიცხვის შემდეგ ანაბრის თანხა იქნება' +sum)


var people=["tom", "alice", "sam"];
console.log(people[1]); //alice
people[3] = "bob"
console.log(people[3]); //bob

var Array = [
    ["Tom", 25, false],
    ["Bill", 38, true],
    ["Alice", 23, false]
];
var Array1=Array [0][2];

var Array2=Array [1][1];

var Array3=Array [2][2];

console.log("Array1"+"Array2"+"Array3");

var income=prompt ('შეიყვანეთ ხელფასის ოდენობა', 1000)
if (income=1000){
    var message="საშუალო ხელფასი გაქვს";
    alert(message)
}
else if (income>1000){
    alert("მაღალი ხელფასი");
}
else{
    alert("დაბალი ხელფასი");
}