class Login {


    // Get all required elements in the
    // logn page 
elements = {
    getUsernameField:() => cy.get('.form_group #user-name'),
    getPasswordField:() => cy.get('.form_group #password'),
    getLoginBtn:() => cy.get('#login-button'),

}

// Enter user name
setUsernameAndPassword(username,password){
    
    this.elements.getUsernameField().type(username);
    this.elements.getPasswordField().type(password);


}

// Login
clickLoginBtn(){
    this.elements.getLoginBtn().click()
}



}
export default Login;