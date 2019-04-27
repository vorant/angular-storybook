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

    config.module.rules.push({
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: "file-loader?name=assets/[name].[ext]"
    });

    return config;
};
