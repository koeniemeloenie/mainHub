const canvas = document.createElement("canvas");
const container = document.getElementById('container');
canvas.width = innerWidth;
canvas.height = innerHeight;

container.appendChild(canvas);

document.body.style.margin = "0";
document.body.appendChild(container)

const context = canvas.getContext('2d');

canvas.style.backgroundColor = "#2E1A47";