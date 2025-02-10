const enemies = [];

const getEnemy = (
  enemyID,
  enemySpeed = 1,
  enemyStartPos = 100,
  enemyExtraPos = 1
) => {
  const properties = {
    x: enemyStartPos * enemyExtraPos,
    y: -128,
    width: 128,
    height: 128,
    img: imageContainers[enemyID],
    speed: enemySpeed,
  };

  const draw = () => {
    context.drawImage(
      properties.img,
      properties.x,
      properties.y,
      properties.width,
      properties.height
    );
  };

  const update = () => {
    if (properties.y < (1 / 8) * canvas.height && enemyID == 2) {
      properties.y += properties.speed;
    }
  };

  return {
    draw,
    update,
  };
};

const activateNewWave = (waveNumber) => {
  const waves = [wave1];

  const wave1 = {
    enemyID,
    enemyAmount: 5,
  };
};
