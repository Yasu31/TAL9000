var h=window.innerHeight;
var w=window.innerWidth;
var x=new Array();
var y=new Array();
var vx=new Array();
var vy=new Array();
var m=new Array();
var I=Math.ceil(h*w/20000);   //#of objects
var e=0.03;  //=dt
var T=50;   //till when
var u=1; //counter
var G=1;
var b=0;

x[0]=new Array();
x[0].push(0);
y[0]=new Array();
y[0].push(h/2);
vx[0]=new Array();
vx[0].push(w/70);
vy[0]=new Array();
vy[0].push(0);
m.push(10);
for(i=1;i<I;i++){
    x[i]=new Array();
    x[i].push(w/5+Math.random()*w/1.5); //initial x position
    y[i]=new Array();
    y[i].push(Math.random()*h);
    vx[i]=new Array();
    vx[i].push(Math.random()*w/60-w/120); //initial x velocity
    vy[i]=new Array();
    vy[i].push(Math.random()*w/60-w/120);
    m.push(40000);
}

function move(){
    if(u>T/e){clearInterval(timer)}
    var d="";
    for(i=0;i<I;i++){
        var ax=0;
        var ay=0;
        if(i==0){for(l=0;l<I;l++){
            if(l!=i){
                var r2=Math.pow((x[l][u-1]-x[i][u-1]),2)+Math.pow((y[l][u-1]-y[i][u-1]),2);
                ax+=G*m[l]/r2*(x[l][u-1]-x[i][u-1])/Math.sqrt(r2);
                ay+=G*m[l]/r2*(y[l][u-1]-y[i][u-1])/Math.sqrt(r2)+b;
            }
        }
        }
        vx[i][u]=vx[i][u-1]+ax*e;
        vy[i][u]=vy[i][u-1]+ay*e;   //define velocities
        /*if(i==0){
            vx[i][u]+=a;
            vy[i][u]+=b;}*/
        x[i][u]=x[i][u-1]+(vx[i][u-1]+vx[i][u])/2*e;
        y[i][u]=y[i][u-1]+(vy[i][u-1]+vy[i][u])/2*e;    //define positions
        if(i==0){
            var S="<img src='mf.gif' width='60px'>";}
        else{
            var S="<img src='as.png' width='30px'>";}
        d+="<div id='img"+i+"' style='position:absolute;left:"+x[i][u]+"px;top:"+y[i][u]+"px;'>"+S+"</div>" //add data about this object to d, which stores all image info for this particular time
    }
    document.getElementById("main").innerHTML = d;  //add images' data to HTML
    var B="";

    if(b>0){
       for(i=0;i<b;i++){
           B+="↓";}}
    else{
        for(i=0;i>b;i=i-1){
            B+="↑";}}
    document.getElementById("side").innerHTML="<br>"+B;
    u++;    //next time step(e seconds later)
}
window.addEventListener("keydown",function(event){
    switch(event.keyCode){
        case 38:
            b+=-1;break;
        case 40:
            b+=1;break;
    }
},false);
function up(){
    b-=1;}
function down(){
    b+=1;}
function start(){setInterval(move, e*1000);}