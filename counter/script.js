var time=new Array();
var student=new Array();
var addzero=function(a){
    if(a<10){
        return "0"+a;}
    else{
        return a}
}
var rec=document.getElementById("record");
var main=document.getElementById("main");
var c;
var y;
var start=function(){
    now=new Date()
    c=now.getMinutes();
    h=now.getHours();
    main.innerHTML+="<br>"+h+"時"+c+"分に計測開始";
}
var timer=function(){
    now=new Date()
    var a=addzero(now.getMinutes());
    var z=now.getHours()
    var b=now.getHours()+": "+a+". "+now.getSeconds();
    time.push(a); 
    rec.innerHTML=b+"<br>"+rec.innerHTML;
    if(a!=c){
        var d=0;
        for(i=0;i<student.length;i++){
            d+=student[i];
        }
        student.push(time.length-d-1);
        
        
        main.innerHTML+="<br>"+y+" 時"+c+" 分には　"+student[student.length-1]+" 名の学生が入室";
        for(i=1;i<a-c;i++){
            var f=Number(c)+i
            main.innerHTML+="<br>"+y+" 時"+f+" 分には　0 名の学生が入室"
            document.getElementById("record2").innerHTML+="<br>"+f+"    0";
        }
            document.getElementById("record2").innerHTML+="<br>"+c+"    "+student[student.length-1];
    }
    
    c=a;
    y=now.getHours();
}