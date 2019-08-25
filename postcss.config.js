module.exports = {
    plugins: {
        autoprefixer: {
            overrideBrowserslist: ['> 1%', 'last 2 versions', 'IE 9'],
        },
        cssnano: {
            preset: [
                'default',
                {
                    discardComments: {
                        removeAll: true,
                    },
                },
            ],
        },
    },
};
