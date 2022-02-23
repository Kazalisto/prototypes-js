// Object Prototypes
//Person.prototypes

//Person constructor
function Person(firstname, lastname, job ){
    this.firstname = firstname;
    this.lastname = lastname;
    this.job = job

}

//Get full name
Person.prototype.getFullName = function (){
    return `${this.firstname} ${this.lastname}`
}

//Gets married
Person.prototype.getsMarried = function(newLastName){
    this.lastname = newLastName;
}

const john = new Person('John', 'Doe', 'Accountant')
const mary = new Person('Mary', ' J. Blige', 'Singer')

console.log(mary);

console.log(mary.getFullName());

mary.getsMarried('Smith');

console.log(mary.getFullName());

