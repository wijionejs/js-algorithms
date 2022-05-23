function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getInfo = function() {
    return this.firstName + ' ' + this.lastName;
}

function Customer(f, lastName, phoneNumber) {
    Person.call(this, firstName, lastName);
    this.phoneNumber = phoneNumber
}

Customer.prototype = Object.create(Person.prototype);

Customer.prototype.getInfo = function() {
    return this.firstName + ' ' + this.lastName + ' ' + this.phoneNumber
};

Customer.prototype.constructor = Customer;