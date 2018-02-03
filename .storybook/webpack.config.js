// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');
const autoprefixer = require('autoprefixer');
const values = require('postcss-modules-values');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx', '.scss', '.sass'],
    alias: {
      Actions: path.resolve(__dirname, '../src/actions'),
      Atoms: path.resolve(__dirname, '../src/components/atoms'),
      Molecules: path.resolve(__dirname, '../src/components/molecules'),
      Organisms: path.resolve(__dirname, '../src/components/organisms'),
      Styles: path.resolve(__dirname, '../src/styles'),
    }
  },
  module: {
    rules: [
      // add your custom rules.
      {
        test: /\.json$/,
        loaders: ['json-loader'],
      },
      {
        test: /\.(css|sass|scss)$/,
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
            loader: require.resolve('sass-loader')
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                values(),
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ],
      },
    ],
  },
};
