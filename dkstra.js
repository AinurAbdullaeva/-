
function toRpn(statement) {
	let result = '';
	let answer=0;
	let stack = [];
	const operators = {
		'+': 1,
		'-': 1,
		'*': 2,
		'/': 2,
		'^': 3
	};
	for (let i=0; i<statement.length; ++i) {
		const c = statement.charAt(i);
		if ((['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']).indexOf(c) >= 0 ) {
			result += c;
		}
		else if (c == '(') {
			stack.push(c);
		}
		else if (c == ')') {
			let s = stack.pop();
			while (s && s != '('){
				result += s;
				s = stack.pop();
			} 
		} 
		else if ((Object.keys(operators).indexOf(c) >= 0) && (c!='^')){
			while ( operators[stack.slice(-1)[0]] >= operators[c]) {
				result += stack.pop();
			}
		stack.push(c);
		}
		else stack.push(c);
	}
	let sym = '';
	while (sym = stack.pop()){
		result += sym;
	}
	console.log(result);
	for (let i=0; i<result.length; ++i) {
		const m = result.charAt(i);
		//console.log(m);
		if ((['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']).indexOf(m) >= 0 ) {
			stack.push(m);
			//console.log(m)
		}
		else if (m=='+'){
			b=(stack.pop())*1;
			a=(stack.pop())*1;
			stack.push(a+b);
		}
		else if (m=='-'){
			let b=(stack.pop())*1;
			let a=(stack.pop())*1;
			stack.push(a-b);
		}
		else if (m=='*'){
			let b=(stack.pop())*1;
			let a=(stack.pop())*1;
			stack.push(a*b)
		}
		else if (m=='/'){
			let b=(stack.pop())*1;
			let a=(stack.pop())*1;
			stack.push(a/b);
		}
		else if (m=='^'){
			//console.log(stack);
			let b=(stack.pop())*1;
			let a=(stack.pop())*1;
			stack.push(Math.pow(a,b));
		}
	}
	answer=stack.pop();
	return answer;
}

console.log(toRpn('(1+2-3/4/5^6^7-8)*(9+0-2)'));
console.log(eval('(1+2-3/4/5^6^7-8)*(9+0-2)'));


		

