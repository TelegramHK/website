const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      // alternative to jsconfig compilerOptions.paths
      alias: {
        "@": path.resolve(__dirname, "src/"),
        "@components": path.resolve(__dirname, 'src/components'),
      },
    },
  })
}