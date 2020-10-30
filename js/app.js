window.onload = function() {
    slarrauri();
};

//------------------------------------------------------------------------------
/**
 * Init App
 */
function slarrauri(){
    console.log('Oh! LALALA!!! Señor Frances');
    
    //ROUTE MAIN
    if (window.location.pathname == '/') {
        randomAvatar();        
    }

    //ROUTE MAIN
    if (window.location.pathname == '/index.html') {
        randomAvatar();
    }
    
    // ROUTE simpsons     
    if (window.location.pathname == '/simpsons.html') {
        randomAvatar();
        document.getElementById("slarrauri-random-simpson-chapter-other").onclick 
        = function() {
            randomSimpsonsChapter();
        };
    }
    
    // ROUTE Teg 
    if (window.location.pathname == '/teg_counter.html') {
        tegCounter();
    }
   
}
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
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
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
/**
 * Random Simpsons Chapter
 */
function randomSimpsonsChapter(){

    var season  = Math.floor(Math.random() * 31) + 1;
    var chapter = 0;

    
    switch (season) {
        case 1:
            chapter =  Math.floor(Math.random() * 13) + 1;        
            break;
        case 3:
            chapter =  Math.floor(Math.random() * 24) + 1;  
            break;
        case 6:
            chapter =  Math.floor(Math.random() * 25) + 1;  
            break;
        case 7:
            chapter =  Math.floor(Math.random() * 25) + 1;  
            break;
        case 8:
            chapter =  Math.floor(Math.random() * 25) + 1;  
            break;
        case 9:
            chapter =  Math.floor(Math.random() * 25) + 1;  
            break;
        case 10:
            chapter =  Math.floor(Math.random() * 23) + 1;  
            break;
        case 12:
            chapter =  Math.floor(Math.random() * 21) + 1;  
            break;
        case 16:
            chapter =  Math.floor(Math.random() * 21) + 1;  
            break;
        case 19:
            chapter =  Math.floor(Math.random() * 20) + 1;  
        break;
        case 20:
            chapter =  Math.floor(Math.random() * 21) + 1;  
        break;
        case 21:
            chapter =  Math.floor(Math.random() * 23) + 1;  
            break;
        case 29:
            chapter =  Math.floor(Math.random() * 21) + 1;  
            break;
        case 30:
            chapter =  Math.floor(Math.random() * 23) + 1;  
            break;
        default:
            chapter =  Math.floor(Math.random() * 22) + 1;
            break;
    }
    
    document.getElementById("slarrauri-random-simpson-chapter-link").href 
        = "https://pelisplus.me/serie/los-simpsons/temporada-"+season+"/capitulo-"+chapter+"/";
    
    document.getElementById("slarrauri-random-simpson-chapter-text").innerHTML
        = "<b>Temporada:</b> "+season+" <b>Capítulo:</b> "+chapter+"";

}
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
/**
 * teg Counter
 */
function tegCounter(){
    console.log('Teg Counter'); 
    var attackerInput = document.getElementById("attacker-input");
    var defenderInput = document.getElementById("defender-input");
    var attackerAdd   = document.getElementById("attacker-add");
    var attackerSub   = document.getElementById("attacker-sub");
    var defenderadd   = document.getElementById("defender-add");
    var defenderSub   = document.getElementById("defender-sub");
    
    var totalAttacker = 0;
    var totalDefender = 0;

    //On Change Input ger number from attaker
    attackerInput.onchange  = function() {
        totalAttacker = attackerInput.value;
        console.log(totalAttacker);
    };  

    //On Change Input ger number from defender
    defenderInput.onchange  = function() {
        totalDefender = defenderInput.value;
        console.log(totalDefender);
    };

    //ADD one to attacker total
    attackerAdd.onclick = function() {
        totalAttacker = parseInt(totalAttacker) + 1;
        attackerInput.value = totalAttacker;
    };
    
    
    //document.getElementById("defender-input").onchange  = function() {getTotal()};
    


    
   
}
//------------------------------------------------------------------------------