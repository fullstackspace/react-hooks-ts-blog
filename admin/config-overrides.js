const { override, addWebpackAlias, adjustStyleLoaders, fixBabelImports } = require('customize-cra')
const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css', //自动打包相关的样式 默认为 style:'css'
  }),
  // 配置路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
  adjustStyleLoaders((rule) => {
    if (rule.test.toString().includes('scss')) {
      rule.use.push({
        loader: require.resolve('sass-resources-loader'),
        options: {
          resources: './src/assets/outer.scss',
        },
      })
    }
  })
)
