var x=new Array();
var y=new Array();
var vx=new Array();
var vy=new Array();
var I=10;   //#of objects
var e=0.01;  //=dt
var T=30;   //till when
var u=1; //counter
for(i=0;i<I;i++){
    x[i]=new Array();
    x[i].push(100); //initial x position
    y[i]=new Array();
    y[i].push(20);
    vx[i]=new Array();
    vx[i].push(Math.sin(1.1*i)*40); //initial x velocity
    vy[i]=new Array();
    vy[i].push(Math.sin(i)+80+80);
}

function move(){
    if(u>T/e){clearInterval(timer)}
    var d="";
    for(i=0;i<I;i++){
        var ay=-30;
        var ax=0;   //accelerations(not strictly necessary for code)
        vx[i][u]=vx[i][u-1]+ax*e;
        vy[i][u]=vy[i][u-1]+ay*e;   //define velocities
        x[i][u]=x[i][u-1]+(vx[i][u-1]+vx[i][u])/2*e;
        y[i][u]=y[i][u-1]+(vy[i][u-1]+vy[i][u])/2*e;    //define positions
        d+='<img src="funassy.png" width="30" style="position:absolute;left:'+x[i][u]+'px;top:'+y[i][u]+'px;">' //add data about this object to d, which stores all image info for this particular time
    }
    document.getElementById("main").innerHTML = d;  //add images" data to HTML
    u++;    //next time step(e seconds later)
}
setInterval(move, e*1000);
