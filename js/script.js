
let canv = document.getElementById("canvas"),
    ctx  = canv.getContext('2d'),
    ch = 0,
    capybara_x = 0,
    capybara_y = 0; 
let sleep = [100, 600];

canv.width = window.innerWidth;
canv.height = window.innerHeight;
capybara_x = canv.height / 1.25;
capybara_y = canv.width / 2;


let sleepBut = document.querySelector('.sleep');

const counter = () =>{
    //начальная отрисовка счётчика
    ctx.fillStyle = 'yellow';
    ctx.textAlign = 'center';
    ctx.font = '40px Time no Romans';
    ctx.fillText(ch, canv.width / 2, 50);
    
    //отрисовка чётчика при нажатии
    canv.addEventListener('click', (e) => {
    ch++;
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight/1.5);

    ctx.fillStyle = 'yellow';
    ctx.textAlign = 'center';
    ctx.font = '40px Time no Romans';
    ctx.fillText(ch, canv.width / 2, 50);
    });
}

const renderingEvents = () => {
    ctx.fillStyle = "violet";
    ctx.fillRect(sleep[0], sleep[1], 50, 50);

    ctx.fillStyle = "violet";
    ctx.fillRect(100, 700, 50, 50);

    ctx.fillStyle = "violet";
    ctx.fillRect(canv.width/1.15, 600, 50, 50);

    ctx.fillStyle = "violet";
    ctx.fillRect(canv.width/1.15, 700, 50, 50);
}

const rendering = () => {
    //отрисовка неба
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight/1.5);

    //отрисовка земли
    ctx.fillStyle = "green";
    ctx.fillRect(0, window.innerHeight / 1.5, canv.width, canv.height);

    //Капибара
    ctx.fillStyle = "brown";
    ctx.arc(capybara_y, capybara_x, 25, 0, Math.PI * 2);
    ctx.fill();

    counter();
    renderingEvents();
    
}

const moveCapybara = () => {
    sleepBut.addEventListener('click', () => {
        const intervalId = setInterval(() =>{
            //отрисовка земли
            ctx.fillStyle = "green";
            ctx.fillRect(0, window.innerHeight / 1.5, canv.width, canv.height);
            //Отрисовка событий
            renderingEvents();
    
            //Капибара
            if(capybara_x != sleep[1]+50){
                capybara_x = capybara_x - 1;
            }
            if(capybara_y != sleep[0]+50){
                capybara_y = capybara_y - 1; 
             }
            console.log(capybara_y,capybara_x)
            ctx.beginPath();
            ctx.fillStyle = "brown";
            ctx.arc(capybara_y, capybara_x, 25, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
            if(capybara_x == sleep[1] + 50 && capybara_y == sleep[0]+ 50){
                clearInterval(intervalId);
            }
        },10)
    });
}



rendering();
moveCapybara();
   
