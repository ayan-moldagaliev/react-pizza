const path = require('path');

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, 'src/'),
      "@components": path.resolve(__dirname, 'src/components/'),
      "@styles": path.resolve(__dirname, 'src/styles/'),
      "@utilities": path.resolve(__dirname, 'src/utilities/'),
      "@images": path.resolve(__dirname, 'src/assets/images/'),
    },
  },
};
