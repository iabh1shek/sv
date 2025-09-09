const people = [
  { firstName: "John", lastName: "Doe", gender: "male", age: 25 },
  { firstName: "Jane", lastName: "Smith", gender: "female", age: 28 },
  { firstName: "Mike", lastName: "Brown", gender: "male", age: 30 },
  { firstName: "Emma", lastName: "Jones", gender: "female", age: 22 }
];

for(let i =0; i < people.length; i++){ 

    if(people[i].gender == "male"){ 
        console.log(people[i].firstName)
    }
}
