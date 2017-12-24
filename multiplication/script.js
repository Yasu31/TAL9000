var Q=1
var points=0;
var A="";

while(Q<11)
{var a=Math.random()*19;
a=Math.ceil(a);
var b=Math.random()*19;
b=Math.ceil(b);

var C=1;
var D=A+"🚩";
while(C<11-Q)
{D=D+"◯";
C=C+1;}


var Answer=prompt(D+"                "+a+" x "+b+" = ??");
if(Answer==null)
{
break;}
Answer=Number(Answer);
if(Answer==a*b)
{points=points+1;
A=A+"🔵";
}
else
{A=A+"🔴";}
Q=Q+1;
}
document.write("10点中<big><big>"+points+"点</big></big>取れたお");