module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.ios.js', '.android.js'],
          alias: {
            _assets: './src/assets',
            _components: './src/components',
            _hooks: './src/hooks',
            _navigations: './src/navigations',
            _scenes: './src/scenes',
            _services: './src/services',
            _styles: './src/styles',
            _utils: './src/utils'
          }
        }
      ]
    ]
  }
}
