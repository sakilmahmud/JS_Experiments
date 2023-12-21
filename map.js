const arr = ['Refaque', 'Jahin', 'Ayan', 'Inaya', 'Ziyan', 'Waniya', 'Zainab', 'Ayjan'];

const familyObj = [
    {
        name: "Refaque",
        age: 14
    },
    {
        name: "Jahin",
        age: 8.5
    },
    {
        name: "Ayan",
        age: 7
    },
    {
        name: "Inaya",
        age: 3
    },
    {
        name: "Ziyan",
        age: 2.9
    },
    {
        name: "Waniya",
        age: 2.6
    },
    {
        name: "Zainab",
        age: 2.3
    },
    {
        name: "Ayjan",
        age: 2
    },
];

/* arr.map((obj, index) => {
    console.log(obj, index);
}); */

/* familyObj.map((obj, index) =>{
    console.log("Name: ",obj.name);
    console.log("Age: ",obj.age);
}) */

const newArr = [...arr, ["Leenat", "Isha"], "Madina"]; // js Spread Operator

newArr.push("Makka");
newArr.push("Puchu");
/* newArr.pop();
newArr.pop();
newArr.pop(); */

console.log(arr);
console.log(newArr);


//destructure array
const [a, , c, , , , , , g] = newArr;

console.log(g);

//destructure objects

const myObj = {
    name: "Aayan",
    address: "Usthi"
};

const {name:refuName, address} = myObj;

/* console.log(refuName);
console.log(address); */


// backtick

console.log(`Hey ${refuName} how are you and you are from ${address}`);