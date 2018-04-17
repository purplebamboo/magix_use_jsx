var path = require("path")
var webpack = require('webpack')
var fs = require('fs')

module.exports = function (options) {

  let srcDir = path.resolve(__dirname, 'src')
	return {
    context: __dirname,
    devServer: {  //这里配置webpack-dev-server
      publicPath: "/build/",
      stats: { colors: true },
      inline: true,
      watchContentBase: true,
      disableHostCheck: true
    },
		entry: {
      'boot': './src/boot.jsx'
    },
		output: {
			path: __dirname + '/build/',
			filename: "[name].js"
    },
    externals: {
      $ : 'window.$'
    },
		// plugins: plugins,
		resolve: {
			alias: {
				src: srcDir,
      },
      extensions: [".js", ".json", ".jsx"],
			modules: ["node_modules"]
    },
    module: {
      rules:[
        {
          test: /\.(jsx|js)$/,
          // exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env','stage-0'],
              // plugins: ["syntax-jsx","transform-react-jsx"]
              // plugins: ["syntax-jsx",path.resolve(__dirname, './transform-magix-jsx.js') ]
              plugins: ['magix-transform-jsx']
            }
          }
        }
      ]
    }
	}
}