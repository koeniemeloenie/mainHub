const particles = [];
const meteor = getMeteor();

for (let i = 0; i < 5000; i++) {
  const variable = Math.random() * 100;

  if (variable < 97) {
    particles.push(getParticle(1));
  }
  if (variable > 97) {
    particles.push(getParticle(Math.random() * 2 + 1));
  }
}

let phase = 0;
let tElapsed = 0;
let oldTimeStamp = 0;
let tInterval = 0;
let treshold = getRandomNumber(1000, 0, 1);
let activateMeteor = false;

const animate = (newTimeStamp) => {
  // Background stuff
  tInterval = newTimeStamp - oldTimeStamp;
  tElapsed += tInterval;

  oldTimeStamp = newTimeStamp;

  if (tElapsed > treshold) {
    phase++;
    tElapsed = 0;
    treshold = getRandomNumber(10000, 0, 1);

    activateMeteor = true;
  }

  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 500; i++) {
    particles[i].update();
    particles[i].draw();
  }

  if (activateMeteor) {
    meteor.update();
    meteor.draw();
  }

  // Ship stuff

  mainPlayer.update();
  mainPlayer.draw();

  for (i = 0; i < 3; i++) {
    enemies[i].draw();
    enemies[i].update();
  }

  for (i = 0; i < canvas.width / 100; i++) {
    enemies.push(getEnemy(2, 1, 100, i));
  }

  requestAnimationFrame(animate);
};
