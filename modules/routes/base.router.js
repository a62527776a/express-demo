const Base = require('../controllers/base.controller');

module.exports = (app) => {
  app.route('/api/:className').get(Base.find);
  app.route('/api/:className/:id').get(Base.get);
  app.route('/api/:className/:id').post(Base.post);
  app.route('/api/:className/:id').put(Base.put);
  app.route('/api/:className/:id').delete(Base.delete);
}