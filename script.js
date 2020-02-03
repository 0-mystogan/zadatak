const dodaj = () => {
	var rowI = document.getElementById('input').value;
	var columnI = document.getElementById('output').value;
	//console.log(document.getElementById('input').value);
	if (rowI > 5 || columnI > 5) {
		var div = document.getElementById('main');
		var div2 = document.createElement('div');
		div2.innerText = 'Red ili kolona ne smiju da budu veći od 5';
		div2.className = 'upozorenje';

		div.appendChild(div2);
		setTimeout(() => (div2.style.display = 'none'), 1300);
		return;
	}

	const generisiTabelu = () => {
		var div = document.getElementById('main');

		//izbrisi tabelu ako vec postoji!
		// for (let i = 0; i < 10; i++) {
		// 	for (let j = 0; j < 10; j++) {
		// 		if (document.getElementsByClassName('kocka').length > 0) {
		// 			var element = document.getElementById(`${i}${j}`);
		// 			element.parentElement.removeChild(element);
		// 		}
		// 	}
		// 	if (document.getElementsByClassName('red').length > 0) {
		// 		var element = document.getElementById(`${i}`);
		// 		element.parentElement.removeChild(element);
		// 	}
		// }

		//genersi tabelu!
		for (let i = 0; i < rowI; i++) {
			var div2 = document.createElement('div');
			div2.className = 'red';
			div2.id = `${i}`;
			div.appendChild(div2);
			for (let j = 0; j < columnI; j++) {
				var div3 = document.createElement('div');
				div3.id = `${i}${j}`;
				div3.className = 'kocka';
				if (i == rowI - 1 && j == columnI - 1) div3.classList = 'prva kocka';
				div2.appendChild(div3);
			}
		}
	};
	generisiTabelu();

	var row = rowI - 1;
	var column = columnI - 1;
	var brojac = 1;
	var krug = 0;

	const idi = () => {
		var r = row;
		var c = column;
		if (r >= 0 && r < rowI && c >= 0 && c < columnI)
			if (document.getElementById(`${r}${c}`).innerText == '') {
				document.getElementById(`${r}${c}`).innerText = `${brojac}`;
			}
		brojac++;
	};

	//ide ukrug
	var rf = row;
	var cf = column;
	while (brojac <= rowI * columnI) {
		for (let i = 0; i < cf - krug; i++) {
			idi();
			column--;
		}
		if (krug > 0) {
			row -= krug;
			column += krug;
		}
		for (let i = 0; i < rf - krug; i++) {
			if (krug > 0 && row - krug == 0) continue;
			idi();
			row--;
		}

		for (let i = 0; i < cf - krug; i++) {
			if (krug > 0 && column + krug == cf) continue;
			idi();
			column++;
		}

		for (let i = 0; i < rf - krug; i++) {
			if (krug > 0 && row + krug == rf) continue;
			idi();
			row++;
		}

		krug++;
		row--;
		column--;
	}
};
