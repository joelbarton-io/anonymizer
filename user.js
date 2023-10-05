import { question } from 'readline-sync';

const User = class {
  constructor() {
    this.email = question('email: ');
    this.password = question('password: ');
    this.firstName = question('firstName: ');
    this.lastName = question('lastName: ');
  }
};

export default User;
