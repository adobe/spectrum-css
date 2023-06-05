const test = require("ava");
const stylelint = require("stylelint");
const rule = require("./index");

const { ruleName, messages } = rule;

async function runRule(code) {
	const result = await stylelint.lint({
		code,
		config: {
			plugins: [rule],
			rules: {
				[ruleName]: true,
			},
		},
	});

	return result;
}

test(`should pass valid class names`, async (t) => {
	const validCode = `
  .spectrum {}
  .spectrum-Component {}
  .spectrum-Component-newName {}
  .spectrum-Component--sizeXS {}
  .spectrum-ComponentName--descendant1 {}
  .spectrum-ComponentX-descendant2 {}
  .spectrum--lightest {}
  .spectrum-ToolTip--size100 {}
  .spectrum-Switch-input {}
  .spectrum-UIIcon-ChevronDown75 {}
  .spectrum--express {}
  .spectrum-Tooltip--top-left {}
  `;

	const result = await runRule(validCode);
	t.is(result.results[0].warnings.length, 0);
});

test(`should fail invalid class names`, async (t) => {
	const invalidCode = `
      .spectrum-UIIcon-United {}
      .spectrum-underlay-Under-lay {}
      .spectrum-underlay-under-lay {}
      .spectrum-detail--serif {}
      .spectrum-Heading--Heavy {}
      .spectrum-underlay-underlay {}
      .spectrum-Underlay--Underlay {}
      .spectrum-Underlay-Abc {}
      .spectrum-Underlay--Abc {}
      .spectrum-underlay--abc {}
      .spectrum-anderlay--Abc {}
      .spectrum-anderlay--abc {}
      .spectrum-Underlay--Abc {}
      .spectrum-code {}
      .spectrum-code--Abc {}
  `;

	const result = await runRule(invalidCode);

	t.is(result.results[0].warnings.length, 15);
});
