//possible ways to create objects in js
var data = {}
function Person(name) {
    this.name = name
}

var data = new Object()
var data =Object.create(null)

// what is prototype chain


// difference between Call, Apply and Bind
//call we use parameters
var employee1 = {firstName: 'John', lastName: 'Rogers'}

function invite(greeting1, greeting2) {
    console.log(`${greeting1} ${this.firstName} ${greeting2}`)
}
invite.call(employee1, 'Hello', 'How are you')

//apply we use array
var employee1 = {firstName: 'John', lastName: 'Rogers'}

function invite(greeting1, greeting2) {
    console.log(`${greeting1} ${this.firstName} ${greeting2}`)
}
invite.apply(employee1, ['hello', 'how are you'])

//bind
