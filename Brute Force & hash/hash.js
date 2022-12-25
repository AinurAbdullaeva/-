let fs = require ("fs");
let S= fs.readFileSync("1000000a.txt");
S = S.toString();
let T = fs.readFileSync("ab.txt");
T = T.toString();
let i=0;
n = S.length;
m = T.length;
arr=new Array ();
const start = new Date().getTime();
function hashT (){
	let subhash=0;
	for(let i=0;i<m;i++){
		subhash+=T.charCodeAt(i)*(2**(m-i-1));
	}
	return subhash
}
function rehashS(){
	let hash=0;
	for(let i=0;i<m;i++){
		hash+=S.charCodeAt(i)*(2**(m-i-1));
	}
	return hash;
	
}
let subhash=hashT();
let hash=rehashS();
if  (hash==subhash){
	arr.push(0);
}
for (i=1;i<=n-m;i++){
	hash=(hash-S.charCodeAt(i-1)*(2**(m-1)))*2+S.charCodeAt(i+m-1);
	if (hash==subhash){
		arr.push(i);
	}
}
//console.log(arr);
const end = new Date().getTime();
console.log(end-start);


