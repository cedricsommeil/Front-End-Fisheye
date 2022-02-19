
/**********Le Formulaire******************/

function displayModal() {
    const modal = document.getElementById("contact_modal");
	  modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

document.querySelector("#close-modal-contact").addEventListener("click", function(){

  closeModal();

});



document.querySelector('.envoi-message').addEventListener('click', function(e){

    e.preventDefault();

    const prenom = document.getElementById('first').value;
    const prenomErreur = document.getElementById('prenom_erreur');
    const nom = document.getElementById('last').value;
    const nomErreur = document.getElementById("nom_erreur");
    const email = document.getElementById('email');
    const emailErreur = document.getElementById('email_erreur');
    const message = document.getElementById('message').value;
    const messageErreur = document.getElementById('message_erreur');
    
    
    let erreur = false;

    if (prenom.length < 2 || prenom === ""){
        prenomErreur.innerHTML='Veuillez mettre le prénom avec deux caractères minimun';
        prenomErreur.style.display = "inline-block";
        erreur = true;
    }else{
          prenomErreur.innerHTML="";
    }
    
    if (nom.length < 2 || nom === ""){
          nomErreur.innerHTML='Veuillez mettre le nom avec deux caractères minimun';
          nomErreur.style.display = "inline-block";
          erreur = true;
      }else{
          nomErreur.innerHTML="";
        }
    
    if (!ValidateEmail(email) || email.value === ""){
          emailErreur.innerHTML= 'Veuillez entrer un email valide';
          emailErreur.style.display = "inline-block";
          erreur = true;
      }else{
          emailErreur.innerHTML="";
     }

     if (message.length < 8 || message === ""){
           messageErreur.innerHTML= 'Veuillez entrer un message valide';
           messageErreur.style.display = "inline-block";
           erreur = true;
     }
     else{
          messageErreur.innerHTML="";
     }
  

      if(erreur === false){
          closeModal()
          console.log(prenom,nom,email.value,message)
      }/*lorsqu'on clic sur le formulaire envoyé le contenu de chaque input apparait dans la console grace
      a console.log(prenom....)*/
    
     });


//Validation du mail
function ValidateEmail(input) {
    
      var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    
      if (input.value.match(validRegex)) {
     
        return true;
    
      } else {
    
        return false;
      }
    }
    
  