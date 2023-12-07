//ES6

class User{
    constructor(username,email,passwored){
        this.username = username;
        this.email = email;
        this.passwored = passwored;
    }
    encryptpasswd(){
        return `${this.passwored}abc`
    }

    changeusername(){
        return `${this.username.toUpperCase()}`
    }
    printuser(){
        console.log(`username: ${this.username}`)
        console.log(`Email: ${this.email}`);
        console.log(`Password: ${this.encryptpasswd()}`);
        }
}

const nayaUser = new User("Anurag","naya@user.com","123")
 
console.log(nayaUser.encryptpasswd());

console.log(nayaUser.changeusername());

console.log(nayaUser.printuser());

// behind he scene

function User1(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User1.prototype.encryptpasswd = function(){
    return `${this.password}abc`
}
User1.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User1("tea", "tea@gmail.com", "123")

console.log(tea.encryptpasswd());
console.log(tea.changeusername());