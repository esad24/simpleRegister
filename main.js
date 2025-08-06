function login() {
    
}

function register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("passwort").value;

    if(username.length < 3) {
        alert("Username muss mindestens 3 Zeichen enthalten.");
        return;
    }
    if(password.length < 5) {
        alert("Passwort muss mindestens 5 Zeichen enthalten.");
        return;
    }

    fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password})
    })
    .then(response => {
        if(!response.ok) throw new Error("Serverfehler");
        return response.json();
    })
    .then(data => {
        alert(data.message);
    })
    .catch(err => {
        alert("Fehler: " + err.message);
    });
}
