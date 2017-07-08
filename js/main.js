var accounts = [{
	name : 'ritagya',
	pass : 'rishita'
}, 
{
	name : 'dilip',
	pass : 'ritagya'
}, 
{
	name : 'rishita',
	pass : 'shiro'
}
]
	
function login(){
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

		for (i = 0 ; i < accounts.length ; i++){
			if(username == accounts[i].name && password == accounts[i].pass){
				console.log("Welcome " + accounts[i].name);
				return;
			}
		}
		console.log("Invalid username or password");
}

function register(){
	var registerUser = document.getElementById('newUser').value;
	var registerPassword = document.getElementById('newPassword').value;
	var newUser = {
		name : registerUser,
		pass : registerPassword
	}
	accounts.push(newUser);
	console.log(accounts);
}