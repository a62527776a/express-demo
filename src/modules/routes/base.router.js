import Base from '../controllers/base.controller'

let routes = (app) => {
  app.route('/api/:className').get(Base.find);
  app.route('/api/:className').post(Base.post);
  app.route('/api/:className/:id').get(Base.get);
  app.route('/api/:className/:id').put(Base.put);
  app.route('/api/:className/:id').delete(Base.delete);
}

export default routes