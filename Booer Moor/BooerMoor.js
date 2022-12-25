let fs = require ("fs");
let S= fs.readFileSync("str.txt");
S = S.toString();
let T = fs.readFileSync("substr.txt");
T = T.toString();
n = S.length;
m = T.length;
N=new Array();
answer=new Array()
//Shift1=new Array();
k_ind=new Array();
for (let i=0; i<m;i++){
	for (let j=0;j<m;j++){
		N[T.charAt(j)]=j+1;
	}
}
console.log(N);
f='';
for (let i=0; i<m;i++){
	f+='*';
}
Tw=f+T;
//console.log(Tw);
for (let l=0; l<=m;l++){
	let k=-m;
	let maxk=-m-1;
	while(k<=m-l){
		tempT='';
		tempTw='';
		for (let i=m-l;i<=m-1;i++){
			tempT+=T[i];
		}
		let tempk=k;
		while (tempTw.length<l){
			if(tempk>=0){
				tempTw+=T[tempk]
			}
			else{
				tempTw+=Tw[tempk+m];
			}
			tempk++;
		}
		//console.log(tempT);
		/*if (k<0){
			for (let j=k+m;j<=k+m+l-1;j++){
				tempTw+=Tw[j];
			}
		}
		if (k>=0){
			for (let j=k;j<=k+l-1;j++){
				tempTw+=T[j];
			}
		}*/
		//console.log(tempTw);
		//console.log(tempTw,' ', tempT);
		col=0;
		for (let i=0;i<l;i++){
			if ((tempTw[i]==tempT[i]) || (tempTw[i]=='*')){
				col++;
			}
			//if (col==l)console.log(tempTw,' ', tempT);
		}
		//console.log(tempTw,' ',tempT,' ',col, ' ', l);
		//if (k>0) console.log(T[k-1],' ', T[m-l-1],' ',l);
		if ((col==l) && (((k>=0)&&(T[k-1]!=T[m-l-1])) || (k<0))){
			if (k>maxk) maxk=k;
			
		}
		k+=1;
	}
	k_ind.push(maxk+1);
}
console.log(k_ind);
let ind =0;
let i=0;
let Shift1;
let Shift2=new Array();
let mow=0;
for (int=0;i<=m;i++){
	mow=m-k_ind[i]-i+1;
	Shift2.push(mow);
}
while (ind<=n-m+1){
	let pos=m-1;
	let l=0;
	while ((S[ind + pos]==T[pos]) && (pos>=0)){
		//console.log(S[ind+pos], ' ', T[pos]);
		l++;
		pos--;
		if (pos==0) answer.push(ind);
    }
	//console.log(l);
	let symb=0;
	if (l!=m){
		for (j in N){
			if (j==S[ind+pos]) symb=j;
		}
		Shift1=Math.max(m-N[symb]-l,1);
	}
	else Shift1=1;
	console.log(Shift1, ' ', Shift2[l],' ',l,' ', pos, ' ', ind);
	ind+=Math.max(Shift2[l],Shift1);
}
console.log(answer);

