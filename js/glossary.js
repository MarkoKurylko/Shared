const glossaryMap = new Map();
const rawMap = new Map();

rawMap.set("ATM", { title: "Automated Teller Machine", groups: []});

rawMap.set("AWS", { title: "Amazon Web Services", groups: ["aws", "cloud"]});
rawMap.set("AMI", { title: "Amazon Machine Image", groups: ["aws"]});
rawMap.set("ARN", { title: "Amazon Resource Name", groups: ["aws"]});
rawMap.set("AmazonEC2", { title: "Amazon Elastic Compute Cloud", th: "Amazon EC2", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AmazonECS", { title: "Amazon Elastic Container Service", th: "Amazon ECS", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AmazonEKS", { title: "Amazon Elastic Kubernetes Service", th: "Amazon EKS", groups: ["aws"], classes: [["skip", "nowrap"]], notes: "#K8s"});
rawMap.set("AmazonS3", { title: "Amazon Simple Storage Service", th: "Amazon S3", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AmazonEBS", { title: "Amazon Elastic Block Storage", th: "Amazon EBS", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AmazonEFS", { title: "Amazon Elastic File Storage", th: "Amazon EFS", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AmazonFSx", { html: [{text:"Amazon File Storage for "}, {tag: "b", text: "x"}], th: "Amazon FSx", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AmazonVPC", { title: "Amazon Virtual Private Cloud", th: "Amazon VPC", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AmazonQLDB", { title: "Amazon Quantum Ledger Database", th: "Amazon QLDB", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AmazonRDS", { title: "Amazon Relational Database Service", th: "Amazon RDS", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AmazonSNS", { title: "Amazon Simple Notification Service", th: "Amazon SNS", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AmazonSQS", { title: "Amazon Simple Queue Service", th: "Amazon SQS", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AmazonALB", { title: "Amazon Application Load Balancing", th: "Amazon ALB", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AmazonELB", { title: "Amazon Elastic Load Balancing", th: "Amazon ELB", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AmazonECR", { title: "Amazon Elastic Container Registry", th: "Amazon ECR", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("ACM", { title: "#AWS Certificate Manager", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AWSKMS", { title: "#AWS Key Management Service", th: "AWS KMS", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AWSSAM", { title: "#AWS Serverless Application Model", th: "AWS SAM", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AWSCLI", { title: "#AWS #CLI", th: "AWS CLI", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AWSCDK", { title: "#AWS Cloud Development Kit", th: "AWS CDK", groups: ["aws"], classes: [["skip", "nowrap"]]});

rawMap.set("AWSCDKCLI", { html: [{tag: "a", href: "#AWSCDK", text: "AWS CDK"}, { text: " "}, {tag: "a", href: "#CLI", text: "CLI" }], th: "AWS CDK CLI", groups: ["aws"], classes: [["skip", "nowrap"]]});

rawMap.set("BaaS", { title: "Backend as a Service", groups: ["aaS"]});

rawMap.set("CAN", { title: "Controller Area Network", groups: ["vehicle"]});
rawMap.set("CJK", { title: "Chinese Japanese Korean", groups: []});
rawMap.set("CMT", { title: "Container Managed Transaction", groups: ["jta"]});
rawMap.set("CLI", { html: [{text: "Command-Line Interface"}, {tag: "hr", class: "margin-3", text: ""}, {text: "Command-Line Interpreter"}], notes: "#AWSCLI.AWS_CLI #AWSCDKCLI.AWS_CDK_CLI", groups: []});

rawMap.set("DTAP", { title: "Development, Testing, Acceptance and Production", groups: ["software"]});
rawMap.set("DPI",  { title: "Deep Packet Inspection", groups: ["security"]});
rawMap.set("DVD",  { title: "Digital Video Disk", groups: ["digital-video"]});
rawMap.set("DVR",  { title: "Digital Video Recorder", groups: ["digital-video"]});
rawMap.set("DSL2", { title: "Domain-Specific Language", th: "DSL", groups: ["computer-language"], classes: ["skip"]});

rawMap.set("ETF", { title: "Exchange-Traded Fund", groups: []});

rawMap.set("GUID", { title: "Globally Unique IDentifier", groups: ["identifier"], notes: "The same as #UUID"});
rawMap.set("UUID", { title: "Universally Unique IDentifier", groups: ["identifier"], notes: "The same as #GUID"});

rawMap.set("JAX-WS", { title: "Java #API for #XML Web Services", groups: ["java"], classes: ["nowrap"]});
rawMap.set("JIT", { title: "Just-In-Time", groups: ["java", "computing"]});
rawMap.set("AOT", { title: "Ahead-Of-Time", groups: ["java", "computing"]});

rawMap.set("IDE2", { title: "Integrated Drive Electronics", th: "IDE", groups: ["computer", "pc-interface"], notes: "The same as #PATA", classes: ["skip"]});
rawMap.set("PATA", { title: "Parallel Advanced Technology Attachment", groups: ["computer", "pc-interface"], notes: "The same as #IDE2"});

rawMap.set("LED", { title: "Light Emitting Diode", groups: []});

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
rawMap.set("URI", { title: "Uniform Resource Identifier", groups: ["uniform-resource"], notes: "#URL is a subset of #URI"});
rawMap.set("URL", { title: "Uniform Resource Locator",    groups: ["uniform-resource"], notes: "#URL is a subset of #URI"});

rawMap.set("XSS", { html: [{tag: "em", class: "fire-brick", text: "Cross"}, {text:"-Site Scripting"}], groups: ["vulnerability"]});

rawMap.set("ZTNA", { title: "Zero Trust Network Access", groups: []});

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
