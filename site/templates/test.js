util.populateDNAInfo(component, dnaVars)

// Arrange examples for processing
var examples
if (!component.examples) {
  // Only one top-level example
  examples = [component]
} else {
  // Multiple child examples
  examples = component.examples
}

if (!Array.isArray(examples)) {
  examples = Object.values(examples)
}

examples.forEach((example) => {
  if (
    example.dnaStatus === "Deprecated" ||
    example.cssStatus === "Deprecated"
  ) {
    example.status = "Deprecated"
  } else if (
    example.cssStatus === "Verified" ||
    example.dnaStatus === "Canon"
  ) {
    example.status = "Verified"
  } else {
    example.status = "Contribution"
  }
})

let dnaStatusTranslation = {
  Canon: "Verified",
  Precursor: "Contribution",
}

let exampleOrder = {
  Verified: 1,
  Contribution: 2,
  Deprecated: 3,
}
console.log("examples" + examples)

let status = dnaStatusTranslation[component.dnaStatus] || component.dnaStatus
