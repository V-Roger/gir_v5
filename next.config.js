const withImages = require('next-images');

module.exports = withImages({
    reactStrictMode: true,
    webpack: (config) => {
        config.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: {
                    mode: ['body']
                }            
            }
        )
        config.module.rules.push(
            {
            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            loader: 'url-loader' 
        }
        )
        config.externals.sharp =  'commonjs sharp'

        return config;
    }
});