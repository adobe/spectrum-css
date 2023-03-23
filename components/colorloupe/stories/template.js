import { svg } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';

import '../index.css';

export const Template = ({
  rootClass = "spectrum-ColorLoupe",
  isOpen,
  styles = {
    '--spectrum-picked-color': 'RGBA(255, 0, 0, 0.5)',
    position: 'absolute',
    'inset-block-start': '25%',
    'inset-inline-start': '50%',
    overflow: "visible"
  },
  customClasses = [],
  ...globals
}) => {
  const { express } = globals;

  return svg`
    <svg class=${classMap({
    [rootClass]: true,
    'is-open': isOpen,
    ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
  })}
  style=${styleMap(styles)}>
    <defs>
      <path id="spectrum-inner-loupe" d="M23 61.575C19.0044 57.435 15.2591 53.0606 11.784 48.475C8.68949 44.4532 5.96348 40.1608 3.639 35.65C1.224 30.8 0 26.549 0 23C0.00319993 17.6937 1.84059 12.5516 5.20091 8.44488C8.56122 4.33815 13.2378 1.51928 18.4385 0.465803C23.6392 -0.587678 29.0442 0.189006 33.7378 2.66428C38.4314 5.13955 42.125 9.16122 44.193 14.048C45.3915 16.88 46.0061 19.9248 46 23C46 26.551 44.774 30.811 42.355 35.661C40.0274 40.1747 37.298 44.4698 34.2 48.494C30.7297 53.0728 26.9898 57.4409 23 61.575ZZ" transform="translate(2, 2)" />
      <mask id="spectrum-mask-loupe">
        <rect x="0" y="0" height="100" width="100" fill="white"/>
        <use xlink:href="#spectrum-inner-loupe" fill="black" />
      </mask>

      <path id="express-inner-loupe-m" d="M3.10091 24.4551C1.08495 21.8029 -0.00540694 18.5477 2.01617e-05 15.2C2.01617e-05 11.1687 1.58059 7.30182 4.39363 4.45127C7.20669 1.60071 11.0218 0 15 0C18.9783 0 22.7933 1.60071 25.6064 4.45127C28.4195 7.30182 30 11.1687 30 15.2C30.0052 18.4713 28.9637 21.656 27.0319 24.277C27.0234 24.2922 27.0147 24.3044 27.0053 24.3196C24.5894 28.151 15.0339 38 15.0339 38C15.0339 38 5.59935 28.01 3.10091 24.4551Z" transform="translate(2, 2)" />
      <mask id="express-mask-loupe-m">
        <rect x="0" y="0" height="100" width="100" fill="black"/>
        <use xlink:href="#express-inner-loupe-m" fill="white" />
      </mask>

      <path id="express-inner-loupe-l" d="M3.92805 30.2868C1.37449 27.0014 -0.0068363 22.9701 2.54412e-05 18.8235C2.54412e-05 13.8312 2.00138 9.04296 5.56458 5.51287C9.12777 1.98277 13.9609 0 19 0C24.0392 0 28.8723 1.98277 32.4355 5.51287C35.9986 9.04296 38 13.8312 38 18.8235C38.0062 22.8751 36.6868 26.8199 34.2399 30.0662C34.2295 30.085 34.2189 30.1007 34.2066 30.1195C31.1457 34.864 19.0418 47.0607 19.0418 47.0607C19.0418 47.0607 7.0925 34.6887 3.92805 30.2868Z" transform="translate(2, 2)" />
      <mask id="express-mask-loupe-l">
        <rect x="0" y="0" height="100" width="100" fill="black"/>
        <use xlink:href="#express-inner-loupe-l" fill="white" />
      </mask>

      <g id="loupe-checkerboard">
        <g transform="translate(338 285)">
          <g transform="translate(-338 -285)">
            <rect width="8" height="8" transform="translate(338 285)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
            <rect width="8" height="8" transform="translate(338 293)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 285)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 293)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
          </g>
          <g transform="translate(-322 -285)">
            <rect width="8" height="8" transform="translate(338 285)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
            <rect width="8" height="8" transform="translate(338 293)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 285)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 293)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
          </g>
          <g transform="translate(-306 -285)">
            <rect width="8" height="8" transform="translate(338 285)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
            <rect width="8" height="8" transform="translate(338 293)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 285)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 293)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
          </g>
          <g transform="translate(-290 -285)">
            <rect width="8" height="8" transform="translate(338 285)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
            <rect width="8" height="8" transform="translate(338 293)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 285)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 293)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
          </g>
          <g transform="translate(-338 -269)">
            <rect width="8" height="8" transform="translate(338 285)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
            <rect width="8" height="8" transform="translate(338 293)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 285)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 293)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
          </g>
          <g transform="translate(-322 -269)">
            <rect width="8" height="8" transform="translate(338 285)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
            <rect width="8" height="8" transform="translate(338 293)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 285)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 293)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
          </g>
          <g transform="translate(-306 -269)">
            <rect width="8" height="8" transform="translate(338 285)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
            <rect width="8" height="8" transform="translate(338 293)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 285)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 293)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
          </g>
          <g transform="translate(-290 -269)">
            <rect width="8" height="8" transform="translate(338 285)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
            <rect width="8" height="8" transform="translate(338 293)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 285)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 293)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
          </g>
          <g transform="translate(-338 -253)">
            <rect width="8" height="8" transform="translate(338 285)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
            <rect width="8" height="8" transform="translate(338 293)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 285)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 293)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
          </g>
          <g transform="translate(-322 -253)">
            <rect width="8" height="8" transform="translate(338 285)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
            <rect width="8" height="8" transform="translate(338 293)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 285)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 293)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
          </g>
          <g transform="translate(-306 -253)">
            <rect width="8" height="8" transform="translate(338 285)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
            <rect width="8" height="8" transform="translate(338 293)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 285)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 293)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
          </g>
          <g transform="translate(-290 -253)">
            <rect width="8" height="8" transform="translate(338 285)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
            <rect width="8" height="8" transform="translate(338 293)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 285)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 293)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
          </g>
          <g transform="translate(-338 -237)">
            <rect width="8" height="8" transform="translate(338 285)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
            <rect width="8" height="8" transform="translate(338 293)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 285)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 293)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
          </g>
          <g transform="translate(-322 -237)">
            <rect width="8" height="8" transform="translate(338 285)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
            <rect width="8" height="8" transform="translate(338 293)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 285)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 293)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
          </g>
          <g transform="translate(-306 -237)">
            <rect width="8" height="8" transform="translate(338 285)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
            <rect width="8" height="8" transform="translate(338 293)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 285)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 293)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
          </g>
          <g transform="translate(-290 -237)">
            <rect width="8" height="8" transform="translate(338 285)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
            <rect width="8" height="8" transform="translate(338 293)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 285)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 293)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
          </g>
          <g transform="translate(-338 -221)">
            <rect width="8" height="8" transform="translate(338 285)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
            <rect width="8" height="8" transform="translate(338 293)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 285)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 293)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
          </g>
          <g transform="translate(-322 -221)">
            <rect width="8" height="8" transform="translate(338 285)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
            <rect width="8" height="8" transform="translate(338 293)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 285)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 293)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
          </g>
          <g transform="translate(-306 -221)">
            <rect width="8" height="8" transform="translate(338 285)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
            <rect width="8" height="8" transform="translate(338 293)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 285)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 293)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
          </g>
          <g transform="translate(-290 -221)">
            <rect width="8" height="8" transform="translate(338 285)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
            <rect width="8" height="8" transform="translate(338 293)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 285)" fill="var(--spectrum-colorcontrol-checkerboard-light-color)" />
            <rect width="8" height="8" transform="translate(346 293)" fill="var(--spectrum-colorcontrol-checkerboard-dark-color)" />
          </g>
        </g>
      </g>

      <clipPath id="spectrum-loupe-clip">
        <use xlink:href="#spectrum-inner-loupe" />
      </clipPath>
      <clipPath id="express-loupe-clip-m">
        <use xlink:href="#express-inner-loupe-m" />
      </clipPath>
      <clipPath id="express-loupe-clip-l">
        <use xlink:href="#express-inner-loupe-l" />
      </clipPath>

    </defs>

    <g class="${rootClass}-spectrum">
      <g clip-path="url(#spectrum-loupe-clip)">
        <g transform="translate(-353.999 -289)">
          <use xlink:href="#loupe-checkerboard" />
        </g>
      </g>
      <g>
        <use xlink:href="#spectrum-inner-loupe" class="${rootClass}-inner-border" />
        <use xlink:href="#spectrum-inner-loupe" mask="url(#spectrum-mask-loupe)" class="${rootClass}-outer-border" />
      </g>
    </g>

    <g class="${rootClass}-express" >
      <g class="spectrum-colorloupe-express-loupe">
        <g transform="translate(-353.999 -289)">
          <use xlink:href="#loupe-checkerboard" />
        </g>
      </g>

      <g class="spectrum-colorloupe-express-m-borders">
        <use xlink:href="#express-inner-loupe-m" class="${rootClass}-outer-border" />
        <use xlink:href="#express-inner-loupe-m"   mask="url(#express-mask-loupe-m)" class="${rootClass}-inner-border" />
      </g>

      <g class="spectrum-colorloupe-express-l-borders">
        <use xlink:href="#express-inner-loupe-l" class="${rootClass}-outer-border" />
        <use xlink:href="#express-inner-loupe-l"   mask="url(#express-mask-loupe-l)" class="${rootClass}-inner-border" />
      </g>

    </g>
  </svg>
  `;
}
