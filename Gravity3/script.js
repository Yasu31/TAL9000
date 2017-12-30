var x=new Array();
var y=new Array();
var vx=new Array();
var vy=new Array();
var m=40000;
var I=50;   //#of objects
var e=0.01;  //=dt
var T=10;   //till when
var u=1; //counter
var G=1;
for(i=0;i<I;i++){
    x[i]=new Array();
    x[i].push(100+Math.random()*400); //initial x position
    y[i]=new Array();
    y[i].push(100+Math.random()*400);
    vx[i]=new Array();
    vx[i].push(Math.random()*20-40); //initial x velocity
    vy[i]=new Array();
    vy[i].push(Math.random()*20-40);
    //m.push(Math.pow(10,2))
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
                ax+=G*m/r2*(x[l][u-1]-x[i][u-1])/Math.sqrt(r2);
                ay+=G*m/r2*(y[l][u-1]-y[i][u-1])/Math.sqrt(r2);
            }
        }
        vx[i][u]=vx[i][u-1]+ax*e;
        vy[i][u]=vy[i][u-1]+ay*e;   //define velocities
        x[i][u]=x[i][u-1]+(vx[i][u-1]+vx[i][u])/2*e;
        y[i][u]=y[i][u-1]+(vy[i][u-1]+vy[i][u])/2*e;    //define positions
        d+='<div id="img"'+i+' style="position:absolute;left:'+x[i][u]+'px;top:'+y[i][u]+'px;">A</div>' //add data about this object to d, which stores all image info for this particular time
    }
    document.getElementById("main").innerHTML = d;  //add images" data to HTML
    u++;    //next time step(e seconds later)
}

setInterval(move, e*1000);
