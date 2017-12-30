var x=new Array();
var y=new Array();
var vx=new Array();
var vy=new Array();
var m=10;
var I=10;   //#of objects
var e=0.01;  //=dt
var T=100;   //till when
var u=1; //counter
var G=0.1;
var a=0;
var b=0;
for(i=0;i<I;i++){
    x[i]=new Array();
    x[i].push(100+Math.random()*100); //initial x position
    y[i]=new Array();
    y[i].push(130+Math.random()*100);
    vx[i]=new Array();
    vx[i].push(Math.random()*400-200); //initial x velocity
    vy[i]=new Array();
    vy[i].push(Math.random()*100-50);
}

function move(){
    if(u>T/e){clearInterval(timer)}
    var d="";
    for(i=0;i<I;i++){
        var ax=0;
        var ay=0;
        for(l=0;l<I;l++){
            if(l!=i){
                var r2=Math.pow((x[l][u-1]-x[i][u-1]),2)+Math.pow((y[l][u-1]-y[i][u-1]),2);
                ax+=G*m*(Math.sqrt(r2)-0)*(x[l][u-1]-x[i][u-1])/Math.sqrt(r2)+a;
                ay+=G*m*(Math.sqrt(r2)-0)*(y[l][u-1]-y[i][u-1])/Math.sqrt(r2)+b;
            }
        }
        vx[i][u]=vx[i][u-1]+ax*e;
        vy[i][u]=vy[i][u-1]+ay*e;   //define velocities
        x[i][u]=x[i][u-1]+(vx[i][u-1]+vx[i][u])/2*e;
        y[i][u]=y[i][u-1]+(vy[i][u-1]+vy[i][u])/2*e;    //define positions
        d+='<div id="img'+i+'" style="position:absolute;left:'+x[i][u]+'px;top:'+y[i][u]+'px;">A</div>' //add data about this object to d, which stores all image info for this particular time
    }
    document.getElementById("main").innerHTML = d;  //add images" data to HTML
    u++;    //next time step(e seconds later)
}
window.addEventListener("keydown",function(event){
    switch(event.keyCode){
        case 37:
            a+=-1;document.getElementById("side").innerHTML+="<br>→"+a;break;
        case 38:
            b+=-1;document.getElementById("side").innerHTML+="<br>↓"+b;break;
        case 39:
            a+=1;document.getElementById("side").innerHTML+="<br>→"+a;break;
        case 40:
            b+=1;document.getElementById("side").innerHTML+="<br>↓"+b;break;
    }
},false);
setInterval(move, e*1000);
