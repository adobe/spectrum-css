import { styled } from '@storybook/theming';
import React from 'react';
import { useCssPropsContext } from './CssPropsContext';

const Checkbox = styled.input(({ disabled }) => ({
  cursor: disabled ? 'not-allowed' : 'pointer',
}));

/**
 * @typedef {Object} ElementToHighlight
 * @property {Array} target - The target elements to highlight.
 */

/**
 * @param {ElementToHighlight[]} elementsToHighlight - The elements to highlight.
 * @param {Array} highlighted - The currently highlighted elements.
 * @returns {'UNCHECKED' | 'CHECKED' | 'INDETERMINATE'} - The state of the checkbox.
 */
function areAllRequiredElementsHighlighted(elementsToHighlight, highlighted) {
  const highlightedCount = elementsToHighlight.filter((item) =>
    highlighted.includes(item.target[0])
  ).length;

  return highlightedCount === 0
    ? 'UNCHECKED'
    : highlightedCount === elementsToHighlight.length
      ? 'CHECKED'
      : 'INDETERMINATE';
}

/**
 * @typedef {Object} HighlightToggleProps
 * @property {string} toggleId - The ID for the toggle.
 * @property {ElementToHighlight[]} [elementsToHighlight=[]] - The elements to highlight.
 */

/**
 * @param {HighlightToggleProps} props - The props for the HighlightToggle component.
 * @returns {JSX.Element} - The HighlightToggle component.
 */
const HighlightToggle = ({ toggleId, elementsToHighlight = [] }) => {
  const { toggleHighlight, highlighted } = useCssPropsContext();
  const checkBoxRef = React.useRef(null);
  const [checkBoxState, setChecked] = React.useState(
    areAllRequiredElementsHighlighted(elementsToHighlight, highlighted)
  );

  React.useEffect(() => {
    const newState = areAllRequiredElementsHighlighted(elementsToHighlight, highlighted);
    if (checkBoxRef.current) {
      checkBoxRef.current.indeterminate = newState === 'INDETERMINATE';
    }
    setChecked(newState);
  }, [elementsToHighlight, highlighted]);

  const handleToggle = React.useCallback(() => {
    toggleHighlight(
      elementsToHighlight.map((e) => e.target[0]),
      checkBoxState !== 'CHECKED'
    );
  }, [elementsToHighlight, checkBoxState, toggleHighlight]);

  return (
    <Checkbox
      ref={checkBoxRef}
      id={toggleId}
      type="checkbox"
      aria-label="Highlight result"
      disabled={!elementsToHighlight.length}
      onChange={handleToggle}
      checked={checkBoxState === 'CHECKED'}
    />
  );
};

export default HighlightToggle;
