var score=0;
var match=0;
var A;

function ask(){
A=Math.ceil(Math.random()*3);
document.write('<img src="rock.jpg" onClick="rock()"> <img src="scissors.jpg" onClick="scissors()"> <img src="paper.jpg" onClick="paper()">');
match=match+1;}; //1rock 2scissors 3paper

function rock(){
if(A==1){document.write('<img src="rock.jpg">');}
if(A==2){document.write('<img src="scissors.jpg">');
score=score+1;}
if(A==3){document.write('<img src="paper.jpg">');}
document.write('<br><img src="rock.jpg"><hr><input type="button" onClick="ask()" value="again">');
};

function scissors(){
if(A===1){alert("you lose");}
if(A===2){alert("aiko");}
if(A===3){alert("you win");
score=score+1;}
};

function paper(){
if(A===1){alert("you win");
score=score+1;}
if(A===2){alert("you lose");}
if(A===3){alert("aiko");}
};

ask();