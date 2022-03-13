//Mettre le code JavaScript lié à la page photographer.html
/*Dynamiser le tableau des tries*/
let isOpen = false;

 const selectOptions = document.querySelector("#select-block-options");
 
 const firstButtonText = document.querySelector("#select-first-option-text");
 
 const optionsButtons = selectOptions.querySelectorAll("button");

document.querySelector("#select-first-option").addEventListener("click", ()=>{
				if(isOpen === false){
         
             // On ouvre le faux select
             
             selectOptions.style.display = "block";
             
             isOpen = true;
             
             return handleButtonsOptions();
        
        }
        
        if(isOpen === true){
        
        		 return closeSelect();
        
        }

});


function closeSelect(){

		 // On ferme le faux select
             
     selectOptions.style.display = "none";
     
      return isOpen = false;
             

}

function handleButtonsOptions(){

     optionsButtons.forEach((button)=>{
        
              button.onclick = ()=>{
              
                  const buttonText = button.textContent;
                    
                  button.innerHTML = firstButtonText.textContent;
                    
                  firstButtonText.innerHTML = buttonText;         
                    
                  return closeSelect();
        
              };
        
        });


}





// console.log(window.location.search)
/*recuper chaque id*/
let params = (new URL(document.location)).searchParams;
let id = params.get('id');
// console.log(id);
const photographers = fetch("../../data/photographers.json")
  .then(response => response.json())
  .then(data => {
// On recupere les informations du photographes en se servant de son ID

        const photographerInfo = data.photographers.filter((photographer)=>{
                return photographer.id === Number(id);

        });

        const mediaInfo = data.media.filter((media)=>{
                return media.photographerId === Number(id);
        });
 
        createPhotographerInfos(photographerInfo);

        createMediaInfo(mediaInfo);

  }).catch(console.error);


  function createMediaInfo(data){

      /* faire une boucle car il ya plusieurs photo et on veut 
      que sa s'affiche dans un ordre particulier for sur les elements en rajoutant un ul et li */ 

   
      let photographerMedias = "";

      data.forEach((media)=>{

            photographerMedias += `
            
            <li>
              <figure>
                ${mediasFactory(media)}
                <figcaption>
                  <div class="photo_legend">
                    <h2>Arc-en-cie</h2>
                    <p class="photo_classement">${media.likes}</p>
                    <i class="fas fa-heart heart-photo"></i>

                  </div>
                </figcaption>
              </figure>
            </li>
                
            
            `

      });

    document.querySelector(".photograph-body ul").innerHTML = photographerMedias;

}

  function createPhotographerInfos(data){


      const photographerInfo = `
      
      <div class="info_photographer">
        <h2>${data[0].name}</h2>
        <button class="contact_button">Contactez-moi</button>
        <div class="photo_photographer">
            <img src="assets/images/Sample Photos/Photographers ID Photos/${data[0].portrait}" alt="${data[0].portrait}">
        </div>
      </div>
      <p class="photograph-villCity">${data[0].city}, ${data[0].country}</p>
      <p class="para_grey">${data[0].tagline}</p>
      
      `;

      document.querySelector(".photograph-header").innerHTML = photographerInfo;

      document.querySelector('.contact_button').addEventListener('click', function() {
  
        displayModal();
        
    });

  }