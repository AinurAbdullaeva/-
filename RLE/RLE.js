let fs = require("fs"); 
let str = fs.readFileSync("test.txt");
str = str.toString();
function encode(str){
	let res = "";
	let pos = "";
	let n = 1;
	let i=0;
	pos = str.charAt(i);
	while ((i<str.length - 1)){
		while ((str.charAt(i) == str.charAt(i+1)) && !(n == 255)) {
			n++;
			pos+=str.charAt(i);
			i++;
		}
		i++;
		//console.log(n);
		if ((n >= 4) || (pos.includes("#"))) {
				res += "#" + String.fromCharCode(n) + pos[0];
				//console.log(String.fromCharCode(n));
		}
		else{
			let uncode_pos="";
			for (let j = 0; j< n; j++){
				console.log(n);
				uncode_pos += pos[0]
			}
			res += uncode_pos;
		}
		pos = "";
		n = 1;
	}
	return res;
}
new_str=encode(str);
console.log(new_str)
fs.writeFileSync("code.txt",new_str);

function decode(new_str){
	let res="";
	let i = 0;
	while (i < new_str.length-2) {
		if (new_str.charAt(i) == "#") {
			let pos = "";
			for (let j = 0; j < new_str.charCodeAt(i+1); j++){
				pos += new_str.charAt(i+2);
			}
			res += pos;
			i += 3;
		} 
		else {
			res += new_str.charAt(i);
			i ++;
		}
	}
	return res;
}
let decode_str=(decode(new_str));
fs.writeFileSync("decode.txt", decode_str);


