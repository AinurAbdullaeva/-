let fs = require ("fs");
let str = fs.readFileSync("test.txt");
str = str.toString();

let alph = new Array();
for (let i = 0; i < str.length; i++){
	alph[str.charAt(i)] = 0;
}
for (let i = 0; i < str.length; i++){
	alph[str.charAt(i)]++;
}
let n = 0;
for (i in alph){
	alph[i] /= str.length;
	n++;
}
h=0;
if (alph.length==1) h=0;
else{
	for (i in alph){
	h -= alph[i]*Math.log(alph[i])/Math.log(n);
	}
}
console.log(h);