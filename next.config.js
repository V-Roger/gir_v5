const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder({
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

        return config;
    }
});