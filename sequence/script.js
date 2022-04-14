var Seq = new Array();
for (C = 0; C >= 0; C++) {
	T = prompt(C + 1 + "番目の数は？(半角数字を入力)(十分入れたらキャンセルを押す)")
	if (T != null) {
		Seq.push(Number(T));
	}
	else { break; }
}      //saves numbers in sequence

if (Seq.length === 0) {
	alert("ちゃんと入力してくれっ!!")
};

if (isGeo(Seq) === true) {
	var coef = Seq[1] / Seq[0];
	var cons = 0;
	document.write("初項が" + Seq[0] + "、公比が" + coef + "の等比数列だね");
	var isZen = true;
}

else if (isDif(Seq)) {
	var coef = 1;
	var cons = Seq[1] - Seq[0];
	document.write("初項が" + Seq[0] + "、公差が" + cons + "の等差数列だね");
	var isZen = true
}

else if (isSquare(Seq)) {

	var coef = 1;
	var cons = Math.sqrt(Seq[1]) - Math.sqrt(Seq[0]);
	document.write("初項が" + Math.sqrt(Seq[0]) + "、公差が" + cons + "の等差数列の各項を2乗した数列でしょ");
	for (C = Seq.length; C < 100; C++) {
		var temp = Math.sqrt(Seq[C - 1]) + cons;
		Seq.push(temp * temp)
	}
	var isZen = true;
	var isS = true;
}

else if (isFibo(Seq)) {
	if (Seq[0] === 1 && Seq[1] === 1) {
		document.write("フィボナッチ数列とはあくどい…(T ^ T)<hr>");
	}
	document.write("a<sub>n+2</sub>=a<sub>n+1</sub>+a<sub>n</sub><br>という漸化式で表せるね（ドヤ）<hr>")
	for (C = 1; C < 40; C++) {
		Seq.push(Seq[Seq.length - 1] + Seq[Seq.length - 2])
	}  //fills in array
}

/*add items here if you want more types of sequences to be recognizable*/


else {
	var Sub = new Array();
	for (C = 1; C < Seq.length; C++) {
		Sub.push(Seq[C] - Seq[C - 1]);
	}
	//項のあいだの差の数列をつくる（漸化式か調べる時に使用）

	if (!isGeo(Sub)) {
		document.write("ごめんなさい、現在の私の知識ではわかりません…");
	}

	if (isGeo(Sub)) {
		var coef = Sub[1] / Sub[0];
		var cons = Seq[1] - coef * Seq[0]
		document.write("a<sub>n+1</sub>=" + coef + "×a<sub>n</sub>+" + cons + "という漸化式で表せるよ")
		isZen = true;
	}

	//add code about sub of sub
}




if (isZen) {
	if (coef != 1) {
		var G = cons / (1 - coef);
		var F = Seq[0] - G;

		if (G === 0) { G = ""; }
		if (G > 0) { G = "+" + G; }
		if (F === 1) { F = ""; } else { F = F + "×"; }
		//fixes display problems
		document.write("<hr>一般項<br><font size=20>" + F + coef + "<sup>n-1</sup>" + G + "</font><hr>");
	}
	else {
		if (isS) {
			var G = Math.sqrt(Seq[0]) - cons;
			var F = cons;
			if (G === 0) { G = ""; } if (G > 0) { G = "+" + G; }
			if (F === 1) { F = ""; } else { F = F + "×"; }
			document.write("<hr>一般項<br><font size=20>(" + F + "n" + G + ")<sup>2</sup></font><hr>")
		}
		else {
			var G = Seq[0] - cons;
			var F = cons;
			if (F === 1) { F = ""; } else { F = F + "×"; }
			if (G === 0) { G = ""; } if (G > 0) { G = "+" + G; }
			document.write("<hr>一般項<br><font size=20>" + F + "n" + G + "</font><hr>")
		}
	}

	for (i = Seq.length; i < 100; i++) {
		Seq.push(Seq[i - 1] * coef + cons);
	}
}   //fills in Seq till 100

for (T = 0; T < Seq.length; T++) {
	var U = Number(T) + 1;
	document.write("<br>a<sub>" + U + "</sub>= " + Seq[T])
}/*lists all the nums in sequence*/

//end of main function


function isGeo(A) {
	var D = A[1] / A[0];
	for (C = 2; C < A.length; C++) {
		if (A[C] / A[C - 1] != D) {
			return false;
		}
	}
	return true;
};  /*Checks if sequence "A" is geometric*/

function isDif(A) {
	var C = A[1] - A[0];
	for (i = 2; i < A.length; i++) {
		if (A[i] - A[i - 1] != C) { return false; }
	}
	return true;
};


function isSquare(A) {
	var T = Math.sqrt(A[1]) - Math.sqrt(A[0]);
	for (C = 2; C < A.length; C++) {
		if (T != Math.sqrt(A[C]) - Math.sqrt(A[C - 1])) {
			return false;
		}
	}
	return true;
};  //checks if it goes like 1,4,9,16,...

function isFibo(A) {
	for (C = 3; C < A.length; C++) {
		if (A[C] != A[C - 1] + A[C - 2]) { return false }
	}
	return true;
};

function func() {
	var A = prompt("何番目の数が知りたい？（" + Seq.length + "個目まで）");
	alert(A + "番目は" + Seq[A - 1] + "だよっ");
};

function sum() {
	var Sum = 0;
	var A = prompt("何番目の数までの和が知りたい？（" + Seq.length + "個目まで）");
	for (C = 0; C < A; C++) {
		Sum = Sum + Seq[C];
	}
	alert(A + "番目までの項を足したら	、" + Sum + "になるよっ");
};
