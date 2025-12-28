function parseMap(map) {
	map.forEach((value, key, map) => {
		let parentTable = document.getElementById(key.charAt(0).toUpperCase());
		let newRow = parentTable.insertRow(-1);
		const th = document.createElement('th');
		th.id = key;
		if (value.classes) {
			th.classList.add(value.classes[0]);
		}
		if (value.th) {
			th.appendChild(document.createTextNode(value.th));
		} else {
			th.appendChild(document.createTextNode(key));
		}
		newRow.appendChild(th);

		let i = 1;
		let descriptionCell = newRow.insertCell(i++);

		if (value.html) {
			for (const block of value.html) {
				let description = document.createTextNode(block.text);
				if (block.tag) {
					const tag = document.createElement(block.tag);
					if (block.class) tag.classList.add(block.class);
					tag.appendChild(description);
					descriptionCell.appendChild(tag);
				} else {
					descriptionCell.appendChild(description);
				}
			}
		}
		else
		if (value.title.includes('#')) {
			let titleArray = value.title.split(" ");
			let nodeText = "";
			for (const word of titleArray) {
				if (word.startsWith('#')) {
					descriptionCell.appendChild(document.createTextNode(nodeText + " "));
					let a = createHrefLink(word.substr(1), word.substr(1));
					descriptionCell.appendChild(a);
					nodeText = " ";
				} else {
					nodeText += word;
				}
			}
		} else {
			descriptionCell.appendChild(document.createTextNode(value.title));
		}

		Array.from(value.groups).forEach( group => {
			if (!group) return;
			const cell = newRow.insertCell(i++);
			cell.className = "template";
			cell.dataset.id = group;
		});

		if (i === 2) {
			newRow.insertCell(i++);
		}
	});
}