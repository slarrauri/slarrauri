window.onload = function() {
    slarrauri();
  };


/**
 * Init App
 */
function slarrauri(){
    console.log('Oh! LALALA!!! Señor Frances');
    randomAvatar();
}

/**
 * Randomly get the avatar image.
 */
function randomAvatar(){

    var selectAvatar =  Math.floor((2 - 0) * Math.random());
    
    switch (selectAvatar) {
        case 0:
            document.getElementById("slarrauri-index-avatar").src 
            = "./assets/vista_derecha.png";
            break;
        case 1:
                document.getElementById("slarrauri-index-avatar").src 
                = "./assets/vista_izquierda.png";
                break;
        default:
            document.getElementById("slarrauri-index-avatar").src 
            = "./assets/vista_izquierda.png";
            break;
    }
    

}