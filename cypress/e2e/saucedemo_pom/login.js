class Login {
usernameField = '.form_group #user-name';
passwordField = '.form_group #password';
loginBtn = '#login-button';

// setUsername: This method sets the username field
//  with the given username
setUsername(username){
    cy.get(this.usernameField).type(username);

}

// setPassword: This method sets the password field 
// with the given password.
setPassword(password){
    cy.get(this.passwordField).type(password);

}

// clickLoginBtn: This method clicks on the login 
// button.
clickLoginBtn(){
    cy.get(this.loginBtn).click()
}



}