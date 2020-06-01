var objPeople = [
    { 
        id : "1",
		username: "exy",
        password: "asdf1234",
        nama: "Exy"
	},
    { 
        id:"2",
		username: "wartono",
        password: "asdf1234",
        nama: "Wartono"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value


	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			localStorage.setItem("nomer",objPeople[i].id);
			console.log(localStorage.getItem("nomer",objPeople[i].id));
			location.replace("dashboard.html")
			return
		}
	}
	console.log("incorrect username or password")
}

