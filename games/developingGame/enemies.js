const enemies = [];

const getEnemy = (enemyID) => {

    const properties = {
        x: canvas.width/2,
        y: canvas.height / 8 * 2,
        width: 128,
        height: 128,
        img: imageContainers[enemyID],
    }
    
    const draw = () => {
        context.drawImage(properties.img, properties.x, properties.y, properties.width, properties.height);
    }

    return{
        draw,
    }
}