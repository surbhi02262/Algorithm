
let x = [
	{t: 24, d: [71]},
	{t: 71, d: []},
	{t: 55, d: [40]},
	{t: 73, d: [71]},
	{t: 40, d: [24,73]}
]
let y = []
function createTask(){
	for(let i = 0; i < x.length; i++) {
		let z = y.indexOf(x[i].t)
		 if(z === -1) {
		 	y.push(x[i].t)
		 	z = y.indexOf(x[i].t)
		 }

		 x[i].d.map(t => {
		 	let p = y.indexOf(t)
		 	if(p !== -1 && p < z){}
		 	else {
		 		if(p === -1) {
		 			y.splice(z,0,t)
		 		} else {
		 			y.splice(p,1)
		 			y.splice(z,0,t)
		 		}
		 	}	
		 })
	}
}
createTask(x);
console.log(y);
