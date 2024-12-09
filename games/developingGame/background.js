const getParticle = (factor = 1) => {

    const properties = {
        size: {width:  factor, height:  factor},
        vel: {},
        color: {r: 255 - (factor-1) * 15,g: 255- (factor-1) * 15, b: 255- (factor-1) * 15},
        pos: {},
    }
    const makeVel = () => getVector(0, factor/2 + .75*(1/factor));
    const makePos = () => getVector(Math.random()*canvas.width, -3 * Math.random() * 500 - properties.size.height);
    properties.vel = makeVel();
    properties.pos =  makePos();
    

return{
    update: () => {
        properties.pos.add(properties.vel);
        
        if(properties.pos.y > canvas.height + properties.size.height){
            properties.pos = makePos();
            properties.vel = makeVel();
        }
        
    },
    draw: () => {
        context.beginPath();
        context.fillStyle = `rgb(${properties.color.r},${properties.color.g},${properties.color.b})`;
        context.rect(properties.pos.x, properties.pos.y, properties.size.width, properties.size.height);
        context.fill();
    },
}

}


const getMeteor = () => {
    let sizeVariable = getRandomNumber(3, 0, 1);
    const properties = {
        size: {width: sizeVariable, height: sizeVariable * getRandomNumber(1, 0.5, 1)},
        vel: {x: 0, y: getRandomNumber(5, 10, 0)},
        color: {r: getRandomNumber(150),g: 0,b: 0},
        pos: {x: getRandomNumber(canvas.width), y: 0},
    }
    properties.y = - properties.size.y;

    return{
        update: () => {
            properties.pos.add(properties.vel);

            if( properties.pos.y + size.y > canvas.height){
                activateMeteor = false;
            }
        },
        draw: () => {},
    }
}

const getVector = (xInc = 0, yInc = 0) => {
    let x = xInc;
    let y = yInc;

    const add = (vector) => {
     
        x += vector.x;
        y += vector.y;
    }

    return {
        get x() {
            return x;    
          },
        
          set x(value) {
            x = value;
          },
          get y() {
            return y;    
          },
        
          set y(value) {
            y = value;
          },
        add,
    };

}

// rc = richtingscoëficient
// sg = startgetal
// ev = extra variabele
const getRandomNumber = (rc = 1, sg = 0, ev = 0) => {
    let a = rc;
    let b = sg;
    let c = ev;

    const randomNumber = a * (c +Math.random()) + b;

    return randomNumber;
}