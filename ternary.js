const password = 'pas$word'; //length = 8

// if (password.length >= 12) {
//     console.log ('password is very strong so WELCOME!!!');
// } else if (password.length >=8) {
//     console.log ('welcome!!!');
// } else {
//     console.log('SORRY!!! the password is too short');
// }

// ternary operator
password.length >= 12 ? console.log ('password is very strong so WELCOME!!!') : 
password.length >= 8 ? console.log ('welcome!!!') :
console.log('SORRY!!! the password is too short');
