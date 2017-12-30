x=new Array();
y=new Array();
vx=new Array();
vy=new Array();
Fx=new Array();		//force
Fy=new Array();
var g=30;
var x0=10;		//initial positions
var y0=10;
var vx0=20;		//initial velocities
var vy0=70;
var m=10;		//mass
var elasticity=-1.1;
var xmax=innerWidth-30
var ymax=innerHeight-30
var xmin=0;
var ymin=0;
x.push(x0);
y.push(y0);
vx.push(vx0);
vy.push(vy0);
var e=0.1			//dt
var T=10000;		//till when?

function xpos(t){		//about X↓
if(x[t-1]<xmin){
return xmin;}
if(x[t-1]>xmax){
return xmax;}
else{
return x[t-1]+e*(vx[t-1]+vx[t])/2;}
}
function vxpos(t){
if(x[t-1]<xmin){
return elasticity*vx[t-1];}
else if(x[t-1]>xmax){
return elasticity*vx[t-1];}
else{
return vx[t-1]+e*Fx[t-1]/m;}		//change g to Fx/m later
}
function Fxpos(t){
return 0;
}

function ypos(t){		//about Y↓
if(y[t-1]<ymin){
return ymin;}
if(y[t-1]>ymax){
return ymax;}
else{
return y[t-1]+e*(vy[t-1]+vy[t])/2;}
}
function vypos(t){
if(y[t-1]<ymin){
return elasticity*vy[t-1];}
else if(y[t-1]>ymax){
return elasticity*vy[t-1];}
else{
return vy[t-1]+e*Fy[t-1]/m;}		//change g to Fy/m later
}
function Fypos(t){
return g;
}

for (t=1;t<T/e; t++){			//define array
Fx.push(Fxpos(t))
vx.push(vxpos(t));
x.push(xpos(t));

Fy.push(Fypos(t));
vy.push(vypos(t));
y.push(ypos(t));
}


var img;				//animation↓
function loadPage(){
img=document.getElementById("image");
}
var u=0;		//counter for animation
function pos(){
img.style.left=x[u]+"px";
img.style.top=y[u]+"px";
u=u+1;
if(u>x.length){
clearInterval(timer)}
}
setInterval(pos,30);

//=͟͟͞͞⊂( ’ω’ )=͟͟͞͞⊃ ﾎﾞﾎﾞｯ ٩(◦`꒳´◦)۶
