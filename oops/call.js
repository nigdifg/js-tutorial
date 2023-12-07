function SetUsername(username){
    //complex database calls
    this.username = username
    console.log("called");
}

function createUser(username,email,password){
    SetUsername.call(this,username)
    this.email = email
    this.password = password
}

const nayaUser = new createUser("NayaUser","naya@user.com","1234")

console.log(nayaUser);