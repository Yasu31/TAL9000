var Question=prompt("何か質問を入力して（はい/いいえで答えられるもの）");
var People=prompt("答える人数は？");
People=Number(People);
alert("じゃあiPodをまわして行って❗");

var B=1;
var Counter=0;

while(B<=People)
{Q=B+"人目の人にクエスチョン❗；"+Question+"(OK=はい, キャンセル=いいえ)";
var C=confirm(Q);
if(C==true)
{Counter=Counter+1;}
B=B+1;
}
Counter=Math.round(Counter/People*100)

