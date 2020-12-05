var path = require('path');
const DirectoryTreePlugin = require('directory-tree-webpack-plugin')

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@content': process.env.VUE_APP_SITE === 'places' ? path.resolve(__dirname, 'content/pages/places') : path.resolve(__dirname, 'content/pages/access')
            }
        },
        plugins: [
            new DirectoryTreePlugin({
              dir: `./content/documentation/${process.env.VUE_APP_SITE}`,
              path: './src/_content.json',
              extensions: /\.md/
            })
          ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        }
    },
    chainWebpack: config => {
        config.module
            .rule('yaml')
            .test(/\.yaml$/)
            .use('js-yaml-loader')
            .loader('js-yaml-loader')
            .end()
            
        config.module
            .rule('md')
            .test(/\.md$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end()

        config
            .plugin('html')
            .tap(args => {
                args[0].favicon_name = process.env.VUE_APP_SITE === 'places' ? 'favicons/places/favicon.svg' : 'favicons/access/favicon.svg';
                args[0].favicon_safari_name = process.env.VUE_APP_SITE === 'places' ? 'favicons/places/safari-pinned-tabs.svg' : 'favicons/access/safari-pinned-tabs.svg';
                return args;
            });
    }
}