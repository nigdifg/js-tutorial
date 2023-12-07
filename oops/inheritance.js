class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.passwored = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const nayaUser = new Teacher("Anurag","anu@gmail.com","123");

nayaUser.addCourse()

const Puranauser = new Teacher("Maurya","mau@gmail.com","123767");
Puranauser.addCourse()

const masalaChai = new User("masalaiiiChai")

masalaChai.logMe()

console.log(Puranauser===masalaChai);
console.log(Puranauser instanceof User);