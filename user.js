const RL = require('readline-sync');

const User = class {
  constructor() {
    this.email = RL.question('email: ');
    this.password = RL.question('password: ');
    this.firstName = RL.question('firstName: ');
    this.lastName = RL.question('lastName: ');
  }
}

module.exports = User;
