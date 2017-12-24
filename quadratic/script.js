var answer=function(A,B,C){
var D=B*B-4*A*C;

if(D>=0)
{var E=Math.sqrt(D);
var Y=-B+E;
var Z=-B-E;
var P=Y/2/A;
var Q=Z/2/A;

if(P===Q)
{document.write("重解キター❗答えは "+P+"❗😎");}
else
{document.write(P+"と"+Q+"が解だよ❗😃");}
}

else
{document.write("残念、解なし...😭");}
};   //end of math engine

alert("😎xの2次方程式の解が分かるよ😄 カンニングには使わないでね❗");

var X=Number(prompt("xの二乗の係数を入力して🎵   半角数字でね😁"));
var Y=Number(prompt("xの係数をおしえて💛"));
var Z=Number(prompt("最後に定数項❗"));

answer(X,Y,Z)