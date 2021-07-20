const nodeExternals = require('webpack-node-externals')
const { PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER } = require('next/constants')

module.exports = (phase) => ({
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
        if (phase === PHASE_PRODUCTION_SERVER) {
            config.externals = [nodeExternals()]
        }

        return config;
    }
});