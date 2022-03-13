function createVideo(mediaInfo){

     return `
     
      <video>

            <source src="assets/images/Sample Photos/medias/${mediaInfo.video}" alt="${mediaInfo.title}" type="video/mp4">

      </video>
     
     `

}