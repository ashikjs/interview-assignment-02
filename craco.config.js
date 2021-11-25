const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#ff0',
                            '@btn-primary-color': '#111',
                            '@layout-header-background': '#c7c7c7',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};