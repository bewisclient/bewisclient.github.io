posY = -100;
speedY = 0;
posX = 0;
size = 0;
wait = 0;
fade = 0;

BposY = -100;
BspeedY = 0;
BposX = 0;
Bsize = 0;
Bwait = 0;
Bfade = 0;

e = null;

MousePosX = null;
MousePosY = null;
function getNewSpeedY() {
    return Math.sqrt((2/5)*(window.innerHeight*(Math.random()/2+1/2)+100));
}

function coords(event) {
    e = event;
    MousePosX = e.clientX;
    MousePosY = e.clientY;
}

function draw() {

    var c = document.getElementById("canvas-background");
    var ctx = c.getContext("2d");
    const width = window.innerWidth;
    const height = window.innerHeight;

    const radian = (width<height?width:height)/1.5;

    c.width = width;
    c.height = height;

    var grd = ctx.createRadialGradient(width/2, height/3, radian/2, width/2, height/3,radian);
    grd.addColorStop(0, "#28324b");
    grd.addColorStop(1, "#181f3d");

    ctx.beginPath();
    ctx.arc(width/2, height/3, radian, 0, 2 * Math.PI);

    ctx.fillStyle = grd;

    ctx.fill();

    ctx.closePath();

    ctx.shadowColor = 'white';
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    ctx.shadowBlur = radian/10;

    ctx.font = "bold "+radian/5+ "px Arial Black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#fff";
    ctx.fillText("Bewisclient", width/2, height/3);
    
    ctx.font = "bold "+radian/20+ "px Arial Black";
    ctx.fillText("Brighter Vision, Epic Features", width/2, height/3+radian/10);

    ctx.shadowColor = 'transparent';
    
    drawCircle(ctx,width,height,posX,posY,size,fade,0);

    if(fade!=0 && fade<=250)
        fade+=5;
    
    drawCircle(ctx,width,height,BposX,BposY,Bsize,Bfade,1);

    if(Bfade!=0 && Bfade<=250)
        Bfade+=5;

    //Dynamics

    speedY-=0.2;
    posY+=speedY;

    if(posY<=-100) {
        if(wait==0)
            wait = Math.round(Math.random()*200);
        wait--;
        if(wait==0) {
            posY = -100;
            speedY = getNewSpeedY();
            posX = Math.random();
            fade = 0;
            size = radian/8*(Math.random()/3+(5/6));
        }
    }

    BspeedY-=0.2;
    BposY+=BspeedY;

    if(BposY<=-100) {
        if(Bwait==0)
            Bwait = Math.round(Math.random()*200);
        Bwait--;
        if(Bwait==0) {
            BposY = -100;
            BspeedY = getNewSpeedY();
            BposX = Math.random();
            Bfade = 0;
            Bsize = radian/8*(Math.random()/3+(5/6));
        }
    }

    requestAnimationFrame(draw);
}

function drawCircle(ctx, width, height, posX, posY, size, fade, type) {   

    dist = ((MousePosX-(width*posX))*(MousePosX-(width*posX))+
        (MousePosY-(height-posY))*(MousePosY-(height-posY)))<size*size;
        
    size *= 1+(fade/510);

    if(fade ==0 && dist) {
        if(type==0)
            this.fade=5;
        else
            this.Bfade=5;
    }

    ctx.beginPath();
    var grd2 = ctx.createRadialGradient(width*posX, height-posY, size*2/3, width*posX, height-posY,size);
    grd2.addColorStop(0, "rgba(255,255,255,"+((255-fade)/255)+")");
    grd2.addColorStop(1, "transparent");
    ctx.arc(width*posX, height-posY, size, 0, 2 * Math.PI);
    ctx.fillStyle = grd2;
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(width*posX, height-posY, size*2/3, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(40,50,75,"+((255-fade)/255)+")";
    ctx.fill();
    ctx.closePath();
}

draw();