// Doubt Topic: Manipulating Object of Objects

let person = {
    name: 'John',
    age: 30,
    address: { fno:123, city:"chandigarh", pincode : 123456},
    hobbies: ['singing', 'dancing', 'sleeping'],
}

// Destructure the address
// let { fno, city, pincode } = person.address
// fno, city, pincode are reference of person.address
// So destructure will not work for update Operation

person.address.city = "Mumbai"
console.log(person.address)

person.hobbies[2] = "coding"
console.log(person.hobbies)