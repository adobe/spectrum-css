/*!
 * Copyright 2024 Adobe. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at <http://www.apache.org/licenses/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

// Use the document.fonts API to check if fonts have loaded
export const FontLoader = async () => ({
	fonts: document.fonts ? await document.fonts.ready : true,
});

export { IconLoader } from "./icon-loader.js";

export const TokenLoader = async () => ({
	tokens: {
		global: {
			medium: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/medium-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			large: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/large-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			base: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/global-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			light: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/light-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			dark: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/dark-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			darkest: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/darkest-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
		},
		spectrum: {
			medium: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/spectrum/medium-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			large: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/spectrum/large-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			base: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/spectrum/global-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			light: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/spectrum/light-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			dark: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/spectrum/dark-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			darkest: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/spectrum/darkest-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
		},
		express: {
			medium: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/express/medium-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			large: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/express/large-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			base: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/express/global-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			light: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/express/light-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			dark: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/express/dark-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			darkest: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/express/darkest-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
		},
	}
});
