# Coupon components
All components for the coupon apps.
You can view [all Components](https://silverhill.github.io/coupon-components)

We are using [postcss-modules-values](https://www.npmjs.com/package/postcss-modules-values) and [PostCss Next](http://cssnext.io/)

Storybook Docs: [Storybook](https://storybook.js.org/) and [knobs](https://github.com/storybooks/storybook/tree/master/addons/knobs)

## Install and Use
  * `yarn add -S coupon-components`
  * Import styles in the root App
    `import 'coupon-components/build/css/styles.css'`
  * ``` import { Button } from 'coupon-components' ```

## Dev Environment
* install with `yarn`
* run dev environment `yarn storybook`

## Build and Publish package
* `yarn build` to transpile and compile for publish package
* change the version of new package
* `npm publish`

## Build Documentation
* `yarn build-docs` for compile and publish stoybook in github project

## How to Publish
* `npm run build` && `npm run build-docs`
* `npm version patch` if is a fix | `npm version minor` if is a new component | `npm version major` if is a new release with diferent issues
* `npm publish`