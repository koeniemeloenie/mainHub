const particles = [];

for (let i = 0; i < 1000; i++) {
    const variable = Math.random()*100;

    if( variable < 98){
    particles.push(getParticle(1));
    }
    if(variable > 98){
        particles.push(getParticle(Math.random()*2 +1));
        }
}
console.log(particles);

const animate = (timeElapsed) => {
    context.clearRect(0, 0,canvas.width, canvas.height);

    for (let i = 0; i < 500; i++) {
        particles[i].update();
        particles[i].draw();
    }
    console.log(timeElapsed);
    requestAnimationFrame(animate);
    
}; 
animate();