import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { BaseHrefWebpackPlugin } from 'base-href-webpack-plugin';
import dotenv from 'dotenv';
import DotenvWebPack from 'dotenv-webpack';

dotenv.config();

export default {
  entry: {
    main: './src/entrypoint/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  // optimization: {
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     hidePathInfo: true,
  //     chunks: 'all',
  //     maxInitialRequests: Infinity,
  //     maxAsyncRequests: Infinity,
  //     minSize: 0,
  //     automaticNameDelimiter: '.',
  //     cacheGroups: {
  //       default: false,
  //       mainVendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'main.vendors',
  //         filename: '[name].bundle.js',
  //         chunks: ({ name }) => name === 'main'
  //       }
  //     }
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(__dirname, '../.babelrc')
            }
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader'
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
              publicPath: 'images'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new DotenvWebPack({
      path: '../.env', // load this now instead of the ones in '.env'
      //safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false // load '.env.defaults' as the default values if empty.
    }),
    new CleanWebpackPlugin(),
    // new (class ChunksFromEntryPlugin {
    //   apply(compiler) {
    //     compiler.hooks.emit.tap('ChunksFromEntryPlugin', compilation => {
    //       compilation.hooks.htmlWebpackPluginAlterChunks.tap(
    //         'ChunksFromEntryPlugin',
    //         (_, { plugin }) =>
    //           compilation.entrypoints
    //             .get(plugin.options.entry)
    //             .chunks.map(chunk => ({
    //               names: chunk.name ? [chunk.name] : [],
    //               files: chunk.files.slice(),
    //               size: chunk.modulesSize(),
    //               hash: chunk.hash
    //             }))
    //       );
    //     });
    //   }
    // })(),
    new HtmlWebpackPlugin({
      entry: 'main',
      template: './src/entrypoint/index.html',
      filename: 'index.html'
      //favicon: './src/images/favicon.ico'
    }),
    new CopyWebpackPlugin(
      [{ from: './src/entrypoint/callback.html', to: './' }],
      {
        copyUnmodified: true
      }
    ),
    new HtmlWebpackPlugin({
      template: './src/entrypoint/silent-renew.html',
      filename: 'silent-renew.html',
      chunks: ['silentRenew'],
    }),
    // new CopyWebpackPlugin(
    //   [{ from: './src/entrypoint/silent-check-sso.html', to: './' }],
    //   {
    //     copyUnmodified: true
    //   }
    // ),    
    // new CopyWebpackPlugin(
    //   [{ from: './node_modules/oidc-client/dist/oidc-client.min.js', to: './' }],
    //   {
    //     copyUnmodified: true
    //   }
    // ),
    new BaseHrefWebpackPlugin({
      baseHref: '/'
    })
  ]
};
