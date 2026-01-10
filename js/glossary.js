const glossaryMap = new Map();

		rawMap.forEach((value, key, map) => {
				if (value.title)
					glossaryMap.set(key, value.title)
				else {
					let innerText = "";
					value.html.forEach( html => {
						innerText += html.text;
					});
					glossaryMap.set(key, innerText);
				}
		});

		document.addEventListener("DOMContentLoaded", (event) => {
			const glossaryElements = document.getElementsByClassName('get-title');
			Array.from(glossaryElements).forEach( (glossaryElement) => {
				glossaryElement.addEventListener("mouseover", (event) => {
						if (!event.target.title) {
							const withId = event.target.dataset.id ? event.target.dataset.id : '';
							const key = event.target.dataset.case == undefined ? event.target.innerHTML : event.target.innerHTML.toUpperCase();
							const title = glossaryMap.get(key + withId);
							if (title) event.target.title = title;
						}
					}
				);
			});
		});
