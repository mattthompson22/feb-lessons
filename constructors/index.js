// object literal

// var obj = {
//     key: value
// }

// user object literal

var user1 = {
    name: "Ben",
    email: "bbgrabbag@gmail.com",
    password: "nunyabusiness"
}

var user2 = {
    name: "Heaven",
    email: "headsup7up@yahoo.com",
    password: "54321"
}

// function expression
var User = function (name, email, password, admin = false) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.admin = admin;
    this.changeName = function(newName){
        this.name = newName;
    }
}

// function declaration
// function User() {

// }

// calling the constructor function:

var ben = new User("Ben", "bbgrabbag@gmail.com", "nunyabusiness");
var heaven = new User("Heaven", "heaven@heaven.com", "12345");
var matt = new User("Matt", "mt@mt.mt", "eric7whg87w6348sreg7--ergu7ec6seb7cs7egce-s48t3g876dfb8sr-ac8eadfg86egb78-aec8g6aerg6egcad-aer87dfv68serv7e76ebd")

// this means the same as:
// let ben = {}
// ben.name = "Ben";
// ben.email = "bbgrabbag@gmail.com";
// ben.password = "nunyabusiness";


//pretend you have a fake user database that you want to add new users to:
var database = [{
        name: "john doe",
        email: "joe@nowhere.com",
        password: "723s47r676-3468xber7f6bxf-3486ebfs6erb"
    },
    {
        name: "john doe",
        email: "joe@nowhere.com",
        password: "723s47r676-3468xber7f6bxf-3486ebfs6erb"
    },
    {
        name: "john doe",
        email: "joe@nowhere.com",
        password: "723s47r676-3468xber7f6bxf-3486ebfs6erb"
    }
];

function addToDatabase(user) {
    database.push(user);
}

function displayDatabase() {
    console.log(database);
}

// An example of how you can dynamically create new users using constructor functions:
function createNewUser(name, email, password) {
    let newUser = new User(name, email, password);
    addToDatabase(newUser);
    displayDatabase();
}

createNewUser("Laney", "lanesmagoo@gmail.com", "12346");

// prototypes let you add properties/methods to instances of your constructor even after they've been created.
User.prototype.changePassword = function (newPwd) {
    this.password = newPwd;
}

ben.changePassword("this is my new password");
ben.changeName("Benny and the jets");
console.log(ben);
heaven.changePassword("this is her new password and its slightly better");
console.log(heaven);

var amy = new User("Amy", "amy@amy.com", "amy123");
amy.changePassword("new pwd");
console.log(amy);

//constructors are FUNCTIONS
// they generate new INSTANCES of objects

// declaring / defining constructors

function User(name){
    this.name = name; 
}

// var User = function(name){
//     this.name = name;
// }

// instantiating a constructor:

var catherine = new User("Catherine");

//prototypes:

User.prototype.speak = function(){
    console.log("My name is " + this.name);
}

catherine.speak();


