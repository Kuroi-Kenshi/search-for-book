const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@containers': 'src/containers',
    '@store': 'src/store',
    '@hoc-helpers': 'src/hoc-helpers',
    '@utils': 'src/utils',
  })(config);

  return config;
};
