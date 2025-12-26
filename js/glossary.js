const glossaryMap = new Map();
const rawMap = new Map();

rawMap.set("ATM", { title: "Automated Teller Machine", groups: []});

rawMap.set("BaaS", { title: "Backend as a Service", groups: ["aaS"]});

rawMap.set("ETF", { title: "Exchange-Traded Fund", groups: []});

rawMap.set("JAX-WS", { title: "Java #API for #XML Web Services", groups: ["java"], classes: ["nowrap"]});

rawMap.set("MD", { title: "Markdown Documentation", groups: []});
rawMap.set("MCQ", { title: "Multiple Choice Question", groups: []});
rawMap.set("MCP", { title: "Model Context Protocol", groups: ["ai", "protocol"]});

rawMap.set("POJO", { title: "Plain Old Java Object", groups: ["java"]});

rawMap.set("ROI", { title: "Return on Investment", groups: []});
rawMap.set("RGB", { html: [{tag: "span", class: "red", text: "Red"}, {tag: "span", class: "green", text: "Green"}, {tag: "span", class: "blue", text: "Blue"}], groups: []});


	function getGlossary() {
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				const ths = this.responseXML.getElementsByTagName("th");
				Array.from(ths).forEach( th => {
					glossaryMap.set(th.id, th.nextSibling.nextSibling.innerText)
				});
			}
		};
		xhttp.open("GET", "Glossary.html", true);
		xhttp.responseType = "document";
		xhttp.send();
	}

	if (!document.URL.startsWith("file") && !document.URL.includes("Glossary.html")) {
		getGlossary();
	}

	if (!document.URL.includes("Glossary.html")) {
		rawMap.forEach((value, key, map) => {
				glossaryMap.set(key, value.title)
			});

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
	}
