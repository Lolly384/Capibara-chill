
let canv = document.getElementById("canvas"),
    ctx  = canv.getContext('2d');

    canv.width = window.innerWidth;
    canv.height = window.innerHeight; 

//code
const rendering = () => {
    //отрисовка неба
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight/1.5);

    //отрисовка земли
    ctx.fillStyle = "green";
    ctx.fillRect(0, window.innerHeight / 1.5, canv.width, canv.height);

    //Капибара
    ctx.fillStyle = "brown";
    ctx.arc(canv.width / 2, canv.height / 1.25, 25, 0, Math.PI * 2);
    ctx.fill();

    
}

rendering();
    
   
