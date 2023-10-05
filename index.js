/* eslint-disable no-console */

import User from './user';
import Secure from './security';

const Account = (function Account() {
  function anonymizer() {
    let length = 16;
    function generateRandom() {
      const POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      return POOL.charAt(Math.floor(Math.random() * POOL.length));
    }

    const result = [];
    while (length > 0) {
      result.push(generateRandom());
      length -= 1;
    }
    return result.join('');
  }

  let user;
  let secure; // both are private and accessible through closure

  return {
    init() {
      user = new User();
      secure = new Secure(user);
      this.displayName = anonymizer();
      console.log('New User Account being initialized...');
      return this;
    },
    firstName() {
      console.log('User Action: requesting first name.')
      secure.validateUserAction();
      return `First name: ${user.firstName}`;
    },
    lastName() {
      console.log('User Action: requesting last name.')
      secure.validateUserAction();
      return `Last name: ${user.lastName}`;
    },
    email() {
      console.log('User Action: requesting email address.')
      secure.validateUserAction();
      return `Email Address: ${user.email}`;
    },
    reanonymize() {
      console.log('User Action: requesting new display name.')
      secure.validateUserAction();
      this.displayName = anonymizer();
      console.log(`Display name successfully updated to: ${this.displayName}`);
      return true;
    },
    resetPassword() {
      console.log('User Action: requesting a password reset.')
      secure.validateUserAction();
      secure.updatePassword();
      console.log('User Action Successful: Updated Password');
      return true;
    },
  };
}());

const fooBar = Object.create(Account).init();

console.log(fooBar.firstName); // returns the firstName function
console.log(fooBar.email); // returns the email function
console.log(fooBar.firstName()); // logs 'foo'
console.log(fooBar.firstName()); // logs 'Invalid Password'
console.log(fooBar.displayName); // logs 16 character sequence
console.log(fooBar.resetPassword()); // logs 'Invalid Password';
console.log(fooBar.resetPassword()); // logs true

const { displayName } = fooBar;
console.log(fooBar.reanonymize()); // logs true
console.log(displayName === fooBar.displayName); // logs false
