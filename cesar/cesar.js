let fs = require ("fs");
let str= fs.readFileSync("cs.txt");
str=str.toString();
 
n=str.length;

function encode(str){
	let newStr = "";
	function randomNumber(min, max){
		const r = Math.random()*(max-min) + min;
		return Math.floor(r);
	}
	let s=randomNumber(0,26);
	console.log(s);
	for(let i=0;i<str.length;i++){
		if(str.charCodeAt(i)>=97&&str.charCodeAt(i)<=122){
			newStr+=String.fromCharCode((str.charCodeAt(i)+s-97)%26+97);
		}
		else{
			newStr+=String.fromCharCode(str.charCodeAt(i));
		}
	}
    return newStr;
}
str=encode(str);
console.log(str);
function decode(str){
	const realFreq={
    "a": 8.167,
    "b": 1.492,
    "c": 2.782,
    "d": 4.253,
    "e": 12.702,
    "f": 2.228,
    "g": 2.015,
    "h": 6.094,
    "i": 6.966,
    "j": 0.153,
    "k": 0.772,
    "l": 4.025,
    "m": 2.406,
    "n": 6.749,
    "o": 7.507,
    "p": 1.929,
    "q": 0.095,
    "r": 5.987,
    "s": 6.327,
    "t": 9.056,
    "u": 2.758,
    "v": 0.978,
    "w": 2.360,
    "x": 0.150,
    "y": 1.974,
    "z": 0.074
	};
	factFreq=new Array();
	for (let i=0;i<n;i++){
		let count=0;
		for (let j=0;j<n;j++){
			if (str[i]==str[j]){
				count++;
			}
		}
		factFreq[str.charAt(i)]=count/n;
	}
	sums=new Array();
	s_ind=new Array();
	let alph='abcdefghijklmnopqrstuvwxyz';
	for (let s=0;s<=26;s++){
		let sum=0;
		for (let k=0; k<n;k++){ 
		    //console.log(str);
			letter=str.charAt(k);
			let pos=Object.keys(realFreq).indexOf(letter);
			let newPos=(pos+s)%26;
			//console.log(newPos);
            const newLetter=alph.charAt(newPos);
			//console.log(newLetter);
			let temp=realFreq[newLetter]-factFreq[str.charAt(k)];
			sum+=Math.pow(temp,2);
		}
		sums.push(sum);
		s_ind.push(s);
	}
	let m=sums.length;
	console.log(m);
	console.log(sums);
	let ind=0;
	let minsum=100000000000000000;
	for (let i=0;i<m;i++){
		if(sums[i]<minsum){
			minsum=sums[i];
			ind=i;
		}
	}
	return (Math.abs(27-ind));
}
console.log(decode(str));
