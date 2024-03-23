const dotenv = require('dotenv');
const path = require('path'); 
dotenv.config();

module.exports = {
  env: {
    FETCH_WIDGETS_URL: process.env.FETCH_WIDGETS_URL,
  },
  webpack: (config) => {
    config.resolve.alias['@customTypes'] = path.join(__dirname, 'Types');
    config.resolve.alias['@api'] = path.join(__dirname, 'API');
    return config;
  },
};
