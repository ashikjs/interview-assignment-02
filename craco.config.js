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
                            '@layout-body-background': '#ffffff',
                            '@layout-header-background': '#c7c7c7',
                            '@text-selection-bg': '#c7c7c7',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};