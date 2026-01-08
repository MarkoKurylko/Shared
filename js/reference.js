function createHrefLink(link, label) {
	const element = document.createElement("a");
	element.innerHTML = label;
	element.href = "#" + link;
	return element;
}

function injectLinks(sourceText, parentElement) {
		const sourceTextArray = sourceText.split(" ");
		let nodeText = "";
		for (const word of sourceTextArray) {
			if (word.startsWith('#')) {
				parentElement.appendChild(document.createTextNode(nodeText + " "));
				let a;
				if (word.includes(".")) {
					const linkAndText = word.split(".");
					a = createHrefLink(linkAndText[0].substr(1), linkAndText[1]);
				} else {
					a = createHrefLink(word.substr(1), "");
				}
				parentElement.appendChild(a);
				nodeText = " ";
			} else {
				nodeText += word + " ";
			}
		}
		parentElement.appendChild(document.createTextNode(nodeText));
}

function createGroupTag(group, groupsTable) {
		const newRow = groupsTable.insertRow(-1);
		const th = document.createElement('th');
		th.classList.add("skip");
		th.appendChild(document.createTextNode(group));
		newRow.appendChild(th);

		const groupsCell = newRow.insertCell(1);
		const groupTag = document.createElement("DIV");
		groupTag.id = group;
		groupsCell.appendChild(groupTag);

		return groupTag;
}

function parseMap(map, groupsTable) {
	map.forEach((value, key, map) => {
		let parentTable = document.getElementById(key.charAt(0).toUpperCase());
		let newRow = parentTable.insertRow(-1);
		const th = document.createElement('th');
		th.id = key;
		if (value.classes) {
			if (Array.isArray(value.classes[0]))
				value.classes[0].forEach(css => {th.classList.add(css)})
			else
				th.classList.add(value.classes[0]);
		}
		if (value.th) {
			th.appendChild(document.createTextNode(value.th));
		}
		newRow.appendChild(th);

		let i = 1;
		let descriptionCell = newRow.insertCell(i++);

		if (value.html) {
			for (const block of value.html) {
				let description = document.createTextNode(block.text);
				if (block.tag) {
					const tag = document.createElement(block.tag);
					if (block.href) tag.href = block.href;
					if (block.class) tag.classList.add(block.class);
					tag.appendChild(description);
					descriptionCell.appendChild(tag);
				} else {
					descriptionCell.appendChild(description);
				}
			}
		} else if (value.title.includes('#')) {
			injectLinks(value.title, descriptionCell);
		} else {
			descriptionCell.appendChild(document.createTextNode(value.title));
		}

		// Groups
		const groupsCell = newRow.insertCell(i++);
		Array.from(value.groups).forEach( group => {
			if (!group) return;
			const groupLink = createHrefLink(group, group);
			groupsCell.appendChild(groupLink);
			groupsCell.appendChild(document.createTextNode(" "));

			let groupTag = document.getElementById(group);
			if (!groupTag) {
				groupTag = createGroupTag(group, groupsTable);
			}
			groupTag.appendChild(document.createTextNode(" "));
			groupTag.appendChild(createHrefLink(th.id, th.innerHTML ? th.innerHTML : th.id));
		});

		//Notes
		const notesCell = newRow.insertCell(i++);
		if (value.notes) {
			if (value.notes.includes('#')) {
				injectLinks(value.notes, notesCell);
			} else {
				notesCell.appendChild(document.createTextNode(value.notes));
			}
		}

		// Svg Icon
		const svgCell = newRow.insertCell(i++);
		if (value.svg) {
			const img = document.createElement("img");
			img.src = "svg/" + value.svg + ".svg";
			img.classList.add("svg-logo");
			img.alt = value.svg;
			svgCell.appendChild(img);
		}

	});
}