// craco.config.js
const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: './tsconfig.extend.json', 
        baseUrl: 'http://localhost:5000/clone-72220/us-central1/api',
      },
    },
  ],
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Add resolve.fallback configuration for the 'https', 'http', 'url', and 'buffer' modules
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        'https': require.resolve('https-browserify'),
        'http': require.resolve('stream-http'),
        'url': require.resolve('url/'),
        'buffer': require.resolve('buffer/'),
      };

      return webpackConfig;
    },
  },
};
