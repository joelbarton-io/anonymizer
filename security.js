/* eslint-disable no-console */

import { question, promptLoop } from 'readline-sync';

class Secure {
  constructor(user) {
    this.user = user; // alias of object referenced by Account's 'user' local variables
  }

  validatePassword(userInputPasswordAttempt) {
    if (this.user.password === userInputPasswordAttempt) {
      console.log('Password Accepted');
      return true;
    }
    console.log('ERROR: invalid password');
    return false;
  }

  updatePassword() {
    this.user.password = question('Enter your new password >> ');
  }

  validateUserAction() {
    // inside of promptLoop, `this` is still the value of `validateUserAction`'s receiver
    promptLoop(this.validatePassword.bind(this), { prompt: 'Enter your account password >> ' });
  }
}

export default Secure;
