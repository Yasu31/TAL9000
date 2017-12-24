function MatchFind(){
    this.number=13;
    this.isEnd=false;
    this.array=new Array();
    this.array.push(["君は学級委員になる？","はい","いいえ"]);
    this.array.push(["10年後の自分は見えてる？","はい","いいえ"]);
    this.array.push(["冗談を言うのは好き？","はい","いいえ"]);
    this.array.push(["君は、お医者さんに憧れる？","はい","いいえ"]);
    this.array.push(["おにぎりの海苔はパリパリじゃないと嫌だ！","はい","いいえ"]);
    this.array.push(["君にとって、憧れのヒーローはいる？","はい","いいえ"]);
    this.array.push(["バレエと化石、どちらが好き？","バレエ","化石"]);
    this.array.push(["<img id='astro' src='wakata.jpg'><br><br>若田光一さん","",""]);
    this.array.push(["<img id='astro' src='noguchi.jpg'><br><br>野口聡一さん","",""]);
    this.array.push(["<img id='astro' src='onisi.jpg'><br><br>大西卓哉さん","",""]);
    this.array.push(["<img id='astro' src='yui.jpg'><br><br>油井亀美也さん","",""]);
    this.array.push(["<img id='astro' src='furukawa.jpg'><br><br>古川聡さん","",""]);
    this.array.push(["<img id='astro' src='mukai.jpg'><br><br>向井千秋さん","",""]);
    this.array[13]=["あなたに最も似ている宇宙飛行士は誰でしょう？","始める",""]
    this.answer=function(i){
        switch(this.number){
            case 0:
                if(i){
                    this.number=1;
                }
                else{
                    this.number=3;
                }
                break;
            case 1:
                if(i){
                    this.number=2;
                }
                else{
                    this.number=4;
                }
                break;
            case 3:
                if(i){
                    this.number=5;
                }
                else{
                    this.number=6;
                }
                break;
            case 4:
                if(i){
                    //若田さん
                    this.number=7
                    this.isEnd=true;
                }
                else{
                    this.number=6;
                }
                break;
             case 2:
                if(i){
                    //若田さん
                    this.number=7
                    this.isEnd=true;
                }
                else{
                    //野口さん
                    this.number=8
                    this.isEnd=true;
                }
                break;
            case 6:
                if(i){
                    //大西さん
                    this.number=9
                    this.isEnd=true;
                }
                else{
                    //油井さん
                    this.number=10
                    this.isEnd=true;
                }
                break;
            case 5:
                if(i){
                    //古川さん
                    this.number=11
                    this.isEnd=true;
                }
                else{
                    //向井さん
                    this.number=12
                    this.isEnd=true;
                }
                break;
            case 13:
                if(i){
                    this.number=0;
                }
                break;
                
            default:break;
        }
        this.updateText();
        
    }
    this.updateText=function(){
        this.question=this.array[this.number][0];
        this.option1=this.array[this.number][1];
        this.option2=this.array[this.number][2];
    }
    this.reset=function(){
        this.number=13;
        this.updateText();
    }
    
}

var find=new MatchFind();
var answer=function(i){
    find.answer(i);
    rewrite();
}
var rewrite=function(){
    
   find.updateText(); document.getElementById("question").innerHTML=find.question;
    document.getElementById("option1").innerHTML=find.option1;
    document.getElementById("option2").innerHTML=find.option2;
}
var reset=function(){
    find.reset();
    rewrite();
}

//animation
var u=0;
var x;
var y;
function move(){
    var d="";
    var width=window.innerWidth;
    var height=window.innerHeight;
        x=width/4*Math.sin(u/100)+width/2;
        y=height/4*Math.sin(u/60)+height*3/4-80;
        //define positions
        d="<img src='astronaut.png' id='astronaut' height='80' style='position:absolute;left:"+x+"px;top:"+y+"px;' onclick='gotme()'>" //add data about this object to d, which stores all image info for this particular time
    document.getElementById("astronaut").innerHTML = d;  //add images' data to HTML
    u++;    //next time step(e seconds later)
}
setInterval(move, 30);
var gotme=function(){
    var str;
    switch(Math.floor(Math.random()*3)){
        case 0:str="助けて…！船が宇宙デブリにやられて、地球に帰れないの！";break;
        case 1:str="ここからの眺めいいよ〜";break;
        case 2:str="こう見えても私はx軸方向とy軸方向に単振動しているだけです";break;
    }
    alert(str);
}