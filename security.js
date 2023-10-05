const RL = require('readline-sync');

class Secure {
  constructor(user) {
    this.user = user; // alias of object referenced by Account's 'user' local variables
  }

  validatePassword(userInputPasswordAttempt) {
    // console.log('this', this);
    if (this.user.password === userInputPasswordAttempt) {
      console.log('Password Accepted')
      return true;
    }
    console.log('ERROR: invalid password');
  }

  updatePassword() {
    this.user.password = RL.question('Enter your new password >> ');
  }

  validateUserAction() {
    // inside of promptLoop, `this` is still the value of `validateUserAction`'s receiver
    RL.promptLoop(this.validatePassword.bind(this), { prompt: 'Enter your account password >> ' });
  }
}

module.exports = Secure;
