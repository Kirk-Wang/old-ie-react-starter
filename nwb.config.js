const path = require('path');
const ES3ifyPlugin = require('es3ify-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
const autoprefixer = require('autoprefixer');
const assets = require('postcss-assets');
const oldie = require('oldie');
const prod = process.env.NODE_ENV === 'production';
const umd = process.argv.indexOf('--umd') != -1;
const pkg = require('./package.json');
const pkgName = pkg.name;

const postcssPlugins = [
  oldie({
    opacity: {
      method: 'copy',
      prefixed: false,
      filter: true,
    },
  }),
  autoprefixer({
    browsers: [
      '>1%',
      'last 4 versions',
      'Firefox ESR',
      'not ie < 8',
    ],
  }),
];

module.exports = {
  type: 'web-app',
  npm: {
    umd: 'Old_IE_React_Starter',
  },
  // polyfill: false,
  devServer: {
    disableHostCheck: true,
    contentBase: path.join(__dirname, "public"),
  },
  webpack: {
    publicPath: (prod || umd) ? `./` : '/',
    // uglify: false,
    rules: {
      'sass-css': {
        options: {
          modules: true,
          localIdentName: '[name]__[local]__[hash:base64:8]',
        },
      },
      'sass-postcss': {
        plugins: postcssPlugins,
      },
      sass: {
        options: {
          data: `
          @import "${path.resolve('src')}/theme/_variables";
          @import "${path.resolve('src')}/theme/sprite";
          `,
          includePaths: [path.resolve('src'), path.resolve('public')],
        },
      },
      graphics: {
        name: '[name].[ext]',
      },
    },
    html: {
      template: 'demo/index.html'
    },
    extra: {
      devtool: prod ? false : 'cheap-module-source-map',
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          },
        ]
      },
      externals: {
        jquery: 'jQuery',
        react: 'React',
        'react-dom': 'ReactDOM',
      },
      plugins: [
        new SpritesmithPlugin({
          src: {
            cwd: path.resolve(__dirname, 'src/spriteImages'),
            glob: '*.png',
          },
          target: {
            image: path.resolve(__dirname, 'src/assets/images/sprite.png'),
            css: path.resolve(__dirname, 'src/theme/sprite.scss'),
          },
          apiOptions: {
            cssImageRef: '../../assets/images/sprite.png',
          },
          spritesmithOptions: {
            padding: 10,
          },
        }),
        new ES3ifyPlugin(),
      ],
      resolve: {
        extensions: [
          '.js', '.jsx', '.json', '.web.js', '.web.jsx',
          '.ts', '.tsx', '.json', '.web.ts', '.web.tsx'
        ],
        mainFields: (prod || umd) ? ["main", "browser", "module"] : ["browser", "module", "main"]
      },
    },
  },
}