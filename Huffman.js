let fs = require ("fs");
let str = fs.readFileSync("test.txt");
str = str.toString()

function Node (letter, freq, used, father, code){
	this.letter = letter;
	this.freq = freq;
	this.used = used;
	this.father = father;
	this. code = code;
}

let alph = new Array();

for (let i=0; i < str.length; i++){
	alph[str.charAt(i)] = 0;
}
for (let i=0; i< str.length; i++){
	alph[str.charAt(i)] += 1;
}

let tree=new Array();

for (i in alph){
	let n = new Node(i, alph[i], 0, null,' ');
	tree.push(n);
}
lentree=tree.length;


tree = tree.sort((a,b)=> a.freq > b.freq ? 1 : -1);
for (let j=0; j<lentree;j++){
	for (let k=0; k<lentree; k++){
		if (tree[j].used==0 & tree[k]. used==0 && tree[k]!=tree[j]){
			let v= new Node(tree[j].letter + tree[k].letter, tree[j].freq + tree[k].freq,0, null, '');
			tree.push(v);
			tree[j].father= tree.length-1;
			tree[k].father= tree.length-1;
			tree[j].used=1;
			tree[k].used=1;
			tree[j].code+='0';
			tree[k].code+='1';
		}
	}
}
for (let j=lentree; j<tree.length;j++){
	for (let k=lentree; k<tree.length; k++){
		if (tree[j].used==0 & tree[k]. used==0 && tree[k]!=tree[j]){
			let v= new Node(tree[j].letter + tree[k].letter, tree[j].freq + tree[k].freq,0, null, '');
			tree.push(v);
			tree[j].father= tree.length-1;
			tree[k].father= tree.length-1;
			tree[j].used=1;
			tree[k].used=1;
			tree[j].code+='0';
			tree[k].code+='1';
		}
	}
}

	


for (let k=0; k < tree.length ;k++){
	console.log(tree.length)
	for (j=0; j<tree.length; j++){
		if (k==tree[j].father){
			console.log(j, k);
			tree[j].code+=tree[k].code;
		}
	}
}
console.log(tree);
function reverseString(str) {
	return str.split('').reverse().join('');

}
for (i in tree){
	tree[i].code = reverseString(tree[i].code);
}
str.split('')
let decodestr=0;
for (l in str){
	for (i=0; i<tree.length; i++){
		if (str[l]== tree[i].letter){
			decodestr+= tree[i].code;
		}
	}
}
console.log(decodestr.split(/\s+/).join(''));
		






