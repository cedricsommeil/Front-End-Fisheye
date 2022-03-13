function mediasFactory(mediaInfo){

      if(mediaInfo.image !== undefined){

            // On a affaire a une image

            return createImage(mediaInfo);

      }

      // Ici on a affaire a une video
      return createVideo(mediaInfo);

}