const test = require("ava");
const stylelint = require("stylelint");
const plugin = require("./index");

const ruleName = "custom-rule/no-missing-var";

test(`should throw an error for missing "var" before custom properties`, async (t) => {
	const code = `
    .spectrum-Button {
        background-color: (--spectrum-well-background-color);
        border-color: var(--spectrum-well-border-color);
      }
    `;

	const { results } = await stylelint.lint({
		code,
		config: {
			plugins: [plugin],
			rules: {
				[ruleName]: true,
			},
		},
	});

	const warnings = results[0].warnings;

	t.is(warnings.length, 1);
	t.is(warnings[0].rule, ruleName);
	t.is(
		warnings[0].text,
		`Missing 'var' before custom property "--spectrum-well-background-color"`
	);
});

test(`should not throw an error for "var" usage`, async (t) => {
	const code = `
    .spectrum-Button {
        background-color: var(--spectrum-well-background-color);
        border-color: var(--spectrum-well-border-color);
      }
    `;

	const { results } = await stylelint.lint({
		code,
		config: {
			plugins: [plugin],
			rules: {
				[ruleName]: true,
			},
		},
	});

	const warnings = results[0].warnings;

	t.is(warnings.length, 0);
});
