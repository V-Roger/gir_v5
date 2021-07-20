module.exports = () => ({
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

        config.externals = [
            'react',
            'react-dom',
            {
                'sharp': 'commonjs sharp'
            }
        ]

        return config;
    }
});