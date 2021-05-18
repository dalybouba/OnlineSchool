export default {
  NODE_ENV: process.env.NODE_ENV || '',
  DB_URL: process.env.DB_URL || '"mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false',
  DB_NAME: process.env.DB_NAME || 'carna',
  DB_USER: process.env.DB_USER || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  SECRET_KEY: process.env.SECRET_KEY || 'aa',
};
