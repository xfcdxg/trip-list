const path = require('path')

function moduleDir(m) {
  return path.dirname(require.resolve(`${m}/package.json`))
}

module.exports = {
  webpack: (config, { buildId, dev }) => {

    config.resolve.extensions = ['.web.js', '.js', '.json']

    config.module.rules.push(
      {
        test: /\.(png|jpg|gif)$/,
        include: [ path.resolve(__dirname, 'assets') ],
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1,
            name : 'images/[name].[ext]?[hash:8]'
          }
        }]
      },
      {
        test: /\.(svg)$/i,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        },
        include: [
          moduleDir('antd-mobile'),
          __dirname
        ]
      },
      {
        test: /\.(svg)$/i,
        loader: 'svg-sprite-loader',
        include: [
          moduleDir('antd-mobile'),
          __dirname
        ]
      }
    )

    return config
  }
}
