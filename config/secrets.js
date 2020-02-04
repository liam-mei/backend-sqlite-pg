module.exports = {
  jwt: process.env.JWT_SECRET || 'Computer, load up celery man, please',
  port: process.env.PORT || 5000,
  environment: process.env.ENVIRONMENT || 'development',
};
