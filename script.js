//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function sortBandNames(arr) {

	function removeArticles(name){
		return name.replace(/^(?:The|An?|A)\s+/i, '')

	}

	arr.sort((a,b)=>{
		let nameA=removeArticles(a);
		let nameB=removeArticles(b)
		return nameA.localeCompare(nameB)
	})

	let ul=doument.getElementById('band')

	ul.innerHTML=''

	arr.forEach((name)=>{

		let li=document.createElement('li');
		li.textContent=name;
		ul.appendChild(li)
		
	})
}

sortBandNames(touristSpots)
