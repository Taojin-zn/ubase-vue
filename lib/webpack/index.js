'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpackLoaders = require('./webpack.loaders.js');

var _webpackLoaders2 = _interopRequireDefault(_webpackLoaders);

var _webpackPlugins = require('./webpack.plugins.js');

var _webpackPlugins2 = _interopRequireDefault(_webpackPlugins);

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _jsBeautify = require('js-beautify');

var _jsBeautify2 = _interopRequireDefault(_jsBeautify);

var _vueEntry = require('vue-entry');

var _vueEntry2 = _interopRequireDefault(_vueEntry);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('vue-entry/dist/bootstrap/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vueEntryConfig = _config2.default.vueEntryConfig;

var singleAppMode = (0, _utils.isSingleAppMode)(vueEntryConfig);

var webpackConfig = {
  context: _path2.default.resolve(_config2.default.src),
  entry: (0, _vueEntry2.default)(vueEntryConfig),
  resolve: {
    root: [_path2.default.resolve(_config2.default.src), _path2.default.resolve('./node_modules/')],
    alias: Object.assign({}, _config2.default.alias),
    extensions: ['', '.js', '.vue']
  },

  output: {
    publicPath: singleAppMode ? './' : '../',
    filename: _config2.default.isDeveloper ? '[name].js' : '[name]-[chunkhash].js',
    chunkFilename: 'statics/chunk/[name]-[id].js'
  },

  watch: _config2.default.isDeveloper,

  module: {
    loaders: _webpackLoaders2.default
  },

  plugins: _webpackPlugins2.default,

  devtool: _config2.default.isDebug ? '#inline-source-map' : false
};

exports.default = webpackConfig;