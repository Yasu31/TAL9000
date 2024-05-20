function showEquation(latex){
	// make it easy to display equations with the same style
	return `<span style="font-size:30px">\\(${latex}\\)</span>`;
}

function addRow(firstCol, secondCol){
	// make it easy to add new rows to tables (make the <table></table> tags yourself)
	return `<tr><td>${firstCol}</td><td>${secondCol}</td></tr>`;
}

class SequenceObject {
	// 数列の判定を行い、数列についての情報を保存するクラス
    constructor() {
    }
    check(seq) {
		// 数列がこのクラスの種類に合致するかどうかを判定する
        throw new Error("must be implemented by subclass");
    }

    describe() {
		// 数列の種類や一般項などの情報を文章として返す
        throw new Error("must be implemented by subclass");
    }

    ippan_ko(n) {
		// 数列のn番目の項を返す
        throw new Error("must be implemented by subclass");
    }
}

class GeometricSequence extends SequenceObject {
	// 等比数列のクラス
	constructor() {
		super();
		this.ratio = 0;  // 公比
		this.first_term = 0;  // 初項
	}
	check(seq) {
		this.ratio = seq[1] / seq[0];
		this.first_term = seq[0];
		// 数列の各項が等比数列の条件を満たすか判定
		return seq.every((value, index, array) => index === 0 || value / array[index - 1] === this.ratio);
	}
	describe() {
		let message = `初項が${this.first_term}、公比が${this.ratio}の等比数列だね。`;
		message += "<table>";
		message += addRow("一般項", showEquation(`a_n = ${this.first_term} \\times ${this.ratio}^{n-1}`));
		message += addRow("漸化式", showEquation(`a_1 = ${this.first_term}, a_{n+1} = ${this.ratio} a_n`));
		message += addRow("和の公式", showEquation(`\\Sigma_{k=1}^n a_k = \\frac{${this.first_term}(1 - ${this.ratio}^n)}{${1 - this.ratio}}`));
		message += "</table>";
		return message;
	}
	ippan_ko(n) {
		return this.first_term * (this.ratio ** (n - 1));
	}
}

class ArithmeticSequence extends SequenceObject {
	constructor() {
		super();
		this.diff = 0;
		this.first_term = 0;
	}
	check(seq) {
		this.diff = seq[1] - seq[0];
		this.first_term = seq[0];
		return seq.every((value, index, array) => index === 0 || value - array[index - 1] === this.diff);
	}
	describe() {
		let message = `初項が${this.first_term}、公差が${this.diff}の等差数列だね。`;
		message += "<table>";
		message += addRow(`一般項`,showEquation(`a_n = ${this.first_term} + ${this.diff}(n-1)`));
		message += addRow("漸化式", showEquation(`a_1 = ${this.first_term}, a_{n+1} = a_n + ${this.diff}`));
		message += addRow("和の公式", showEquation(`\\Sigma_{k=1}^n a_k = \\frac{n(${2*this.first_term - this.diff} + ${this.diff}n)}{2}`));
		message += "</table>";
		return message;
	}
	ippan_ko(n) {
		return this.first_term + this.diff * (n - 1);
	}
}

class FibonacciSequence extends SequenceObject {
	constructor() {
		super();
		this.first_term = 0;
		this.second_term = 0;
	}
	check(seq) {
		this.first_term = seq[0];
		this.second_term = seq[1];
		return seq.length < 3 || seq.every((value, index, array) => index < 2 || value === array[index - 1] + array[index - 2]);
	}
	describe() {
		let answerText = "フィボナッチ数列を入力するとはあざとい…";
		answerText += `<br><br>漸化式: ${showEquation(`a_1 = ${this.first_term}, a_2 = ${this.second_term}, a_{n+1} = a_n + a_{n-1}`)}`;
		return answerText;
	}
	ippan_ko(n) {
		if (n < sequence_values.length) {
			return sequence_values[n];
		}
		return this.ippan_ko(n - 1) + this.ippan_ko(n - 2);
	}
}

// Input sequence storage
const sequence_values = [];
let sequence = null;

// Add to sequence from user input
function addToSequence() {
    const input = document.getElementById('sequenceInput');
	if (input.value == "") {
		alert('数字を入力してから「数列に追加」を押してね');
		return;
	}
    const number = Number(input.value.trim());
    if (isNaN(number)) {
        alert('数字を半角で入力してから「数列に追加」を押してね');
        return;
    }
    sequence_values.push(number);
    updateSequenceDisplay();
	// don't allow the user to push the execute button if there are too few elements in the sequence
    document.getElementById("executeButton").disabled = sequence_values.length < 3;
    input.value = ''; // Clear the input
    input.focus(); // Keep focus on input for next entry
	// allow user to reset the sequence after the first element is added
	document.getElementById("resetButton").disabled = false;
}

// Update sequence display on the webpage
function updateSequenceDisplay() {
	let sequenceHTML = '';
	for (let index = 0; index < sequence_values.length; index++)
		sequenceHTML += `<br>a<sub>${index + 1}</sub>= ${sequence_values[index]}`;
    document.getElementById("sequenceInputSoFar").innerHTML = sequenceHTML;
    document.getElementById("text_before_sequenceInput").innerHTML = `<b>a<sub>${sequence_values.length + 1}</sub></b> = `;
}

// Compute and display sequence information
function computeSequence() {
	document.getElementById("sequenceInput").disabled = true;
	document.getElementById("addButton").disabled = true;
	document.getElementById("executeButton").disabled = true;
	document.getElementById("resetButton").disabled = false;
	document.getElementById("resetButton").disabled = false;
	document.getElementById("user_specified_idx").disabled = false;
	document.getElementById("sum_start_idx").disabled = false;
	document.getElementById("sum_end_idx").disabled = false;

	let sequenceType = '';
	const sequenceObjects = [new GeometricSequence(), new ArithmeticSequence(), new FibonacciSequence()];
	for (const sequenceObject of sequenceObjects) {
		if (sequenceObject.check(sequence_values)) {
			// set the object to a global variable so it can be accessed from anywhere
			sequence = sequenceObject;
			console.log(`Sequence type identitied: ${sequenceObject.constructor.name}`);
			break;
		}
	}
	if (sequence === null) {
    	document.getElementById("sequenceInputSoFar").innerHTML += "<br>ごめんなさい、数列の種類がわかりませんでした...リセットして別の数列で試してみてください。";
		return;
	}
	document.getElementById("sequenceInputSoFar").innerHTML = "";
    displaySequenceInfo();
    extendSequence();
    displayExtendedSequence();
	updateUserQueries();
}

// Display sequence information based on type
function displaySequenceInfo() {
    document.getElementById("sequenceInputSoFar").innerHTML = sequence.describe();
	MathJax.typeset();
}

function extendSequence() {
    while (sequence_values.length < 100) {
		sequence_values.push(sequence.ippan_ko(sequence_values.length + 1));
    }
}

function updateUserQueries(){
	// update the UI that displays the user specified info about the index on the page
	let user_specified_idx = Number(document.getElementById("user_specified_idx").value);
	if (!isNaN(user_specified_idx)) {
		document.getElementById("user_specified_output").innerHTML = `${sequence.ippan_ko(user_specified_idx)}`;
	}
	let sum_start_idx = Number(document.getElementById("sum_start_idx").value);
	let sum_end_idx = Number(document.getElementById("sum_end_idx").value);
	if (!isNaN(sum_start_idx) && !isNaN(sum_end_idx)) {
		let sum = 0;
		for (let i = sum_start_idx; i <= sum_end_idx; i++) {
			sum += sequence.ippan_ko(i);
		}
		document.getElementById("sum_output").innerHTML = `${sum}`;
	}
}

// Display the extended sequence
function displayExtendedSequence() {
	let sequenceHTML = '';
	for (let index = 0; index < sequence_values.length; index++)
		sequenceHTML += `<br>a<sub>${index + 1}</sub>= ${sequence_values[index]}`;
    document.getElementById("sequenceOutput").innerHTML += sequenceHTML;
}

// Reset the application to initial state
function reset() {
    sequence_values.length = 0; // Clear the array
    document.getElementById("sequenceOutput").innerHTML = "";
	document.getElementById("sequenceInputSoFar").innerHTML = "";
    document.getElementById("text_before_sequenceInput").innerHTML = "<b>a<sub>1</sub></b> = ";
    document.getElementById("sequenceInput").disabled = false;
    document.getElementById("addButton").disabled = false;
    document.getElementById("executeButton").disabled = true;
    document.getElementById("resetButton").disabled = true;
	document.getElementById("user_specified_idx").disabled = true;
	document.getElementById("sum_start_idx").disabled = true;
	document.getElementById("sum_end_idx").disabled = true;
	document.getElementById("user_specified_output").innerHTML = "";
	document.getElementById("sum_output").innerHTML = "";
    document.getElementById("sequenceInput").focus();
	sequence = null;
}