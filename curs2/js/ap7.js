import { User } from "../modules/User.js";
// Modificam nume, email, varsa
let user = new User('1','ion');
user.doarme(7);
console.log(user);
user._email = 'Ion@ion.ro'
user.email = 'dan@dan.ro'
user.varsta = 89;
user.nume = 'Dan';
console.log(user);