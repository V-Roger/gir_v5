const withImages = require('next-images');

module.exports = withImages({
    reactStrictMode: true,
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: {
                    mode: ['body']
                }            
            }
        )
        cfg.externals.sharp =  'commonjs sharp'

        return cfg;
    }
});