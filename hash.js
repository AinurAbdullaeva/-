let fs = require ("fs");
let S= fs.readFileSync("str.txt");
S = S.toString();
let T = fs.readFileSync("understr.txt");
T = T.toString();
let i=0;
n = S.length;
m = T.length;
function hashT(T){
	let hT=0;
	for(i=0; i<m; i++){
		hT+= T.charCodeAt(i);
		return hT;
	}
}

hash=0;
for(i=1; i<=n-m+1;i++){
   for(j=i; j<=i+m-1; j++){
	   hash+=S.charCodeAt(j)*Math.pow(2,n-j);
   }
   if (hash== hashT(T)) console.log(i);
}

