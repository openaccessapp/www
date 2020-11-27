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

        config
            .plugin('html')
            .tap(args => {
                args[0].favicon_name = process.env.VUE_APP_SITE === 'places' ? 'favicons/places/favicon.svg' : 'favicons/access/favicon.svg';
                args[0].favicon_safari_name = process.env.VUE_APP_SITE === 'places' ? 'favicons/places/safari-pinned-tabs.svg' : 'favicons/access/safari-pinned-tabs.svg';
                return args;
            });
    }
}