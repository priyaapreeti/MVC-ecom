export default class userModel {
  constructor(name, email, pass, type, id) {
    this.name = name;
    this.email = email;
    this.pass = pass;
    this.type = type;
    this.id = id;
  }
  static getAll() {
    return users;
  }
  static signup(name, email, pass, type) {
    const newUser = new userModel(name, email, pass, type, users.length + 1);
    users.push(newUser);
    return newUser;
  }
  static signin(email, pass) {
    return users.find((user) => user.email === email && user.pass === pass);
  }
}
const users = [
  new userModel("preeti", "preeti@gmail.com", "preeti", "admin", 1),
  new userModel("admin", "admin@gmail.com", "admin", "seller", 2),
];
