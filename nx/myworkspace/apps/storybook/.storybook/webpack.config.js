const path = require('path');

module.exports = function({ config }) {
    config.module.rules.push({
        test: /\.stories\.ts?$/,
        loaders: [
            {
                loader: require.resolve('@storybook/addon-storysource/loader'),
                options: {
                    parser: 'typescript'
                }
            }
        ],
        enforce: 'pre'
    });

    // config.module.rules.push({
    //     test: /.jsx?$/,
    //     loader: 'babel-loader',
    //     query: {
    //         presets: ['@babel/preset-env', '@babel/react']
    //     }
    // });

    return config;
};
