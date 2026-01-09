function createHrefLink(link, label) {
	const element = document.createElement("a");
	element.innerHTML = label;
	element.href = "#" + link;
	return element;
}

function addTextWithLinks(sourceText, parentElement) {
	if (!sourceText) return;
	if (sourceText.includes('#')) {
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
	} else {
		parentElement.appendChild(document.createTextNode(sourceText));
	}
}

function addHtmlBlock(html, parent) {
	for (const block of html) {
		if (block.tag) {
			const tag = document.createElement(block.tag);
			if (block.href) tag.href = block.href;
			if (block.class) tag.classList.add(block.class);
			addTextWithLinks(block.text, tag);
			parent.appendChild(tag);
		} else {
			addTextWithLinks(block.text, parent);
		}
	}
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
			addHtmlBlock(value.html, descriptionCell);
		} else {
			addTextWithLinks(value.title, descriptionCell);
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
			if (Array.isArray(value.notes)) {
				addHtmlBlock(value.notes, notesCell);
			} else {
				addTextWithLinks(value.notes, notesCell);
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