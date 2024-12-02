const getParticle = (factor = 1, type = 'rect') => {
    const properties = {
        size: {width: 2 * factor, height: 2 * factor},
        vel: {},
        color: {r: 255 - (factor-1) * 15,g: 255- (factor-1) * 15, b: 255- (factor-1) * 15},
        pos: {},
    }
    const makeVel = () => getVector(0, factor/2 + .75*(1/factor));
    const makePos = () => getVector(Math.random()*canvas.width, -3 * Math.random() * 500 - properties.size.height);
    properties.vel = makeVel();
    properties.pos =  makePos();
    
    
    const update = () => {
        properties.pos.add(properties.vel);
        
        if(properties.pos.y > canvas.height + properties.size.height){
            properties.pos = makePos();
            properties.vel = makeVel();
        }
        
    }

    let draw;
    
    const drawRect = () => {
        context.beginPath();
        context.fillStyle = `rgb(${properties.color.r},${properties.color.g},${properties.color.b})`;
        context.rect(properties.pos.x, properties.pos.y, properties.size.width, properties.size.height);
        context.fill();
    }

    
    const drawMeteor = () => {  
    }

    if (type === 'rect') draw = drawRect;
    else if (type === 'meteor') draw = drawMeteor;
    return{
        update,
        draw,
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