const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/api'))
      .set('styles', resolve('src/assets/styles'))
      .set('utils', resolve('src/utils'))
      .set('http', resolve('src/http'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
      .set('img', resolve('src/assets/img'))
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    },
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        resolve("src/assets/styles/mixins.less"),
        resolve("src/assets/styles/vars.less"),
      ]
    }
  }
}
