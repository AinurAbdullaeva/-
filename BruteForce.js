let fs = require ("fs");
let S= fs.readFileSync("1000000a.txt");
S = S.toString();
let T = fs.readFileSync("ab.txt");
T = T.toString();
let i=0;
n = S.length;
m = T.length;
arr=new Array();
const start = new Date().getTime();
while (i<n-m+1){
	j=0;
	while (S[i+j]==T[j]){
		j++;
		if (j==m){
			arr.push(i);
		}
	}
	i++;
}
//cosnole.log(arr);
const end = new Date().getTime();
console.log(arr.length, end-start);
