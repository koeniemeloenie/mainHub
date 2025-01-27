document.body.style.margin = "0";

const canvas = document.createElement("canvas");

const container = document.getElementById('container');
// const slider1 = document.getElementById('slide1');

canvas.width = innerWidth;
canvas.height = innerHeight;

container.appendChild(canvas);

const activateCanvas = () => {
    mainPlayer = createMainPlayer();
    document.body.appendChild(container);

    //beweging mainPlayer
    addEventListener('keydown', (evt) => {

        mainPlayer.move(evt.code);
    
    })
    
    addEventListener('keyup', (evt) => {
       
        mainPlayer.stop(evt.code);
    
    })
    //einde beweging mainPlayer

    for(i = 0; i < 3; i++){
        enemies.push(getEnemy(i+1));
    }

    animate(0);
}


const context = canvas.getContext('2d');

canvas.style.backgroundColor = "#2E1A47";