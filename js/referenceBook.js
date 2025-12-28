const referenceBookMap = new Map();


referenceBookMap.set("deterministic", { title: "The same results for the same input data", th: "Deterministic", groups: ["determinism"]});
referenceBookMap.set("non-deterministic", { title: "Different results for the same input data", th: "Non-Deterministic", groups: ["determinism"]});

referenceBookMap.set("declarative", { html: [{text:"What to do. Expressions. "},
											 {tag: "code", class: "code", text: "input -> {result}"},
											 {text: " | "},
											 {tag: "span", class: "nowrap", text: "Logic (facts and clauses). Functional. Database processing"}
											 ], th: "Declarative", groups: ["paradigm"]});
