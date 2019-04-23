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
        // include: [path.join(__dirname, "../abstract")],
        loader: "file-loader?name=assets/[name].[ext]"
    });

    // config.module.rules.push({
    //     test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    //     loader: 'svg-url-loader',
    //     query: {
    //       limit: '10000',
    //       mimetype: 'application/svg+xml'
    //     }
    // });

    return config;
};
