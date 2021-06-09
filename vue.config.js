var path = require('path');
const DirectoryTreePlugin = require('directory-tree-webpack-plugin')

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@content': path.resolve(__dirname, 'content/access'),
               
            }
        },
        plugins: [
            new DirectoryTreePlugin({
                dir: `./content/access/en/documentation`,
                path: './src/en_content.json',
                extensions: /\.md/
            }),
            new DirectoryTreePlugin({
                dir: `./content/access/de/documentation`,
                path: './src/de_content.json',
                extensions: /\.md/
            })
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[hash].bundle.js'
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
                args[0].favicon_name = 'favicons/access/favicon.svg';
                args[0].favicon_safari_name = 'favicons/access/safari-pinned-tabs.svg';
                return args;
            });
    }
}