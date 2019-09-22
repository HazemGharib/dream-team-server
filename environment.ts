import dotenv = require('dotenv');
dotenv.config();

export = {
    port: process.env.PORT || '3000',
    apiBaseUrl: process.env.API_BASE_URL || '',
    apiKey: process.env.API_KEY || '',
    eplId: process.env.EPL_ID || ''
};