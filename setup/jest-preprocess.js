const babelOptions = {
  presets: ['babel-preset-gatsby'],
  env: {
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  }
}

module.exports = require('babel-jest').createTransformer(babelOptions)
