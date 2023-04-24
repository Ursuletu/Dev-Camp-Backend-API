// @description   Logs request to console
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next(); // Call next in every piece of middleware
}

module.exports = logger;