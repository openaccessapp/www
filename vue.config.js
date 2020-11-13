var path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@content': process.env.VUE_APP_SITE === 'places' ? path.resolve(__dirname, 'content/places') : path.resolve(__dirname, 'content/access')
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule('yaml')
            .test(/\.yaml$/)
            .use('js-yaml-loader')
            .loader('js-yaml-loader')
            .end()
    }
}