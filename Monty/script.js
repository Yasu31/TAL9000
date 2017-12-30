var Atari=Math.ceil(Math.random()*3);

var func=function(X){
    for(E=1;E>0;E++){
        var Y=Math.ceil(Math.random()*3);
        //8/4/2016:oh my god I wrote this when I had no concept of "scopes"!
        //and what a weird way to use random numbers!
        if(Y!=X&&Y!=Atari){break;}
    }

    for(E=1;E>0;E++){
        var Z=Math.ceil(Math.random()*3);
        if(Z!=X&&Z!=Y){
        break;}
    }

    if(confirm("☆ヒントをあげます。"+Y+"個目の箱は当たりではありません。→☆当たりは"+X+"個目、又は"+Z+"個目の箱のいずれか→   ☆選ぶ箱を"+Z+"個目の箱に変えますか？    (OK→変える、キャンセル→そのまま)")){
        X=Z;
    }

    if(X===Atari){
        document.write("<big><center>🚗🚙正解！車を差し上げます🚘🚐（本当のモンティホールの番組ならね）🚗🚑</center></big>");
    }
    else{
        document.write("<big><center>不正解！答えは"+Atari+"個目の箱でした😅</center></big>")
    }
};

