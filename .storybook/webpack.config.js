// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');
const paths = require('../config/paths');
const fs = require('fs');
const webpack = require('webpack');

const CSSNext = require('postcss-cssnext')
// const rucksack = require('rucksack-css')
const values = require('postcss-modules-values')
const importPostcss = require('postcss-import')
const eslintFormatter = require('react-dev-utils/eslintFormatter');

module.exports = {
  plugins: [
  ],
  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx', '.css'],
    alias: {
      Actions: path.resolve(__dirname, '../src/actions'),
      Atoms: path.resolve(__dirname, '../src/components/atoms'),
      Molecules: path.resolve(__dirname, '../src/components/molecules'),
      Organisms: path.resolve(__dirname, '../src/components/organisms'),
      Styles: path.resolve(__dirname, '../src/styles'),
    }
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        include: paths.appSrc,
        use: [
          {
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve('eslint'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
      },
      // add your custom rules.
      {
        test: /\.json$/,
        loaders: ['json-loader'],
      },
      {
        test: /\.woff$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 50000,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:4]"
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: (loader) => [
                values(),
                CSSNext(),
                importPostcss(),
                // require('postcss-flexbugs-fixes')
              ],
            },
          },
        ],
      },
      // {
      //   // Exclude `js` files to keep "css" loader working as it injects
      //   // its runtime that would otherwise processed through "file" loader.
      //   // Also exclude `html` and `json` extensions so they get processed
      //   // by webpacks internal loaders.
      //   exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
      //   loader: require.resolve('file-loader'),
      //   options: {
      //     name: 'static/media/[name].[hash:8].[ext]',
      //   },
      // },
    ],
  },
};
