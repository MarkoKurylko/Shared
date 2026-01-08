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
rawMap.set("AmazonFSx", { html: [{text: "Amazon File Storage for "}, {tag: "b", text: "x"}], th: "Amazon FSx", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AmazonVPC", { title: "Amazon Virtual Private Cloud", th: "Amazon VPC", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AmazonQLDB", { title: "Amazon Quantum Ledger Database", th: "Amazon QLDB", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AmazonRDS", { title: "Amazon Relational Database Service", th: "Amazon RDS", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AmazonSNS", { title: "Amazon Simple Notification Service", th: "Amazon SNS", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AmazonSQS", { title: "Amazon Simple Queue Service", th: "Amazon SQS", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AmazonALB", { title: "Amazon Application Load Balancing", th: "Amazon ALB", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AmazonELB", { title: "Amazon Elastic Load Balancing", th: "Amazon ELB", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AmazonECR", { title: "Amazon Elastic Container Registry", th: "Amazon ECR", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("ACM", { title: "#AWS Certificate Manager", groups: ["aws"]});
rawMap.set("AWSKMS", { title: "#AWS Key Management Service", th: "AWS KMS", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AWSSAM", { title: "#AWS Serverless Application Model", th: "AWS SAM", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AWSCLI", { title: "#AWS #CLI", th: "AWS CLI", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AWSCDK", { title: "#AWS Cloud Development Kit", th: "AWS CDK", groups: ["aws"], classes: [["skip", "nowrap"]]});
rawMap.set("AWSCDKCLI", { html: [{tag: "a", href: "#AWSCDK", text: "AWS CDK"}, { text: " "}, {tag: "a", href: "#CLI", text: "CLI" }], th: "AWS CDK CLI", groups: ["aws"], classes: [["skip", "nowrap"]]});

rawMap.set("ACID", {title: "Atomicity Consistency Isolation Durability", groups: ["ql"]});
rawMap.set("ACL", {title: "Access Control List", groups: []});
rawMap.set("AES", {title: "Advanced Encryption Standard", groups: [], notes: "#DES"});
rawMap.set("AJAX", {title: "Asynchronous JavaScript And XML", groups: ["javascript"]});
rawMap.set("AKA", {title: "Also Known As", groups: []});
rawMap.set("ANSI", {title: "American National Standards Institute", groups: []});
rawMap.set("AOP", {title: "Aspect Oriented Programming", groups: ["software"]});
rawMap.set("API", {title: "Application Programming Interface", groups: []});
rawMap.set("ARP", {title: "Address Resolution Protocol", groups: ["protocol"]});
rawMap.set("ASCII", {html: [{text: "American Standard Code"}, {tag: "small", text: " for "}, {text:"Information Interchange"}], groups: []});
rawMap.set("ASIC", {title: "Application-Specific Integrated Circuit", groups: ["electronics"]});
rawMap.set("ATG", {title: "Art Technology Group", groups: ["atg+"], notes: "Oracle Commerce"});
rawMap.set("AWT", {title: "Abstract Window Toolkit", groups: ["java"]});


rawMap.set("BaaS", { title: "Backend as a Service", groups: ["aaS"]});
rawMap.set("BCP", {title: "Business Continuity Plan", groups: []});
rawMap.set("BIOS", {title: "Basic Input/Output System", groups: ["OS", "computer"]});
rawMap.set("BLOB", {title: "Binary Large Object", groups: ["ql"]});
rawMap.set("BMP", {html: [{text: "BitMap Picture "}, {tag: "small", text:"(Microsoft)"}], groups: ["graphics"]});
rawMap.set("BOM", {title: "Bill Of Materials", groups: ["maven"]});
rawMap.set("BYOD", {title: "Bring Your Own Device", groups: []});

rawMap.set("CAD", { title: "Computer-Aided Design", groups: ["design"]});
rawMap.set("CAN", { title: "Controller Area Network", groups: ["vehicle"]});
rawMap.set("CJK", { title: "Chinese Japanese Korean", groups: []});
rawMap.set("CMT", { title: "Container Managed Transaction", groups: ["jta"]});
rawMap.set("CLI", { html: [{text: "Command-Line Interface"}, {tag: "hr", class: "margin-3", text: ""}, {text: "Command-Line Interpreter"}], notes: "#AWSCLI.AWS_CLI #AWSCDKCLI.AWS_CDK_CLI", groups: []});
rawMap.set("CNCF", { title: "Cloud Native Computing Foundation", groups: [], notes: "#K8s", svg: "cncf"});
rawMap.set("CAP", {title: "Consistency | Availability | Partition tolerance", groups: ["ql"]});
rawMap.set("CCPA", {title: "California Consumer Privacy Act", groups: ["GDPR"]});
rawMap.set("CDN", {title: "Content Delivery Network", groups: []});
rawMap.set("CE", {title: "conformité européenne", groups: [], notes: "European Conformity, Fraudulent misuse: \"China Export\""});
rawMap.set("CEO", {title: "Chief Executive Officer", groups: ["role"]});
rawMap.set("CGI", {title: "Computer-Generated Imagery", groups: []});
rawMap.set("CGI1",{title: "Common Gateway Interface", th: "CGI", classes: ["skip"], groups: []});
rawMap.set("CIDR", {title: "Classless Inter-Domain Routing", groups: [], notes: "#IP"});
rawMap.set("CMS1", {title: "Content Management System", groups: ["CMS"]});
rawMap.set("COO", {title: "Chief Operating Officer", groups: ["role"]});
rawMap.set("CORBA", {title: "Common Object Request Broker Architecture", groups: []});
rawMap.set("CORS", {title: "Cross Origin Resource Sharing", groups: []});
rawMap.set("CPU", {title: "Central Processing Unit", groups: ["processor", "computer"]});
rawMap.set("CQL", {title: "Cassandra Query Language", groups: ["ql"]});
rawMap.set("CRC", {title: "Cyclic Redundancy Check", groups: []});
rawMap.set("CRM", {title: "Customer Relationship Management", groups: []});
rawMap.set("CRT", {title: "Cathode Ray Tube", groups: []});
rawMap.set("CRUD", {title: "Create Read Update Delete", groups: ["ql"]});
rawMap.set("CSP", {title: "Cloud Service Provider", groups: ["cloud"], notes: "#IaaS, #PaaS, #SaaS"});
rawMap.set("CSRF", {title: "Cross-Site Request Forgery", groups: ["vulnerability"]});
rawMap.set("CSS", {title: "Cascading Style Sheet", groups: []});
rawMap.set("CTE", {title: "Common Table Expression", groups: ["ql"]});
rawMap.set("CTO", {title: "Chief Technical Officer", groups: ["role"]});
rawMap.set("CVC", {title: "Centralized Version Control", groups: ["version-control"]});

rawMap.set("DaaS", {title: "Desktop as a Service", groups: ["aaS"]});
rawMap.set("DRaaS", {title: "Disaster Recovery as a Service", groups: ["aaS"]});
rawMap.set("DTAP", { title: "Development, Testing, Acceptance and Production", groups: ["software"]});
rawMap.set("DPI",  { title: "Deep Packet Inspection", groups: ["security"]});
rawMap.set("DVD",  { title: "Digital Video Disk", groups: ["digital-video"]});
rawMap.set("DVR",  { title: "Digital Video Recorder", groups: ["digital-video"]});
rawMap.set("DSL2", { title: "Domain-Specific Language", th: "DSL", groups: ["computer-language"], classes: ["skip"]});
rawMap.set("DBMS", {title: "DataBase Management System", groups: ["ql"]});
rawMap.set("DCL", {title: "Data Control Language", groups: ["sql-subgroup"]});
rawMap.set("DDL", {title: "Data Definition Language", groups: []});
rawMap.set("DDPA", {title: "Dutch Data Protection Authority", groups: ["GDPR"]});
rawMap.set("DES", {title: "Data Encryption Standard", groups: [], notes: "Obsolete, see #AES"});
rawMap.set("DevOps", {title: "Development and Operations", groups: ["software"]});
rawMap.set("DHCP", {title: "Dynamic Host Configuration Protocol", groups: ["protocol"]});
rawMap.set("DIMM", {title: "Dual In-line Memory Module", groups: ["memory", "computer"]});
rawMap.set("DLC", {title: "DownLoadable content", groups: []});
rawMap.set("DLP", {title: "Data Loss Prevention", groups: ["security"]});
rawMap.set("DML", {title: "Data Manipulation Language", groups: ["sql-subgroup"]});
rawMap.set("DMS", {title: "Document Management System", groups: []});
rawMap.set("DNS", {title: "Domain Name System", groups: []});
rawMap.set("DOM", {title: "Document Object Model", groups: [], notes: "#XML, #W3C"});
rawMap.set("DP", {title: "Design Pattern", groups: ["software"]});
rawMap.set("DQL", {title: "Data/Database Query Language", groups: ["ql"]});
rawMap.set("DRY", {title: "Don't repeat yourself", groups: ["design"]});
rawMap.set("DSL", {title: "Digital Subscriber Line", groups: []});
rawMap.set("DTD", {title: "Document Type Definition", groups: ["ml"]});
rawMap.set("DVC", {title: "Distributed Version Control", groups: ["version-control"]});

rawMap.set("ECM", { title: "Enterprise Content Management", groups: ["CMS"]});
rawMap.set("ETF", { title: "Exchange-Traded Fund", groups: []});
rawMap.set("E2E", {title: "End to End", groups: []});
rawMap.set("EAP", {title: "Extensible Authentication Protocol", groups: ["protocol"]});
rawMap.set("ECMA", {title: "European Computer Manufacturers Association", groups: []});
rawMap.set("EDR", {title: "Endpoint Detection and Response", groups: ["security"]});
rawMap.set("EEPROM", {title: "Electrically Erasable Programmable Read-Only Memory", groups: ["memory", "computer"]});
rawMap.set("EPS", {title: "Encapsulated PostScript", groups: ["graphics"]});
rawMap.set("ESG", {title: "Environmental | Social | Governance", groups: []});
rawMap.set("et_al.", {title: "and others", th: "et al.", classes: ["skip"], groups: ["latin"]});
rawMap.set("ETA", {title: "Estimated Time of Arrival", groups: []});

rawMap.set("FaaS", {title: "Function as a Service", groups: ["aaS"]});
rawMap.set("FDD", {title: "Floppy Disk Drive", groups: ["persistence", "computer"]});
rawMap.set("FPGA", {title: "Field-Programmable Gate Array", groups: []});
rawMap.set("FTP", {title: "File Transfer Protocol", groups: ["protocol"]});

rawMap.set("GUID", { title: "Globally Unique IDentifier", groups: ["identifier"], notes: "The same as #UUID"});
 rawMap.set("UUID", { title: "Universally Unique IDentifier", groups: ["identifier"], notes: "The same as #GUID"});
rawMap.set("GA", {title: "General Availability", groups: ["software"]});
rawMap.set("GDPR1", {title: "General Data Protection Regulation", th:"GDPR", classes: ["skip"], groups: ["GDPR"]});
rawMap.set("GIF", {title: "Graphics Interchange Format", groups: ["graphics"]});
rawMap.set("Git", {title: "\"Git\" Linus Torvalds' #DVC", groups: ["version-control"]});
rawMap.set("GML", {title: "Generalized Markup Language", groups: ["ml"], notes: "Extended to #SGML"});
rawMap.set("GPL", {title: "General-Purpose Language", groups: ["computer-language"]});
rawMap.set("GPS", {title: "Global Positioning System", groups: []});
rawMap.set("GPU", {title: "Graphics Processing Unit", groups: ["processor", "computer"]});
rawMap.set("GQL", {title: "Graph Query Language", groups: ["ql"]});
rawMap.set("GRASP", {title: "General Responsibility Assignment Software Patterns", groups: ["software"], notes: "Controller, creator, indirection, information expert, low coupling, high cohesion, polymorphism, protected variations, pure fabrication"});
rawMap.set("GSM", {html: [{tag:"b", text:"G"}, {text:"lobal "}, {tag:"b", text:"S"}, {text:"ystem for "}, {tag:"b", text:"M"}, {text:"obile Communications"}], groups: ["telecom"]});
rawMap.set("GUI", {title: "Graphic User Interface", groups: [], notes: "#UI"});

rawMap.set("HATEOAS", {title: "Hypermedia as the Engine of Application State", groups: ["restful"]});
rawMap.set("HCMS", {title: "Headless Content Management System", groups: ["CMS"]});
rawMap.set("HDD", {title: "Hard Disk Drive", groups: ["persistence", "computer"]});
rawMap.set("HIPAA", {title: "Health Insurance Portability and Accountability Act", groups: ["GDPR"]});
rawMap.set("HTML", {title: "Hypertext Markup Language", groups: ["ml"]});
rawMap.set("HTTP", {title: "Hypertext Transfer Protocol", groups: ["protocol"], notes: "Stateless", svg: "http"});
rawMap.set("HTTPS", {title: "Hypertext Transfer Protocol Secure", groups: ["protocol"], notes: "Stateless"});
rawMap.set("HVAC", {title: "Heating Ventilation and Air Conditioning", groups: []});

rawMap.set("IDE2", { title: "Integrated Drive Electronics", th: "IDE", groups: ["computer", "pc-interface"], notes: "The same as #PATA", classes: ["skip"]});
 rawMap.set("PATA", { title: "Parallel Advanced Technology Attachment", groups: ["computer", "pc-interface"], notes: "The same as #IDE2"});
rawMap.set("I/O", {title: "Input/Output", groups: []});
rawMap.set("IaaS", {title: "Infrastructure as a Service", groups: ["aaS"]});
rawMap.set("IaC", {title: "Infrastructure as Code", groups: ["cloud"]});
rawMap.set("IAM", {title: "Identity and Access Management", groups: ["security", "aws"]});
rawMap.set("IBAN", {title: "International Bank Account Number", groups: ["banking"]});
rawMap.set("ICMP", {title: "Internet Control Message Protocol", groups: ["protocol"], notes: "#PING"});
rawMap.set("ICS", {title: "Internet Connection Sharing", groups: [], notes: "Ms Windows"});
rawMap.set("IDE", {title: "Integrated Development Environment", groups: ["software"]});
rawMap.set("IEEE", {html: [{text:"Institute "}, {tag: "small", text:"of"}, {text: " Electrical "}, {tag: "small", text:"and"}, {text:" Electronics Engineers"}], groups: []});
rawMap.set("IETF", {title: "Internet Engineering Task Force", groups: ["internet"]});
rawMap.set("iff", {title: "If and only if", groups: [], notes: "↔ ⇔ ≡"});
rawMap.set("IGMP", {title: "Internet Group Management Protocol", groups: ["protocol"]});
rawMap.set("IIFE", {title: "Immediately Invoked Function Expression", groups: ["javascript"]});
rawMap.set("IMAP", {title: "Internet Message Access Protocol", groups: ["protocol"]});
rawMap.set("IMCI", {title: "International Mobile Subscriber Identity", groups: ["telecom"]});
rawMap.set("IMEI", {title: "International Mobile Equipment Identity", groups: ["telecom"]});
rawMap.set("IoT", {title: "Internet of Things", groups: ["internet"]});
rawMap.set("IP", {title: "Internet Protocol", groups: ["protocol"], notes: "#CIDR"});
rawMap.set("IRC", {title: "Internet Relay Chat", groups: []});
rawMap.set("IRQ", {title: "Interrupt ReQuest", groups: []});
rawMap.set("ISBN", {title: "International Standard Book Number", groups: []});
rawMap.set("ISDN", {title: "Integrated Services Digital Network", groups: ["network"]});
rawMap.set("ISO", {title: "International Organization for Standardization", groups: [], svg: "iso"});
rawMap.set("ISP", {title: "Internet Service Provider", groups: []});

rawMap.set("JAX-WS", { title: "Java #API for #XML Web Services", groups: ["java"], classes: ["nowrap"]});
rawMap.set("JIT", { title: "Just-In-Time", groups: ["java", "computing"]});
 rawMap.set("AOT", { title: "Ahead-Of-Time", groups: ["java", "computing"]});

rawMap.set("LED", { title: "Light Emitting Diode", groups: []});
rawMap.set("LIFO", { title: "Last In First Out", groups: ["cache"], notes: "LIFO is a Stack"});
rawMap.set("FIFO", { title: "First In First Out", groups: ["cache"]});

rawMap.set("MD", { title: "Markdown Documentation", groups: []});
rawMap.set("MCQ", { title: "Multiple Choice Question", groups: []});
rawMap.set("MCP", { title: "Model Context Protocol", groups: ["ai", "protocol"]});

rawMap.set("OSGi", { title: "Open Services Gateway initiative", groups: ["java"]});

rawMap.set("PLC", { title: "Programmable Logic Controller", groups: ["controller"]});
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
