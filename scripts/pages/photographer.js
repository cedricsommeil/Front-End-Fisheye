//Mettre le code JavaScript lié à la page photographer.html
// console.log(window.location.search)
/*recuper chaque id*/
let params = (new URL(document.location)).searchParams;
let id = params.get('id');
const photographers = fetch("../../data/photographers.json")
  .then(response => response.json())
  .then(data => {
        // On recupere les informations du photographes en se servant de son ID

        const photographerInfo = data?.photographers?.filter((photographer)=>{

                return photographer.id === Number(id);

        });


        createPhotographerInfos(photographerInfo)
      

  }).catch(console.error);



  function createPhotographerInfos(data){


      const photographerInfo = `
      
      <div class="info_photographer">
        <h2>${data[0].name}</h2>
        <p class="photograph-villCity">${data[0].city}, ${data[0].country}</p>
        <p class="para_grey">${data[0].tagline}</p>
        <button class="contact_button">Contactez-moi</button>
        <div class="photo_photographer">
            <img src="assets/images/Sample Photos/Photographers ID Photos/${data[0].portrait}" alt="${data[0].portrait}">
        </div>
      </div>
      
      `;

      document.querySelector(".photograph-header").innerHTML = photographerInfo;

      document.querySelector('.contact_button').addEventListener('click', function() {
  
        displayModal();
        
    });

  }