window.onload = function() {
    slarrauri();
  };

function slarrauri(){
    console.log('Oh! LALALA!!! Señor Frances');
    randomAvatar();
}


function randomAvatar(){

    var selectAvatar =  Math.floor((2 - 0) * Math.random());
    console.log(selectAvatar);
    if (selectAvatar == 0) {
        document.getElementById("slarrauri-index-avatar").src = "./assets/vista_derecha.png";
    } else {
        document.getElementById("slarrauri-index-avatar").src = "./assets/vista_izquierda.png";
    }
    

}