var A=Math.floor(Math.random()*90+10);
//number 10 to 99
var score=50;

var B=A%10;
var C=A/10-B/10;
document.write("10の位と1の位の数の和は  <big>"+Math.round(B+C)+"</big><br><br>")

document.write('<input type="button" onClick="Check()" value="答えてみる(違ってたら10点引かれるから気をつけて)">');

document.write('<br><br><br><input type="button" onClick="alert(myfunc(2));" value="偶数かどうか？(8ポイントのヒント)"><br>');
var myfunc=function(X){
score=score-10+X;
if(A%X==0){
return "確かに、"+X+"の倍数だ  ポイント→"+score;}
else{
return X+"の倍数じゃないね  ポイント→"+score;}
};   //tells you if its even or not

document.write('<input type="button" onClick="alert(myfunc(3));" value="'+3+'の倍数かどうか？('+7+'ポイントのヒント)"><br>');  //displays buttons,on click tells hint

document.write('<input type="button" onClick="alert(myfunc(5));" value="'+5+'の倍数かどうか？('+5+'ポイントのヒント)"><br>');

document.write('<input type="button" onClick="alert(myfunc(7));" value="'+7+'の倍数かどうか？('+3+'ポイントのヒント)"><br>');

document.write('<input type="button" onClick="alert(myfunc(9));" value="'+9+'の倍数かどうか？('+1+'ポイントのヒント)"><br>');



var Check=function(){
var Answer=prompt("答えは?");
if(Answer==A){
document.write("<center>👨大正解!!!👳 おめでとう！<br>スコア→"+score+"<br>");}
else{
score=score-10;
alert("残念！10点引かれます  ポイント→"+score);
}
};
