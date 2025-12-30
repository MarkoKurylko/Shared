const glossaryMap = new Map();
const rawMap = new Map();

rawMap.set("ATM", { title: "Automated Teller Machine", groups: []});

rawMap.set("BaaS", { title: "Backend as a Service", groups: ["aaS"]});

rawMap.set("CJK", { title: "Chinese Japanese Korean", groups: []});
rawMap.set("CMT", { title: "Container Managed Transaction", groups: ["jta"]});

rawMap.set("DTAP", { title: "Development, Testing, Acceptance and Production", groups: ["software"]});
rawMap.set("DPI",  { title: "Deep Packet Inspection", groups: ["security"]});
rawMap.set("DVD",  { title: "Digital Video Disk", groups: ["digital-video"]});
rawMap.set("DVR",  { title: "Digital Video Recorder", groups: ["digital-video"]});
rawMap.set("DSL2", { title: "Domain-Specific Language", th: "DSL", groups: ["computer-language"], classes: ["skip"]});

rawMap.set("ETF", { title: "Exchange-Traded Fund", groups: []});

rawMap.set("JAX-WS", { title: "Java #API for #XML Web Services", groups: ["java"], classes: ["nowrap"]});

rawMap.set("MD", { title: "Markdown Documentation", groups: []});
rawMap.set("MCQ", { title: "Multiple Choice Question", groups: []});
rawMap.set("MCP", { title: "Model Context Protocol", groups: ["ai", "protocol"]});

rawMap.set("POJO", { title: "Plain Old Java Object", groups: ["java"]});

rawMap.set("RED", { title: "Rate, Errors, Duration", groups: ["metrics"]});
rawMap.set("ROI", { title: "Return on Investment", groups: []});
rawMap.set("RGB", { html: [{tag: "span", class: "red", text: "Red"}, {text:" "}, {tag: "span", class: "green", text: "Green"}, {text:" "}, {tag: "span", class: "blue", text: "Blue"}], groups: []});

rawMap.set("SHA", { title: "Secure Hash Algorithms", groups: ["security"]});
rawMap.set("SLA", { title: "Service Level Agreement", groups: ["service-level"]});
rawMap.set("SLI", { title: "Service Level Indicator", groups: ["service-level"]});
rawMap.set("SLO", { title: "Service Level Objective", groups: ["service-level"]});

rawMap.set("TX", { title: "Transaction", groups: ["dbms"]});

rawMap.set("UoW", { title: "Unit of Work", groups: ["jpa", "dp"]});
rawMap.set("USE", { title: "Utilization, Saturation, Errors", groups: ["metrics"]});

rawMap.set("XSS", { html: [{tag: "em", class: "fire-brick", text: "Cross"}, {text:"-Site Scripting"}], groups: ["vulnerability"]});

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
