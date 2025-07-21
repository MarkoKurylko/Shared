const glossaryMap = new Map();

	function getGlossary() {
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				const ths = this.responseXML.getElementsByTagName("th");
				Array.from(ths).forEach( th => {
					glossaryMap.set(th.id, th.nextSibling.nextSibling.innerHTML)
				});
			}
		};
		xhttp.open("GET", "Glossary.html", true);
		xhttp.responseType = "document";
		xhttp.send();
	}

	getGlossary();

document.addEventListener("DOMContentLoaded", (event) => {
	const glossaryElements = document.getElementsByClassName('get-title');
	Array.from(glossaryElements).forEach( (glossaryElement) => {
		glossaryElement.addEventListener("mouseover", (event) => {
				if (!event.target.title) {
					const withId = event.target.dataset.id ? event.target.dataset.id : '';
					const key = event.target.dataset.case == undefined ? event.target.innerHTML : event.target.innerHTML.toUpperCase();
					event.target.title = glossaryMap.get(key + withId);
				}
			}
		);
	});
});
