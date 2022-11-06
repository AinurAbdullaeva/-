let fs = require ("fs");
let S= fs.readFileSync("str.txt");
S = S.toString();
let T = fs.readFileSync("understr.txt");
T = T.toString();
let i=0;
n = S.length;
m = T.length;
while (i<n-m+1){
	j=0;
	while (S[i+j]==T[j]){
		j++;
		if (j==m){
			console.log(i);
		}
	}
	i++;
}

