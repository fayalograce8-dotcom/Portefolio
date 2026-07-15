     const Hour= new Date().getUTCHours();
    const decalage=new Date().getTimezoneOffset()/60;
    const affichage=(Hour-decalage+24)%24;
if (affichage<12) { alert("Bonjour! Bienvenu dans mon portfolio") 
}
else if (affichage<18) { alert("Bon après-midi! Bienvenu dans mon portfolio")  
} 
else if (affichage<23) {alert("Bonsoir! Bienvenu dans mon portfolio")
}
function Sombre() {
    document.body.classList.toggle("sombre");
    return false;
}
const  button =document.getElementById("buttont");
        button.addEventListener("click", function () {
            window.scrollTo(0, 0);
        });

const buttonModeSombre = document.getElementById("buttonModeSombre");
buttonModeSombre.addEventListener("click", function () {
    this.scrollTo(0, 0);
    if (document.body.classList.toggle("sombre")) {
        buttonModeSombre.textContent = "Mode clair";
    } else {
        buttonModeSombre.textContent = "Mode sombre";
    }
});

function verifier() {
    var nom = document.getElementById("nom").value;

   if (nom) {alert("Assurez-vous  de soumettre le formulaire.")}
   }
function remonter() {window.scrollTo({
        top: 0,
        behavior: "auto"
    })}

function envoyerMessage() {
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (!nom || !email || !message) {  
        alert("Remplissez tous les champs avant d'envoyer.");
        return false;
    }
    alert("Merci " + nom + "! Votre message a bien été envoyé.");
    return false; 
}

