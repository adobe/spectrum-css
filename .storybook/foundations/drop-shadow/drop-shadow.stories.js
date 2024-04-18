import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import "./index.css";

export default {
  title: "Foundations/Drop shadow",
  description: "Drop shadows draw attention and give the appearance of depth. By default, this style is used to show elevation, when content appears on top of other content.",
  component: "Drop shadow",
  tags: ['foundation'],
}

const DropShadowSwatch = ({rootClass = "spectrum-Foundations-Example-DropShadow-swatch", variant, ...args}) => {
  const { isDropShadow } = args;
  return html`
  <div class=${classMap({
    [rootClass]: true,
    [`${rootClass}--${variant}-drop-shadow`]: typeof variant !== undefined && !!isDropShadow,
    [`${rootClass}--${variant}-box-shadow`]: typeof variant !== undefined && !isDropShadow,
  })}></div>
`;}

const DropShadowBackground = ({rootClass = "spectrum-Foundations-Example-swatch-container", color, ...args}) => html`
    <div class=${classMap({
      [rootClass]: true,
      "spectrum--light": color === "light",
      "spectrum--dark": color === "dark",
    })}>
      ${DropShadowSwatch(args)}
    </div>
  `;

const DropShadowVariant = ({...args}) => html`
  <div class="spectrum-Foundations-Example-variant-container">
    ${DropShadowBackground({...args, color: "light"})}
    ${DropShadowBackground({...args, color: "dark"})}
  </div>
`;


export const DropShadowEmphasizedDefault = DropShadowVariant.bind({});
DropShadowEmphasizedDefault.args = {
  variant: "emphasized-default",
  isDropShadow: true,
};

export const DropShadowEmphasizedHover = DropShadowVariant.bind({});
DropShadowEmphasizedHover.args = {
  variant: "emphasized-hover",
  isDropShadow: true,
};

export const DropShadowElevated = DropShadowVariant.bind({});
DropShadowElevated.args = {
  variant: "elevated",
  isDropShadow: true,
};

export const BoxShadowEmphasizedDefault = DropShadowVariant.bind({});
BoxShadowEmphasizedDefault.args = {
  variant: "emphasized-default",
  isDropShadow: false,
};

export const BoxShadowEmphasizedHover = DropShadowVariant.bind({});
BoxShadowEmphasizedHover.args = {
  variant: "emphasized-hover",
  isDropShadow: false,
};

export const BoxShadowElevated = DropShadowVariant.bind({});
BoxShadowElevated.args = {
  variant: "elevated",
  isDropShadow: false,
};
