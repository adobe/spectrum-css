const test = require("ava");
const stylelint = require("stylelint");
const plugin = require("./index");

test("should throw an error for missing or extra parentheses in calc values", async (t) => {
	const code = `
    .spectrum {
      width: calc(100px - 10px;
    }
  `;

	const { results } = await stylelint.lint({
		code,
		config: {
			plugins: [plugin],
			rules: {
				"custom-rule/no-missing-parenthesis": true,
			},
		},
	});

	const warnings = results[0].warnings;

	t.is(warnings.length, 1);
	t.is(warnings[0].rule, "CssSyntaxError");
	t.is(warnings[0].text, "Unclosed bracket (CssSyntaxError)");
});
